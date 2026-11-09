import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { SUBJECTS } from "../data/registry";
import HomeScreen from "./HomeScreen";
import SubjectMenuScreen from "./SubjectMenuScreen";
import ResultsScreen from "./ResultsScreen";
import HistoryScreen from "./HistoryScreen";

let storage;

beforeEach(() => {
  storage = new Map();
  vi.stubGlobal("localStorage", {
    getItem: (key) => storage.get(key) ?? null,
    setItem: (key, value) => storage.set(key, value),
  });
});

afterEach(() => vi.unstubAllGlobals());

describe("workbook screens", () => {
  it("keeps all eight subject entry points and the stars action", () => {
    const html = renderToStaticMarkup(createElement(HomeScreen));
    expect(html.match(/class="subject-card"/g)).toHaveLength(8);
    for (const key of Object.keys(SUBJECTS)) {
      expect(html).toContain(`data-subject="${key}"`);
    }
    expect(html).toContain("My Stars");
  });

  it("keeps every math activity accessible and explains locked skill practice", () => {
    const html = renderToStaticMarkup(createElement(SubjectMenuScreen, { subject: "math" }));
    expect(html.match(/class="activity-card"/g)).toHaveLength(SUBJECTS.math.tests.length);
    expect(html).toContain("Number stories &amp; operations 1");
    expect(html).toContain("Big math challenge");
    expect(html).toContain("Unlocks when a skill needs a little extra practice");
    expect(html.match(/ disabled=""/g)).toHaveLength(1);
  });

  it("shows existing high scores without changing their storage keys", () => {
    storage.set("highscore-math-division", JSON.stringify({ score: 90 }));
    const html = renderToStaticMarkup(createElement(SubjectMenuScreen, { subject: "math" }));
    expect(html).toContain("Personal best · 90/100");
    expect(html).toContain('aria-label="3 of 3 stars"');
  });

  it("retains passage context and explanations in mistake review", () => {
    const html = renderToStaticMarkup(createElement(ResultsScreen, {
      subject: "math",
      testIdx: 0,
      results: {
        score: 0,
        correctCount: 0,
        answeredCount: 1,
        missedQuestions: [{
          question: {
            question: "How many pencils?",
            passage: "Three boxes each hold four pencils.",
            explanation: "3 groups of 4 make 12.",
          },
          selected: "7",
          correct: "12",
        }],
      },
    }));
    expect(html).toContain('aria-label="0 of 3 stars earned"');
    expect(html).toContain("Three boxes each hold four pencils.");
    expect(html).toContain("3 groups of 4 make 12.");
    expect(html).toContain("Every try counts.");
  });

  it("has an actionable empty history", () => {
    const html = renderToStaticMarkup(createElement(HistoryScreen));
    expect(html).toContain("Your first page is waiting.");
    expect(html).toContain("Explore subjects");
  });

  it("renders existing history and its recorded stars", () => {
    storage.set("quiz-history", JSON.stringify([{
      subjectKey: "math",
      testKey: "division",
      testLabel: "Division",
      subjectLabel: "Math · Grade 3",
      score: 90,
      stars: 3,
      date: Date.now(),
    }]));
    const html = renderToStaticMarkup(createElement(HistoryScreen));
    expect(html).toContain('class="history-row"');
    expect(html).toContain('aria-label="3 of 3 stars"');
    expect(html).toContain("Division");
  });
});
