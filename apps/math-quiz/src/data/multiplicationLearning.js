/**
 * Multiplication learning path for a rising 3rd grader.
 * Progression mirrors how Khan Academy / Bar Model & CGI research-based
 * curricula introduce multiplication:
 *   1) Equal groups (repeated addition) — multiplicationFoundations
 *   2) Arrays & number lines (visual + skip counting) — multiplicationFoundations
 *   3) Turn-around facts (commutative property) — multiplicationFoundations
 *   4) Core tables 0,1,2,5,10 (easiest patterns first) — multiplicationTablesCore
 *   5) Harder tables 3,4,6,7,8,9 + tricks & distributive property (break
 *      apart facts) — multiplicationTablesAdvanced
 *   6) Real-world word problems, fact families & missing factors, square
 *      numbers — multiplicationWordProblems
 *
 * All items use _cat so pickRepresentative() spreads each 10-question round
 * across multiple sub-skills instead of drilling one idea repeatedly.
 */

// ── 1) Foundations: equal groups, arrays, number lines, turn-around facts ──
export const multiplicationFoundations = [
  // equal groups / repeated addition
  {
    _cat: "groups",
    passage: "🐝🐝🐝  🐝🐝🐝  🐝🐝🐝  🐝🐝🐝 — that's 4 groups of 3 bees.",
    question: "4 groups of 3 is the same as which addition?",
    choices: ["3+3+3+3", "4+4+4", "3+4", "4+4"],
    answer: "3+3+3+3",
  },
  {
    _cat: "groups",
    passage: "A crayon box has 5 crayons. There are 3 boxes.",
    question: "Which multiplication fact matches '3 groups of 5'?",
    choices: ["3 × 5", "5 × 8", "3 + 5", "5 − 3"],
    answer: "3 × 5",
  },
  {
    _cat: "groups",
    passage: "🚗🚗 🚗🚗 🚗🚗 🚗🚗 🚗🚗 — 5 groups of 2 toy cars.",
    question: "How many toy cars in all?",
    choices: ["7", "10", "12", "52"],
    answer: "10",
  },
  {
    _cat: "groups",
    passage: "Repeated addition: 6 + 6 + 6 + 6.",
    question: "Which multiplication fact means the same thing?",
    choices: ["4 × 6", "6 × 6", "4 + 6", "6 × 4 × 4"],
    answer: "4 × 6",
  },
  // arrays (rows × columns) — the visual model Khan Academy leads with
  {
    _cat: "array",
    passage:
      "⭐⭐⭐⭐⭐\n⭐⭐⭐⭐⭐\n⭐⭐⭐⭐⭐  →  3 rows, 5 stars in each row.",
    question: "What multiplication fact does this array show?",
    choices: ["3 × 5", "5 × 8", "3 + 5", "3 × 3"],
    answer: "3 × 5",
  },
  {
    _cat: "array",
    passage: "An array has 4 rows with 6 dots in every row.",
    question: "How many dots are in the array?",
    choices: ["10", "20", "24", "28"],
    answer: "24",
  },
  {
    _cat: "array",
    passage: "🟦🟦🟦🟦🟦🟦🟦  🟦🟦🟦🟦🟦🟦🟦 — 2 rows of 7 tiles.",
    question: "What is 2 × 7?",
    choices: ["9", "14", "16", "12"],
    answer: "14",
  },
  {
    _cat: "array",
    question:
      "A garden is planted in an array with 6 rows and 6 plants per row. How many plants total?",
    choices: ["12", "30", "36", "42"],
    answer: "36",
  },
  // number line / skip counting
  {
    _cat: "skip",
    passage: "Skip counting by 3s on a number line: 0, 3, 6, 9, ___.",
    question: "What number comes next?",
    choices: ["10", "11", "12", "13"],
    answer: "12",
  },
  {
    _cat: "skip",
    passage: "Count by 5s: 5, 10, 15, 20, ___.",
    question: "What is the next number?",
    choices: ["22", "24", "25", "30"],
    answer: "25",
  },
  {
    _cat: "skip",
    passage: "Count by 10s: 10, 20, 30, ___.",
    question: "What comes next?",
    choices: ["31", "35", "40", "50"],
    answer: "40",
  },
  {
    _cat: "skip",
    passage:
      "Jumping by 4 on a number line, 5 jumps from 0 lands on 4, 8, 12, 16, ___.",
    question: "Where does the 5th jump land?",
    choices: ["18", "20", "24", "16"],
    answer: "20",
  },
  {
    _cat: "skip",
    question: "Skip counting by 6s: 6, 12, 18, 24, ___. What comes next?",
    choices: ["26", "28", "30", "32"],
    answer: "30",
  },
  // turn-around facts / commutative property
  {
    _cat: "turnaround",
    passage: "3 × 4 = 12.",
    question:
      "Multiplication facts can flip order and still match — what is 4 × 3?",
    choices: ["7", "12", "34", "43"],
    answer: "12",
  },
  {
    _cat: "turnaround",
    passage:
      "A 2-row array of 8 dots turned on its side becomes an 8-row array of 2 dots. Both have the same total!",
    question: "This idea — that a × b = b × a — is called the:",
    choices: [
      "Commutative (turn-around) property",
      "Distributive property",
      "Associative property",
      "Identity property",
    ],
    answer: "Commutative (turn-around) property",
  },
  {
    _cat: "turnaround",
    passage: "If 7 × 9 = 63,",
    question: "what is 9 × 7?",
    choices: ["56", "63", "72", "16"],
    answer: "63",
  },
  {
    _cat: "turnaround",
    question: "Which fact is TRUE just because of the turn-around rule?",
    choices: [
      "6 × 2 = 2 × 6",
      "6 + 2 = 2 − 6",
      "6 × 2 = 6 + 2",
      "6 ÷ 2 = 2 ÷ 6",
    ],
    answer: "6 × 2 = 2 × 6",
  },
];

