import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  SUBJECTS,
  loadHighScore,
  saveHighScore,
  saveAttempt,
  saveSkillResults,
  starsFromScore,
} from "../data/registry";
import NavHeader from "../components/NavHeader";
import { useSound } from "../hooks/useSound";

/** Dedupe persistence + fanfare when React Strict Mode remounts the results screen. */
const persistedCompletionIds = new Set();

const CONFETTI = [
  "⭐",
  "🌟",
  "☀️",
  "🍉",
  "🎉",
  "🎊",
  "💫",
  "🏆",
  "🌊",
  "🎈",
  "🌈",
  "🦋",
];

function Confetti({ count = 20 }) {
  const pieces = Array.from({ length: count }, (_, id) => ({
    id,
    emoji: CONFETTI[id % CONFETTI.length],
    left: Math.random() * 95,
    delay: Math.random() * 1,
    dur: 2.2 + Math.random() * 2,
  }));
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden
    >
      {pieces.map((p) => (
        <motion.span
          key={p.id}
          initial={{ y: -30, opacity: 1, rotate: 0 }}
          animate={{ y: "105vh", opacity: 0, rotate: 540 }}
          transition={{ delay: p.delay, duration: p.dur, ease: "linear" }}
          className="absolute text-2xl"
          style={{ left: `${p.left}%`, top: 0 }}
        >
          {p.emoji}
        </motion.span>
      ))}
    </div>
  );
}

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
    if (completionId == null) return;
    if (persistedCompletionIds.has(completionId)) return;
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
    correctCount,
    answeredCount,
    missedQuestions,
    answers,
  ]);

  const badges = [
    isNewHigh && { icon: "🏆", label: "New High Score!" },
    bestStreak >= 5 && { icon: "🔥", label: `${bestStreak} Answer Streak!` },
    score === 100 && { icon: "🌟", label: "Perfect Score!" },
  ].filter(Boolean);

  return (
    <motion.div
      key="results"
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.35,
        type: "spring",
        stiffness: 240,
        damping: 22,
      }}
      className="relative flex flex-col w-full h-full"
      style={{
        background:
          "linear-gradient(145deg,#0a1628 0%,#0e7490 40%,#f59e0b 130%)",
      }}
    >
      {stars >= 2 && <Confetti count={stars === 3 ? 30 : 16} />}

      <NavHeader
        title="Round complete! 🎓"
        onBack={onHome}
        backLabel="🏠 Home"
      />

      <div className="flex-1 flex flex-col items-center justify-start sm:justify-center gap-3 sm:gap-5 px-5 sm:px-8 py-4 min-h-0 overflow-y-auto">
        {/* Stars */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 280 }}
          className="flex gap-2"
        >
          {[1, 2, 3].map((s) => (
            <span
              key={s}
              className="text-4xl sm:text-5xl drop-shadow-lg"
              style={{ opacity: stars >= s ? 1 : 0.18 }}
            >
              ⭐
            </span>
          ))}
        </motion.div>

        {/* Score */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <div className="text-zinc-200 font-bold text-lg">
            {subj?.emoji} {test?.label}
          </div>
          <div
            className="font-black text-5xl sm:text-7xl leading-none mt-1"
            style={{ color: "#fbbf24" }}
          >
            {score}
            <span className="text-3xl text-zinc-400">/100</span>
          </div>
          <div className="text-zinc-300 text-base mt-1">
            {correctCount ?? score / 10} of {answeredCount ?? 10} correct
          </div>
        </motion.div>

        {/* Badges */}
        {badges.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-3 flex-wrap justify-center"
          >
            {badges.map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-bold"
                style={{
                  background: "rgba(251,191,36,0.15)",
                  border: "1.5px solid #fbbf24",
                }}
              >
                <span className="text-xl">{b.icon}</span>
                {b.label}
              </div>
            ))}
          </motion.div>
        )}

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-3"
        >
          {missedQuestions.length > 0 && (
            <details
              className="w-full max-w-2xl rounded-xl px-4 py-3 text-white"
              style={{
                background: "rgba(0,0,0,0.22)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <summary className="cursor-pointer font-bold">
                Review {missedQuestions.length} missed{" "}
                {missedQuestions.length === 1 ? "answer" : "answers"}
              </summary>
              <ol className="mt-3 space-y-3">
                {missedQuestions.map((item, index) => (
                  <li
                    key={`${item.question.question}-${index}`}
                    className="rounded-lg p-3 text-sm"
                    style={{ background: "rgba(255,255,255,0.08)" }}
                  >
                    <p className="font-bold">{item.question.question}</p>
                    <p className="mt-1 text-white/75">Your answer: {item.selected}</p>
                    <p className="text-green-200">Correct answer: {item.correct}</p>
                    {item.question.explanation ? (
                      <p className="mt-1 text-white/90">
                        Why: {item.question.explanation}
                      </p>
                    ) : (
                      <p className="mt-1 text-white/60">
                        Try explaining what clue or strategy leads to the correct answer.
                      </p>
                    )}
                  </li>
                ))}
              </ol>
            </details>
          )}
          <div className="flex gap-4 flex-wrap justify-center">
            <motion.button
              whileTap={{ scale: 0.93 }}
              onClick={onPlayAgain}
              className="px-5 sm:px-8 py-3 sm:py-4 rounded-2xl font-extrabold text-white text-base sm:text-lg shadow-xl"
              style={{
                background: subj?.bg ?? "linear-gradient(135deg,#7c3aed,#4f46e5)",
              }}
            >
              🔄 Play Again
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.93 }}
              onClick={onSubjectMenu}
              className="px-5 sm:px-8 py-3 sm:py-4 rounded-2xl font-extrabold text-white text-base sm:text-lg shadow-xl"
              style={{
                background: "rgba(255,255,255,0.14)",
                border: "1px solid rgba(255,255,255,0.28)",
              }}
            >
              📋 All Tests
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
