const CUSTOM_PREFIX = "custom-q-";

/** Returns { questions, generatedAt } or null */
export function loadCustomQuestions(subjectKey, testKey) {
  try {
    const raw = localStorage.getItem(
      `${CUSTOM_PREFIX}${subjectKey}-${testKey}`,
    );
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
