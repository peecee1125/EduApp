import { mathPractice1, mathPractice2 } from "./mathQuestions.js";
import { elaPractice1, elaPractice2, elaPractice3 } from "./elaQuestions.js";
import {
  sciencePractice1,
  sciencePractice2,
  scienceAdvanced,
} from "./scienceQuestions.js";
import {
  geographyPractice1,
  geographyPractice2,
  geographyAdvanced,
} from "./geographyQuestions.js";
import {
  solarPractice1,
  solarPractice2,
  solarAdvanced,
} from "./solarSystemQuestions.js";
import {
  dinosaurPractice1,
  dinosaurPractice2,
  dinosaurAdvanced,
} from "./dinosaurQuestions.js";
import {
  funFactsPractice1,
  funFactsPractice2,
  funFactsAdvanced,
} from "./funFactsQuestions.js";
import {
  advancedMath,
  advancedScience,
  advancedELA,
  advancedWorld,
} from "./advancedQuestions.js";
import {
  mathGrade3Practice,
  elaGrade3Practice,
  tennesseeSocialStudies,
} from "./summerTennesseeGrade3.js";
import {
  stemThirdGradeCuriosity,
  planetaryWonderGrade3,
  geographyExplorersGrade3,
  stemWowFactsCuriosity,
  dinoStemFossils,
  mathStemDataGrade3,
} from "./grade3WonderBanks.js";
import {
  multiplicationFoundations,
  multiplicationTablesCore,
  multiplicationTablesAdvanced,
  multiplicationWordProblems,
} from "./multiplicationLearning.js";
import {
  factFluencyQuestions,
  divisionPractice,
  fractionsPractice,
  measurementPractice,
  elaGrade3Depth,
  scienceGrade3Strands,
} from "./grade3Expansion.js";

/**
 * Subject and test keys remain stable so saved progress is preserved.
 */
