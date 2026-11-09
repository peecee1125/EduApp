import { afterEach, describe, it, expect, vi } from "vitest";
import {
  shuffle,
  starsFromScore,
  trimHistory,
  MAX_HISTORY_ENTRIES,
  SUBJECTS,
  validateQuestionBanks,
  saveSkillResults,
  getWeakSkillQuestions,
  scoreFromAnswers,
} from "./registry.js";

describe("scoreFromAnswers", () => {
  it("reports a standard round as a percentage", () => {
    expect(scoreFromAnswers(5, 10)).toBe(50);
    expect(scoreFromAnswers(10, 10)).toBe(100);
  });
  it("keeps a timed sprint within 100 rather than multiplying points twice", () => {
    expect(scoreFromAnswers(1, 1)).toBe(100);
    expect(scoreFromAnswers(3, 5)).toBe(60);
  });
  it("normalizes short weak-skill rounds", () => {
    expect(scoreFromAnswers(4, 4)).toBe(100);
    expect(scoreFromAnswers(1, 4)).toBe(25);
  });
  it("scores a sprint with no answers as zero", () => {
    expect(scoreFromAnswers(0, 0)).toBe(0);
  });
});

describe("starsFromScore", () => {
  it("returns 3 stars at 90+", () => {
    expect(starsFromScore(90)).toBe(3);
    expect(starsFromScore(100)).toBe(3);
  });
  it("returns 2 stars from 70–89", () => {
    expect(starsFromScore(70)).toBe(2);
    expect(starsFromScore(89)).toBe(2);
  });
  it("returns 1 star below 70", () => {
    expect(starsFromScore(0)).toBe(0);
    expect(starsFromScore(1)).toBe(1);
    expect(starsFromScore(69)).toBe(1);
  });
});

describe("shuffle", () => {
  it("preserves length and multiset of elements", () => {
    const input = ["a", "b", "c", "a"];
    const out = shuffle(input);
    expect(out).toHaveLength(4);
    expect([...out].sort()).toEqual([...input].sort());
    expect(input).toEqual(["a", "b", "c", "a"]);
  });
});

describe("trimHistory", () => {
  it("keeps the newest entries when over the cap", () => {
    const over = MAX_HISTORY_ENTRIES + 50;
    const arr = Array.from({ length: over }, (_, i) => ({ n: i }));
    const trimmed = trimHistory(arr);
    expect(trimmed).toHaveLength(MAX_HISTORY_ENTRIES);
    expect(trimmed[0].n).toBe(50);
    expect(trimmed.at(-1).n).toBe(over - 1);
  });
  it("returns the same array reference when under cap", () => {
    const small = [{ x: 1 }];
    expect(trimHistory(small)).toBe(small);
  });
});

describe("validateQuestionBanks", () => {
  it("finds no malformed, untagged, or repeated questions in a round", () => {
    expect(validateQuestionBanks()).toEqual([]);
  });

  it("reports missing tags and repeated prompts", () => {
    const subjects = {
      sample: {
        tests: [
          {
            key: "one",
            questions: [
              { question: "Same?", choices: ["A", "B", "C", "D"], answer: "A" },
              { question: "Same?", _cat: "review", choices: ["A", "B", "C", "D"], answer: "A" },
            ],
          },
        ],
      },
    };
    expect(validateQuestionBanks(subjects)).toEqual([
      "sample/one[0]: missing _cat",
      "sample/one[1]: duplicate question in sample/one",
    ]);
  });
});

describe("skill practice", () => {
  afterEach(() => vi.unstubAllGlobals());

  it("offers questions from skills with repeated low accuracy", () => {
    const values = new Map();
    vi.stubGlobal("localStorage", {
      getItem: (key) => values.get(key) ?? null,
      setItem: (key, value) => values.set(key, value),
    });

    saveSkillResults("math", [
      { question: { _cat: "equal_groups" }, isCorrect: false },
      { question: { _cat: "equal_groups" }, isCorrect: false },
    ]);

    const questions = getWeakSkillQuestions("math");
    expect(questions.length).toBeGreaterThan(0);
    expect(questions.every((question) => question._cat === "equal_groups")).toBe(true);
    expect(SUBJECTS.math.tests.some((test) => test.key === "weak")).toBe(true);
  });
});