// ── 2) Core tables: 0, 1, 2, 5, 10 — the easiest patterns to notice ──
export const multiplicationTablesCore = [
  {
    _cat: "x0x1",
    passage: "The zero property: anything times 0 is always 0.",
    question: "What is 8 × 0?",
    choices: ["0", "8", "1", "80"],
    answer: "0",
  },
  {
    _cat: "x0x1",
    passage: "The identity property: any number times 1 stays the same.",
    question: "What is 1 × 9?",
    choices: ["0", "1", "9", "10"],
    answer: "9",
  },
  {
    _cat: "x0x1",
    question: "What is 0 × 27?",
    choices: ["27", "1", "0", "270"],
    answer: "0",
  },
  {
    _cat: "x0x1",
    question: "What is 6 × 1?",
    choices: ["1", "6", "7", "0"],
    answer: "6",
  },
  {
    _cat: "x2",
    passage: "Multiplying by 2 is the same as doubling a number.",
    question: "What is 2 × 6?",
    choices: ["8", "10", "12", "14"],
    answer: "12",
  },
  {
    _cat: "x2",
    question: "What is 2 × 9?",
    choices: ["16", "18", "20", "11"],
    answer: "18",
  },
  {
    _cat: "x2",
    question: "What is 7 × 2?",
    choices: ["9", "12", "14", "16"],
    answer: "14",
  },
  {
    _cat: "x5",
    passage:
      "Pattern watch: every ×5 answer ends in 0 or 5 — and skip-counting by 5 gets you there fast.",
    question: "What is 5 × 4?",
    choices: ["9", "20", "25", "15"],
    answer: "20",
  },
  {
    _cat: "x5",
    question: "What is 5 × 7?",
    choices: ["30", "35", "40", "25"],
    answer: "35",
  },
  {
    _cat: "x5",
    question: "What is 5 × 9?",
    choices: ["40", "45", "50", "35"],
    answer: "45",
  },
  {
    _cat: "x5",
    passage:
      "Trick: 5 × any number is half of 10 × that number (10 × 6 = 60, so 5 × 6 = 30).",
    question: "Using that trick, what is 5 × 8?",
    choices: ["35", "40", "45", "48"],
    answer: "40",
  },
  {
    _cat: "x10",
    passage: "Pattern: ×10 just adds a zero to the end of the number.",
    question: "What is 10 × 6?",
    choices: ["16", "60", "600", "106"],
    answer: "60",
  },
  {
    _cat: "x10",
    question: "What is 10 × 8?",
    choices: ["18", "80", "800", "108"],
    answer: "80",
  },
  {
    _cat: "x10",
    question: "What is 3 × 10?",
    choices: ["13", "30", "300", "31"],
    answer: "30",
  },
  {
    _cat: "pattern",
    passage: "Look at 2×5=10, 4×5=20, 6×5=30.",
    question: "What pattern do you notice as the first number goes up by 2?",
    choices: [
      "The answer goes up by 10 each time",
      "The answer stays the same",
      "The answer goes up by 5 each time",
      "The answer gets smaller",
    ],
    answer: "The answer goes up by 10 each time",
  },
  {
    _cat: "pattern",
    passage: "Even × even, even × odd, odd × odd — 2×3=6, 3×3=9, 4×3=12.",
    question: "Which of these products is ODD?",
    choices: ["2 × 3", "3 × 3", "4 × 3", "6 × 3"],
    answer: "3 × 3",
  },
];