export const SUBJECTS = {
  math: {
    label: "Math · Grade 3",
    emoji: "🔢",
    color: "#0ea5e9",
    bg: "linear-gradient(135deg,#0ea5e9,#0369a1)",
    tests: [
      {
        key: "p1",
        label: "Number stories & operations 1",
        emoji: "📐",
        questions: mathPractice1,
      },
      {
        key: "p2",
        label: "Number stories & operations 2",
        emoji: "📊",
        questions: mathPractice2,
      },
      {
        key: "g3",
        label: "Multiplication, fractions & measurement",
        emoji: "☀️",
        questions: mathGrade3Practice,
      },
      {
        key: "mst",
        label: "STEM math: charts, time & patterns",
        emoji: "🧮",
        questions: mathStemDataGrade3,
      },
      {
        key: "mult1",
        label: "Multiplication: groups, arrays & turn-arounds",
        emoji: "🐝",
        questions: multiplicationFoundations,
      },
      {
        key: "mult2",
        label: "Times tables: 0, 1, 2, 5, 10",
        emoji: "⭐",
        questions: multiplicationTablesCore,
      },
      {
        key: "mult3",
        label: "Times tables: 3, 4, 6, 7, 8, 9 + tricks",
        emoji: "🧠",
        questions: multiplicationTablesAdvanced,
      },
      {
        key: "mult4",
        label: "Multiplication word problems & fact families",
        emoji: "🕷️",
        questions: multiplicationWordProblems,
      },
      {
        key: "division",
        label: "Division: groups & fact families",
        emoji: "➗",
        questions: divisionPractice,
      },
      {
        key: "fractions",
        label: "Fractions: number lines & comparisons",
        emoji: "🍕",
        questions: fractionsPractice,
      },
      {
        key: "measurement",
        label: "Area, perimeter & elapsed time",
        emoji: "📏",
        questions: measurementPractice,
      },
      {
        key: "fluency",
        label: "Math facts: 60-second sprint",
        emoji: "⏱️",
        mode: "timed",
        questions: factFluencyQuestions,
      },
      {
        key: "weak",
        label: "Practice my math skills",
        emoji: "🎯",
        mode: "weak",
        questions: [],
      },
      {
        key: "ch",
        label: "Big math challenge",
        emoji: "🏆",
        variant: "challenge",
        questions: advancedMath,
      },
    ],
  },
  ela: {
    label: "Reading & writing · Grade 3",
    emoji: "📖",
    color: "#f472b6",
    bg: "linear-gradient(135deg,#fb7185,#be185d)",
    tests: [
      {
        key: "p1",
        label: "Fiction: details & main ideas",
        emoji: "📘",
        questions: elaPractice1,
      },
      {
        key: "p2",
        label: "Fiction & nonfiction mix",
        emoji: "📗",
        questions: elaPractice2,
      },
      {
        key: "p3",
        label: "Vocabulary & text features",
        emoji: "✏️",
        questions: elaPractice3,
      },
      {
        key: "g3",
        label: "Tennessee stories & grade 3 texts",
        emoji: "🌻",
        questions: elaGrade3Practice,
      },
      {
        key: "depth",
        label: "Reading clues, vocabulary & word study",
        emoji: "🔎",
        questions: elaGrade3Depth,
      },
    ],
  },
  science: {
    label: "STEM · life, Earth & physical science",
    emoji: "🔬",
    color: "#22c55e",
    bg: "linear-gradient(135deg,#4ade80,#15803d)",
    tests: [
      {
        key: "p1",
        label: "Living things & ecosystems",
        emoji: "🌿",
        questions: sciencePractice1,
      },
      {
        key: "p2",
        label: "Matter, forces & energy",
        emoji: "⚡",
        questions: sciencePractice2,
      },
      {
        key: "stem3",
        label: "STEM curiosity: data, design & Earth",
        emoji: "🧠",
        questions: stemThirdGradeCuriosity,
      },
      {
        key: "strands",
        label: "Forces, weather & life cycles",
        emoji: "🧲",
        questions: scienceGrade3Strands,
      },
      {
        key: "ch",
        label: "Science super-challenge",
        emoji: "🏆",
        variant: "challenge",
        questions: scienceAdvanced,
      },
    ],
  },
  geography: {
    label: "Geography · maps, Earth & Tennessee",
    emoji: "🗺️",
    color: "#fb923c",
    bg: "linear-gradient(135deg,#fb923c,#c2410c)",
    tests: [
      {
        key: "p1",
        label: "Continents, oceans & map tools",
        emoji: "🌍",
        questions: geographyPractice1,
      },
      {
        key: "p2",
        label: "Landforms & water on Earth",
        emoji: "🏔️",
        questions: geographyPractice2,
      },
      {
        key: "tn",
        label: "Tennessee: symbols, rivers & civics",
        emoji: "🎸",
        questions: tennesseeSocialStudies,
      },
      {
        key: "exp",
        label: "Explorers & world wonders",
        emoji: "🧭",
        questions: geographyExplorersGrade3,
      },
      {
        key: "ch",
        label: "Geography challenge",
        emoji: "🏆",
        variant: "challenge",
        questions: geographyAdvanced,
      },
    ],
  },
  solarSystem: {
    label: "Planets & space science",
    emoji: "🪐",
    color: "#a78bfa",
    bg: "linear-gradient(135deg,#a78bfa,#5b21b6)",
    tests: [
      {
        key: "p1",
        label: "Solar system basics",
        emoji: "🌙",
        questions: solarPractice1,
      },
      {
        key: "p2",
        label: "Moon phases, sky & astronauts",
        emoji: "🚀",
        questions: solarPractice2,
      },
      {
        key: "wonder",
        label: "Planet mysteries & NASA tech",
        emoji: "🛰️",
        questions: planetaryWonderGrade3,
      },
      {
        key: "ch",
        label: "Deep-space challenge",
        emoji: "🏆",
        variant: "challenge",
        questions: solarAdvanced,
      },
    ],
  },
  dinosaurs: {
    label: "Dinosaurs · prehistoric STEM",
    emoji: "🦕",
    color: "#f87171",
    bg: "linear-gradient(135deg,#f87171,#991b1b)",
    tests: [
      {
        key: "p1",
        label: "Famous dinosaurs & time periods",
        emoji: "🪨",
        questions: dinosaurPractice1,
      },
      {
        key: "p2",
        label: "More Mesozoic marvels",
        emoji: "🦖",
        questions: dinosaurPractice2,
      },
      {
        key: "fos",
        label: "Fossils, evidence & birds link",
        emoji: "🔎",
        questions: dinoStemFossils,
      },
      {
        key: "ch",
        label: "Paleontologist challenge",
        emoji: "🏆",
        variant: "challenge",
        questions: dinosaurAdvanced,
      },
    ],
  },
  funFacts: {
    label: "WOW facts · STEM & Earth",
    emoji: "✨",
    color: "#2dd4bf",
    bg: "linear-gradient(135deg,#2dd4bf,#0f766e)",
    tests: [
      {
        key: "p1",
        label: "Animal & body superlatives",
        emoji: "🐆",
        questions: funFactsPractice1,
      },
      {
        key: "p2",
        label: "Countries, records & surprises",
        emoji: "🌈",
        questions: funFactsPractice2,
      },
      {
        key: "wow",
        label: "Mind-blowing science & tech",
        emoji: "🤯",
        questions: stemWowFactsCuriosity,
      },
      {
        key: "ch",
        label: "Mega trivia challenge",
        emoji: "🏆",
        variant: "challenge",
        questions: funFactsAdvanced,
      },
    ],
  },
  advanced: {
    label: "Extra challenge · curious 3rd graders",
    emoji: "🌟",
    color: "#fbbf24",
    bg: "linear-gradient(135deg,#fbbf24,#b45309)",
    tests: [
      {
        key: "math",
        label: "Math stretch lab",
        emoji: "🔢",
        variant: "advanced",
        questions: advancedMath,
      },
      {
        key: "science",
        label: "Science stretch lab",
        emoji: "🔬",
        variant: "advanced",
        questions: advancedScience,
      },
      {
        key: "ela",
        label: "Reading stretch lab",
        emoji: "📖",
        variant: "advanced",
        questions: advancedELA,
      },
      {
        key: "world",
        label: "U.S. & world mix",
        emoji: "🌎",
        variant: "advanced",
        questions: advancedWorld,
      },
    ],
  },
};

