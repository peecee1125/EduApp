/**
 * Validates all question banks: format, answer-in-choices, counts.
 * Run: node scripts/validateQuestions.mjs
 */
import { SUBJECTS } from "../src/data/registry.js";

let errors = 0;

function checkQuestion(q, label) {
  const issues = [];
  const text = q.question ?? q.q;
  if (typeof text !== "string" || !text.trim()) {
    issues.push("missing question/q");
  }
  if (!Array.isArray(q.choices) || q.choices.length !== 4) {
    issues.push("choices must be array of 4");
  } else if (!q.choices.every((c) => typeof c === "string" && c.trim())) {
    issues.push("choices must be non-empty strings");
  }
  if (typeof q.answer !== "string" || !q.answer.trim()) {
    issues.push("missing answer");
  } else if (q.choices && !q.choices.includes(q.answer)) {
    issues.push(`answer not in choices: "${q.answer}"`);
  }
  for (const issue of issues) {
    console.error(`  ✗ ${label}: ${issue}`);
    errors++;
  }
}

for (const [subjectKey, subj] of Object.entries(SUBJECTS)) {
  for (const test of subj.tests) {
    const pool = test.questions ?? [];
    const label = `${subjectKey}/${test.key}`;
    if (pool.length < 10) {
      console.warn(`  ⚠ ${label}: only ${pool.length} questions (need ≥10 per round)`);
    }
    pool.forEach((q, i) => checkQuestion(q, `${label}[${i}]`));
  }
}

if (errors === 0) {
  console.log("✓ All question banks valid");
  process.exit(0);
} else {
  console.error(`\n${errors} validation error(s)`);
  process.exit(1);
}