// ── 3) Harder tables: 3,4,6,7,8,9 + tricks & distributive (break-apart) ──
export const multiplicationTablesAdvanced = [
  {
    _cat: "x3",
    question: "What is 3 × 6?",
    choices: ["9", "15", "18", "21"],
    answer: "18",
  },
  {
    _cat: "x3",
    question: "What is 3 × 8?",
    choices: ["21", "24", "27", "18"],
    answer: "24",
  },
  {
    _cat: "x3",
    passage: "Trick: 3 × a number = double it, then add one more group.",
    question: "Using that trick, what is 3 × 7 (double 7 is 14, plus 7 more)?",
    choices: ["18", "21", "24", "28"],
    answer: "21",
  },
  {
    _cat: "x4",
    passage:
      "Trick: ×4 is 'double, double' — double the number, then double again.",
    question: "Double-double 6 (6→12→24). What is 4 × 6?",
    choices: ["10", "20", "24", "28"],
    answer: "24",
  },
  {
    _cat: "x4",
    question: "What is 4 × 7?",
    choices: ["24", "26", "28", "32"],
    answer: "28",
  },
  {
    _cat: "x4",
    question: "What is 4 × 9?",
    choices: ["32", "36", "40", "45"],
    answer: "36",
  },
  {
    _cat: "x6",
    question: "What is 6 × 4?",
    choices: ["20", "24", "28", "18"],
    answer: "24",
  },
  {
    _cat: "x6",
    passage:
      "Rhyme some kids use: '6 times 8 fell on the floor, picked it up, it's 48!'",
    question: "What is 6 × 8?",
    choices: ["42", "46", "48", "54"],
    answer: "48",
  },
  {
    _cat: "x6",
    question: "What is 6 × 7?",
    choices: ["36", "40", "42", "48"],
    answer: "42",
  },
  {
    _cat: "x7",
    question: "What is 7 × 3?",
    choices: ["18", "21", "24", "27"],
    answer: "21",
  },
  {
    _cat: "x7",
    question: "What is 7 × 6?",
    choices: ["36", "40", "42", "48"],
    answer: "42",
  },
  {
    _cat: "x7",
    passage: "Break it apart: 7 × 8 = (5 × 8) + (2 × 8) = 40 + 16.",
    question: "So what is 7 × 8?",
    choices: ["54", "56", "58", "64"],
    answer: "56",
  },
  {
    _cat: "x8",
    question: "What is 8 × 3?",
    choices: ["21", "24", "27", "32"],
    answer: "24",
  },
  {
    _cat: "x8",
    passage:
      "Trick: ×8 is 'double, double, double' — three doublings of the number.",
    question: "Triple-double 5 (5→10→20→40). What is 8 × 5?",
    choices: ["35", "40", "45", "48"],
    answer: "40",
  },
  {
    _cat: "x8",
    question: "What is 8 × 7?",
    choices: ["49", "54", "56", "64"],
    answer: "56",
  },
  {
    _cat: "x9",
    passage:
      "Finger trick for ×9: hold up 10 fingers. For 9 × 3, fold down finger #3. 2 fingers before it + 7 after = 27!",
    question:
      "Using the finger trick, what is 9 × 4 (fold down finger #4: 3 before, 6 after)?",
    choices: ["27", "32", "36", "40"],
    answer: "36",
  },
  {
    _cat: "x9",
    passage:
      "Another 9s pattern: the digits of the answer always add up to 9 (9×3=27, 2+7=9).",
    question: "What is 9 × 6?",
    choices: ["45", "54", "56", "63"],
    answer: "54",
  },
  {
    _cat: "x9",
    question: "What is 9 × 8?",
    choices: ["63", "72", "81", "64"],
    answer: "72",
  },
  {
    _cat: "distributive",
    passage:
      "Breaking apart facts (the distributive property): 6 × 7 = (6 × 5) + (6 × 2) = 30 + 12.",
    question: "What is 6 × 7?",
    choices: ["36", "40", "42", "48"],
    answer: "42",
  },
  {
    _cat: "distributive",
    passage: "Break apart 8 × 6 into (8 × 5) + (8 × 1) = 40 + 8.",
    question: "What is 8 × 6?",
    choices: ["42", "44", "46", "48"],
    answer: "48",
  },
  {
    _cat: "distributive",
    passage:
      "To find 9 × 7, some kids think of it as (10 × 7) − (1 × 7) = 70 − 7.",
    question: "What is 9 × 7?",
    choices: ["56", "63", "70", "77"],
    answer: "63",
  },
];