/** 0–3 stars from score. */
export function starsFromScore(score) {
  return score >= 90 ? 3 : score >= 70 ? 2 : score > 0 ? 1 : 0;
}

const SKILL_PROGRESS_PREFIX = "skill-progress-";

export function loadSkillProgress(subjectKey) {
  try {
    const raw = localStorage.getItem(`${SKILL_PROGRESS_PREFIX}${subjectKey}`);
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed && typeof parsed === "object" && !Array.isArray(parsed)
      ? parsed
      : {};
  } catch {
    return {};
  }
}

export function saveSkillResults(subjectKey, answers) {
  const progress = loadSkillProgress(subjectKey);
  for (const result of answers ?? []) {
    const category = result.question?._cat;
    if (!category) continue;
    const current = progress[category] ?? { correct: 0, total: 0 };
    progress[category] = {
      correct: current.correct + Number(Boolean(result.isCorrect)),
      total: current.total + 1,
    };
  }
  try {
    localStorage.setItem(
      `${SKILL_PROGRESS_PREFIX}${subjectKey}`,
      JSON.stringify(progress),
    );
  } catch {}
}

export function getWeakSkillQuestions(subjectKey) {
  const progress = loadSkillProgress(subjectKey);
  const weakCategories = new Set(
    Object.entries(progress)
      .filter(([, value]) => value.total >= 2 && value.correct / value.total < 0.7)
      .sort(([, a], [, b]) => a.correct / a.total - b.correct / b.total)
      .map(([category]) => category),
  );
  if (weakCategories.size === 0) return [];

  const seen = new Set();
  return SUBJECTS[subjectKey].tests
    .filter((test) => test.mode !== "weak" && test.mode !== "timed")
    .flatMap((test) => test.questions)
    .filter((question) => {
      if (!weakCategories.has(question._cat)) return false;
      const key = question.question.trim().toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, 60);
}

export function validateQuestionBanks(subjects = SUBJECTS) {
  const errors = [];
  for (const [subjectKey, subject] of Object.entries(subjects)) {
    for (const test of subject.tests) {
      if (test.mode === "weak") continue;
      const seen = new Set();
      for (const [index, question] of (test.questions ?? []).entries()) {
        const label = `${subjectKey}/${test.key}[${index}]`;
        if (!question.question?.trim()) errors.push(`${label}: missing question text`);
        if (!question._cat) errors.push(`${label}: missing _cat`);
        if (
          !Array.isArray(question.choices) ||
          question.choices.length !== 4 ||
          !question.choices.every((choice) => typeof choice === "string") ||
          !question.choices.includes(question.answer)
        ) {
          errors.push(`${label}: expected four string choices including the answer`);
        }
        const normalized = question.question?.trim().toLowerCase();
        if (normalized && seen.has(normalized)) {
          errors.push(`${label}: duplicate question in ${subjectKey}/${test.key}`);
        }
        if (normalized) seen.add(normalized);
      }
    }
  }
  return errors;
}

/** Keep localStorage history bounded (newest attempts kept). */
export const MAX_HISTORY_ENTRIES = 500;

export function trimHistory(history) {
  if (!Array.isArray(history) || history.length <= MAX_HISTORY_ENTRIES) {
    return history;
  }
  return history.slice(-MAX_HISTORY_ENTRIES);
}

export function loadHighScore(subjectKey, testKey) {
  try {
    const raw = localStorage.getItem(`highscore-${subjectKey}-${testKey}`);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveHighScore(subjectKey, testKey, data) {
  try {
    localStorage.setItem(
      `highscore-${subjectKey}-${testKey}`,
      JSON.stringify(data),
    );
  } catch {}
}

const HISTORY_KEY = "quiz-history";

export function loadHistory() {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(parsed)) return [];
    return trimHistory(parsed);
  } catch {
    return [];
  }
}

export function saveAttempt(subjectKey, testKey, data) {
  try {
    const history = [...loadHistory(), { subjectKey, testKey, ...data }];
    localStorage.setItem(HISTORY_KEY, JSON.stringify(trimHistory(history)));
  } catch {}
}

export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Pick `count` questions from `pool` ensuring every _cat category is
 * represented at least once before filling remaining slots randomly.
 * Falls back to pure shuffle if no questions carry _cat tags.
 */
export function pickRepresentative(pool, count = 10) {
  if (!pool || pool.length === 0) return [];
  const tagged = pool.filter((q) => q._cat);
  if (tagged.length === 0) return shuffle(pool).slice(0, count);

  // Group by category
  const groups = {};
  for (const q of tagged) {
    (groups[q._cat] = groups[q._cat] || []).push(q);
  }

  // Pick one random question from each category
  const picked = [];
  const usedIds = new Set();
  for (const cat of Object.keys(groups)) {
    const candidates = shuffle(groups[cat]);
    const q = candidates[0];
    picked.push(q);
    usedIds.add(q);
  }

  // Fill remaining slots from the full shuffled pool (excluding already picked)
  const remaining = shuffle(pool).filter((q) => !usedIds.has(q));
  const combined = shuffle([...picked, ...remaining]).slice(0, count);
  return combined;
}
