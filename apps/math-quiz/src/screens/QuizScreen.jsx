import {
  useReducer,
  useLayoutEffect,
  useEffect,
  useCallback,
  useRef,
} from "react";
import {
  SUBJECTS,
  shuffle,
  pickRepresentative,
  getWeakSkillQuestions,
  scoreFromAnswers,
} from "../data/registry";
import NavHeader from "../components/NavHeader";
import Icon from "../components/Icon";
import { useSound } from "../hooks/useSound";

const PER_ROUND = 10;
const TIMED_SECONDS = 60;

function initState({ questions, mode }) {
  return {
    questions: (
      mode === "timed" ? shuffle(questions) : pickRepresentative(questions, PER_ROUND)
    ).map((q) => ({
      ...q,
      choices: shuffle(q.choices),
    })),
    index: 0,
    score: 0,
    answeredCount: 0,
    streak: 0,
    bestStreak: 0,
    answers: [],
    mode,
    timeRemaining: TIMED_SECONDS,
    answered: null,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "ANSWER": {
      const q = state.questions[state.index];
      if (!q || state.answered || (state.mode === "timed" && state.timeRemaining === 0)) return state;
      const ok = action.choice === q.answer;
      const streak = ok ? state.streak + 1 : 0;
      return {
        ...state,
        score: ok ? state.score + 10 : state.score,
        answeredCount: state.answeredCount + 1,
        streak,
        bestStreak: Math.max(state.bestStreak, streak),
        answers: [
          ...state.answers,
          {
            question: q,
            selected: action.choice,
            correct: q.answer,
            isCorrect: ok,
          },
        ],
        answered: { selected: action.choice, correct: q.answer },
      };
    }
    case "NEXT":
      return {
        ...state,
        index:
          state.mode === "timed"
            ? (state.index + 1) % state.questions.length
            : state.index + 1,
        answered: null,
      };
    case "TICK":
      return {
        ...state,
        timeRemaining: Math.max(0, state.timeRemaining - 1),
      };
    default:
      return state;
  }
}

const LABELS = ["A", "B", "C", "D"];