// ── 4) Word problems, fact families, missing factors & square numbers ──
export const multiplicationWordProblems = [
  {
    _cat: "word",
    passage: "A spider has 8 legs. There are 4 spiders in a web.",
    question: "How many legs are there in all?",
    choices: ["12", "24", "32", "40"],
    answer: "32",
  },
  {
    _cat: "word",
    passage: "Each shelf holds 6 books. There are 5 shelves.",
    question: "How many books fit on all the shelves?",
    choices: ["11", "24", "30", "35"],
    answer: "30",
  },
  {
    _cat: "word",
    passage: "A baker makes 7 trays of muffins with 6 muffins on each tray.",
    question: "How many muffins did the baker make?",
    choices: ["36", "40", "42", "48"],
    answer: "42",
  },
  {
    _cat: "word",
    passage: "Each pack of pencils has 4 pencils. Maya buys 9 packs.",
    question: "How many pencils does Maya have?",
    choices: ["13", "27", "32", "36"],
    answer: "36",
  },
  {
    _cat: "word",
    passage: "A parking lot has 8 rows with 9 cars parked in each row.",
    question: "How many cars are in the parking lot?",
    choices: ["17", "63", "72", "81"],
    answer: "72",
  },
  {
    _cat: "word",
    passage: "3 friends each collect 9 seashells at the beach.",
    question: "How many seashells did they collect altogether?",
    choices: ["12", "18", "27", "36"],
    answer: "27",
  },
  // fact families / missing factor (bridges toward division)
  {
    _cat: "missing",
    passage: "Fact family: 4 × 5 = 20, 5 × 4 = 20, 20 ÷ 4 = 5, 20 ÷ 5 = 4.",
    question: "Which fact belongs to the SAME fact family as 3 × 6 = 18?",
    choices: ["6 × 3 = 18", "3 × 7 = 21", "6 × 6 = 36", "18 × 2 = 36"],
    answer: "6 × 3 = 18",
  },
  {
    _cat: "missing",
    question: "Fill in the missing factor: 6 × ___ = 42",
    choices: ["6", "7", "8", "9"],
    answer: "7",
  },
  {
    _cat: "missing",
    question: "Fill in the missing factor: ___ × 8 = 56",
    choices: ["6", "7", "8", "9"],
    answer: "7",
  },
  {
    _cat: "missing",
    question: "Fill in the missing factor: 9 × ___ = 63",
    choices: ["6", "7", "8", "9"],
    answer: "7",
  },
  {
    _cat: "missing",
    passage: "If 5 × 8 = 40,",
    question: "what is 40 ÷ 5?",
    choices: ["5", "6", "8", "9"],
    answer: "8",
  },
  // square numbers — noticing a × a pattern
  {
    _cat: "square",
    passage:
      "When both factors are the same number (like 5 × 5), the answer is a 'square number'.",
    question: "What is 6 × 6?",
    choices: ["12", "24", "30", "36"],
    answer: "36",
  },
  {
    _cat: "square",
    question: "What is 7 × 7?",
    choices: ["42", "49", "56", "63"],
    answer: "49",
  },
  {
    _cat: "square",
    question: "What is 9 × 9?",
    choices: ["72", "81", "90", "99"],
    answer: "81",
  },
  {
    _cat: "square",
    passage: "A square garden has 4 equal sides, 4 tiles long each way.",
    question: "How many square tiles cover the garden (4 × 4)?",
    choices: ["8", "12", "16", "20"],
    answer: "16",
  },
  // mixed review
  {
    _cat: "mixed",
    question: "What is 7 × 9?",
    choices: ["56", "63", "72", "81"],
    answer: "63",
  },
  {
    _cat: "mixed",
    question: "What is 8 × 9?",
    choices: ["63", "64", "72", "81"],
    answer: "72",
  },
  {
    _cat: "mixed",
    question: "What is 6 × 9?",
    choices: ["45", "48", "54", "56"],
    answer: "54",
  },
  {
    _cat: "mixed",
    passage: "Movie night: 5 rows of chairs are set up, 8 chairs in each row.",
    question: "How many chairs are there in all?",
    choices: ["13", "35", "40", "45"],
    answer: "40",
  },
];
