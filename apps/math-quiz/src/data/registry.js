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
  mathGrade3SummerPrep,
  elaGrade3SummerPrep,
  tennesseeSummerSocial,
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

/**
 * Subject keys unchanged (saved scores). Topics emphasize 3rd-grade readiness,
 * STEM habits, geography, planets, and curiosity-driving facts.
 */
export const SUBJECTS = {
  math: {
    label: "Math · 3rd-grade ready",
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
        questions: mathGrade3SummerPrep,
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
        key: "ch",
        label: "Big math challenge",
        emoji: "🏆",
        variant: "challenge",
        questions: advancedMath,
      },
    ],
  },
  ela: {
    label: "Reading & writing · 3rd-grade ready",
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
        label: "Tennessee stories & 3rd-grade texts",
        emoji: "🌻",
        questions: elaGrade3SummerPrep,
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
        questions: tennesseeSummerSocial,
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

/** 1–3 stars from score (same thresholds as results UI). */
export function starsFromScore(score) {
  return score >= 90 ? 3 : score >= 70 ? 2 : 1;
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