export default function QuizScreen({ subject, testIdx, onComplete, onBack }) {
  const subj = SUBJECTS[subject];
  const test = subj?.tests[testIdx];
  const pool =
    test?.mode === "weak"
      ? getWeakSkillQuestions(subject)
      : (test?.questions ?? []);
  const [state, dispatch] = useReducer(
    reducer,
    { questions: pool, mode: test?.mode },
    initState,
  );
  const { playCorrect, playWrong } = useSound();
  const timerRef = useRef(null);
  const countdownRef = useRef(null);
  const scrollRef = useRef(null);
  const questionRef = useRef(null);
  const answerLockRef = useRef(false);
  const completedRef = useRef(false);
  const completionIdRef = useRef(
    typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : `q-${Date.now()}-${Math.random().toString(36).slice(2)}`,
  );

  const isDone =
    state.mode === "timed"
      ? state.timeRemaining === 0
      : state.index >= state.questions.length;
  const q = !isDone ? state.questions[state.index] : null;

  useLayoutEffect(() => {
    if (!isDone) {
      completedRef.current = false;
      return;
    }
    if (completedRef.current) return;
    completedRef.current = true;
    const total = state.mode === "timed" ? state.answeredCount : state.questions.length;
    onComplete({
      score: scoreFromAnswers(state.score / 10, total),
      bestStreak: state.bestStreak,
      correctCount: state.score / 10,
      answeredCount: state.answeredCount,
      answers: state.answers,
      missedQuestions: state.answers.filter((answer) => !answer.isCorrect),
      completionId: completionIdRef.current,
    });
  }, [
    isDone,
    state.score,
    state.bestStreak,
    state.answeredCount,
    state.answers,
    state.mode,
    state.questions.length,
    onComplete,
  ]);

  useEffect(() => {
    if (state.mode !== "timed" || isDone) return undefined;
    countdownRef.current = setInterval(() => dispatch({ type: "TICK" }), 1000);
    return () => clearInterval(countdownRef.current);
  }, [state.mode, isDone]);

  useEffect(() => {
    answerLockRef.current = false;
    scrollRef.current?.scrollTo({ top: 0, behavior: "auto" });
    if (state.index > 0) questionRef.current?.focus({ preventScroll: true });
  }, [state.index]);

  useLayoutEffect(
    () => () => {
      clearTimeout(timerRef.current);
      clearInterval(countdownRef.current);
    },
    [],
  );

  const answer = useCallback(
    (choice) => {
      if (state.answered || !q || answerLockRef.current || isDone) return;
      answerLockRef.current = true;
      dispatch({ type: "ANSWER", choice });
      if (choice === q.answer) playCorrect();
      else playWrong();
      timerRef.current = setTimeout(
        () => dispatch({ type: "NEXT" }),
        state.mode === "timed" ? 500 : 1500,
      );
    },
    [state.answered, state.mode, q, isDone, playCorrect, playWrong],
  );

  if (!test) return null;

  if (isDone) {
    return (
      <main className="screen" aria-busy="true">
        <p className="loading-message" role="status">Gathering your discoveries...</p>
      </main>
    );
  }

  const { answered } = state;
  const timed = state.mode === "timed";
  const longChoices = q.choices.some((choice) => choice.length > 58);
  const progress = timed
    ? ((TIMED_SECONDS - state.timeRemaining) / TIMED_SECONDS) * 100
    : (state.index / state.questions.length) * 100;

  return (
    <main className="screen quiz-screen" data-subject={subject}>
      <NavHeader
        title={test.label}
        backLabel="Activities"
        onBack={() => {
          clearTimeout(timerRef.current);
          clearInterval(countdownRef.current);
          onBack();
        }}
      />

      <div className="quiz-progress-wrap">
        <div className="quiz-meta page-width">
          <span>{timed ? `${state.answeredCount} answered` : `Question ${state.index + 1} of ${state.questions.length}`}</span>
          {state.streak >= 2 && <span className="streak-label">{state.streak} in a row</span>}
          <span className="quiz-score">
            {timed && <Icon name="timer" size={18} />}
            {timed ? `${state.timeRemaining}s left` : `${state.score} points`}
          </span>
        </div>
        <div
          className="quiz-progress"
          role="progressbar"
          aria-label={timed ? "Sprint time elapsed" : "Round progress"}
          aria-valuemin={0}
          aria-valuemax={timed ? TIMED_SECONDS : state.questions.length}
          aria-valuenow={timed ? TIMED_SECONDS - state.timeRemaining : state.index}
        >
          <div style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="screen-scroll quiz-scroll" ref={scrollRef}>
        <div className={`page-width quiz-workspace ${q.passage ? "quiz-with-passage" : ""}`}>
          {q.passage && (
            <section className="reading-sheet" aria-label="Read this passage">
              <p className="eyebrow"><Icon name="book" size={18} /> Read & discover</p>
              <p className="reading-passage">{q.passage}</p>
              <span className="reading-sheet-note">The clues are in the details.</span>
            </section>
          )}
          <section className="question-panel" aria-labelledby="question-heading">
            <p className="eyebrow">{timed ? "Quick thinking" : "Think it through"}</p>
            <h1 id="question-heading" className="question-heading" ref={questionRef} tabIndex={-1}>{q.question}</h1>
            <p className="question-instruction">Choose one answer.</p>
            <div className={`answer-choices ${longChoices ? "answer-choices-long" : ""}`}>
              {q.choices.map((choice, index) => {
                const correct = answered && choice === q.answer;
                const wrong = answered && choice === answered.selected && !correct;
                return (
                  <button
                    key={`${state.index}-${index}`}
                    className={`answer-choice ${correct ? "answer-correct" : wrong ? "answer-wrong" : ""}`}
                    onClick={() => answer(choice)}
                    disabled={Boolean(answered)}
                  >
                    <span className="answer-letter">{LABELS[index]}</span>
                    <span className="answer-text">{choice}</span>
                    {correct ? <Icon name="check" size={22} /> : wrong ? <Icon name="close" size={22} /> : null}
                  </button>
                );
              })}
            </div>
            <div className="answer-feedback" role="status" aria-atomic="true">
              {answered && (
                <p className={answered.selected === q.answer ? "feedback-correct" : "feedback-review"}>
                  <Icon name={answered.selected === q.answer ? "check" : "book"} size={20} />
                  {answered.selected === q.answer ? "You got it!" : `Not quite. The answer is ${q.answer}.`}
                </p>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
