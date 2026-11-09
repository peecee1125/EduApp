import { useEffect, useState } from "react";
import {
  SUBJECTS,
  loadHighScore,
  saveHighScore,
  saveAttempt,
  saveSkillResults,
  starsFromScore,
} from "../data/registry";
import NavHeader from "../components/NavHeader";
import Icon from "../components/Icon";
import { useSound } from "../hooks/useSound";

/** Dedupe persistence + fanfare when React Strict Mode remounts the results screen. */
const persistedCompletionIds = new Set();

export default function ResultsScreen({
  subject,
  testIdx,
  results,
  onPlayAgain,
  onHome,
  onSubjectMenu,
}) {
  const { playFanfare } = useSound();
  const subj = SUBJECTS[subject];
  const test = subj?.tests[testIdx];
  const {
    score,
    bestStreak,
    completionId,
    correctCount,
    answeredCount,
    answers,
    missedQuestions = [],
  } = results ?? {};
  const stars = starsFromScore(score);
  const [isNewHigh, setIsNewHigh] = useState(false);

  useEffect(() => {
    if (completionId == null || persistedCompletionIds.has(completionId)) return;
    persistedCompletionIds.add(completionId);
    playFanfare();
    const prev = loadHighScore(subject, test?.key);
    if (!prev || score > prev.score) {
      saveHighScore(subject, test?.key, { score, stars, date: Date.now() });
      setIsNewHigh(true);
    }
    saveAttempt(subject, test?.key, {
      score,
      stars,
      date: Date.now(),
      subjectLabel: subj?.label,
      testLabel: test?.label,
    });
    saveSkillResults(subject, answers);
  }, [
    completionId,
    playFanfare,
    score,
    stars,
    subject,
    subj?.label,
    test?.key,
    test?.label,
    answers,
  ]);

  const badges = [
    isNewHigh && { icon: "trophy", label: "A new personal best" },
    bestStreak >= 5 && { icon: "spark", label: `${bestStreak} correct in a row` },
    score === 100 && { icon: "check", label: "Every answer correct" },
  ].filter(Boolean);

  return (
    <main className="screen results-screen" data-subject={subject}>
      {stars >= 2 && (
        <div className="confetti" aria-hidden="true">
          {Array.from({ length: 10 }, (_, index) => (
            <span key={index} style={{ "--piece": index }} />
          ))}
        </div>
      )}
      <NavHeader title="Another page of progress" onBack={onHome} />
      <div className="screen-scroll">
        <div className="page-width results-layout">
          <section className="result-sheet" aria-labelledby="results-heading">
            <p className="eyebrow">Round complete</p>
            <div className="result-stars" aria-label={`${stars} of 3 stars earned`}>
              {[1, 2, 3].map((star) => (
                <Icon key={star} name="star" size={48} className={star <= stars ? "star-earned" : "star-empty"} />
              ))}
            </div>
            <h1 id="results-heading">{score >= 70 ? "Look at you grow." : "Every try counts."}</h1>
            <p className="result-activity">{test?.label}</p>
            <p className="result-score">{score}<span>/100</span></p>
            <p className="result-correct">{correctCount ?? score / 10} of {answeredCount ?? 10} correct</p>
            {badges.length > 0 && (
              <div className="result-badges">
                {badges.map((badge) => (
                  <span key={badge.label}><Icon name={badge.icon} size={18} />{badge.label}</span>
                ))}
              </div>
            )}
          </section>

          <section className="result-next" aria-labelledby="next-heading">
            <p className="eyebrow">Keep your curiosity going</p>
            <h2 id="next-heading">What&apos;s next?</h2>
            <p className="result-next-copy">
              {missedQuestions.length > 0
                ? "The ones you missed are a chance to learn something new. Have another look before you go."
                : "Take a moment to enjoy that. Then try another round or discover a different activity."}
            </p>
            <div className="result-actions">
              <button className="button button-primary" onClick={onPlayAgain}>
                <Icon name="replay" size={20} />Try another round
              </button>
              <button className="button button-paper" onClick={onSubjectMenu}>
                All activities<Icon name="arrow" size={20} />
              </button>
            </div>
            {missedQuestions.length > 0 ? (
              <details className="mistake-review">
                <summary>
                  <Icon name="book" size={21} />
                  <span>Review {missedQuestions.length} missed {missedQuestions.length === 1 ? "answer" : "answers"}</span>
                  <Icon name="arrow" size={18} className="review-arrow" />
                </summary>
                <ol className="mistake-list">
                  {missedQuestions.map((item, index) => (
                    <li key={`${item.question.question}-${index}`}>
                      <p className="eyebrow">A second look · {index + 1}</p>
                      {item.question.passage && <p className="review-passage">{item.question.passage}</p>}
                      <h3>{item.question.question}</h3>
                      <p className="review-selected">Your answer: {item.selected}</p>
                      <p className="review-correct"><Icon name="check" size={18} />{item.correct}</p>
                      <p className="review-explanation">
                        {item.question.explanation
                          ? item.question.explanation
                          : "What clue or strategy leads to the correct answer? Try explaining it in your own words."}
                      </p>
                    </li>
                  ))}
                </ol>
              </details>
            ) : (
              <div className="result-note"><Icon name="book" size={25} /><p>A small habit makes a big difference.<br />Come back for another little discovery.</p></div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
