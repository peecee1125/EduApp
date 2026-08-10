/**
 * Multiplication learning path — TN Academic Standards for Math, Grade 3
 * Standards: 3.OA.A.1 (products as equal groups), 3.OA.A.3 (word problems),
 * 3.OA.A.4 (unknowns), 3.OA.B.5 (commutative/distributive properties),
 * 3.OA.B.6 (division as unknown-factor), 3.OA.C.7 (fluent × and ÷ within 100),
 * 3.OA.D.8 (two-step), 3.OA.D.9 (patterns).
 * All items use _cat so pickRepresentative() spreads each 10-question round
 * across foundational skills.
 */

/** Foundations: what multiplication means — groups, arrays, skip counting, commutative */
export const multiplicationFoundations = [
  {
    _cat: "groups",
    passage:
      "There are 4 tables in Ms. Rivera's art room. Each table has 3 paint jars.",
    question: "Which multiplication sentence matches this story?",
    choices: ["4 + 3 = 7", "4 × 3 = 12", "4 − 3 = 1", "12 × 3 = 36"],
    answer: "4 × 3 = 12",
  },
  {
    _cat: "groups",
    passage: "A florist makes 5 bouquets. Each bouquet has 6 flowers.",
    question: "How many flowers did the florist use in all?",
    choices: ["11", "25", "30", "36"],
    answer: "30",
  },
  {
    _cat: "groups",
    question: "Which drawing shows 3 groups of 4?",
    choices: ["★★★★ ★★★★ ★★★★", "★★★ ★★★★", "★★★★★★★★", "★★ ★★ ★★"],
    answer: "★★★★ ★★★★ ★★★★",
  },
  {
    _cat: "groups",
    passage: "A pack of stickers holds 8 stickers. Diego buys 4 packs.",
    question: "How many stickers does Diego have?",
    choices: ["12", "24", "28", "32"],
    answer: "32",
  },
  {
    _cat: "array",
    passage: "A classroom has chairs in 5 rows with 4 chairs in each row.",
    question: "How many chairs are in the classroom?",
    choices: ["9", "16", "20", "24"],
    answer: "20",
  },
  {
    _cat: "array",
    question: "An egg carton has 2 rows of 6 eggs. Which fact matches?",
    choices: ["2 × 6 = 12", "2 + 6 = 8", "6 − 2 = 4", "6 × 6 = 36"],
    answer: "2 × 6 = 12",
  },
  {
    _cat: "array",
    passage: "Nia arranges 21 books into an array with 3 rows.",
    question: "How many books are in each row?",
    choices: ["3", "6", "7", "9"],
    answer: "7",
  },
  {
    _cat: "array",
    question:
      "Which multiplication fact does this array show?\n★★★★★\n★★★★★\n★★★★★",
    choices: ["3 × 5 = 15", "3 + 5 = 8", "5 × 5 = 25", "3 × 3 = 9"],
    answer: "3 × 5 = 15",
  },
  {
    _cat: "skip",
    question: "Skip count by 4s: 4, 8, 12, __, 20. What number is missing?",
    choices: ["14", "15", "16", "18"],
    answer: "16",
  },
  {
    _cat: "skip",
    question: "Skip count by 3s: 3, 6, 9, 12, __. What comes next?",
    choices: ["13", "14", "15", "18"],
    answer: "15",
  },
  {
    _cat: "skip",
    question:
      "Emma skip counts by 6s to find 6 × 5. She counts 6, 12, 18, 24, 30. What is 6 × 5?",
    choices: ["24", "30", "35", "36"],
    answer: "30",
  },
  {
    _cat: "skip",
    question:
      "Which multiplication fact matches this skip count? 7, 14, 21, 28",
    choices: ["7 × 3 = 21", "7 × 4 = 28", "4 × 4 = 16", "7 + 4 = 11"],
    answer: "7 × 4 = 28",
  },
  {
    _cat: "skip",
    question: "Skip count by 9s: 9, 18, 27, __, 45. What number is missing?",
    choices: ["30", "33", "36", "40"],
    answer: "36",
  },
  {
    _cat: "turnaround",
    question: "If 3 × 8 = 24, what is 8 × 3?",
    choices: ["11", "16", "24", "38"],
    answer: "24",
  },
  {
    _cat: "turnaround",
    question: "The COMMUTATIVE property of multiplication tells us that…",
    choices: [
      "Order matters in multiplication",
      "You can multiply the numbers in any order and get the same product",
      "You must always add first",
      "Multiplication is the same as subtraction",
    ],
    answer:
      "You can multiply the numbers in any order and get the same product",
  },
  {
    _cat: "turnaround",
    question: "Which is the SAME as 6 × 4?",
    choices: ["6 + 4", "4 × 6", "6 − 4", "24 − 6"],
    answer: "4 × 6",
  },
  {
    _cat: "turnaround",
    question:
      "Layla knows 7 × 2 = 14. Which fact does she ALREADY know because of the turn-around rule?",
    choices: ["2 × 7 = 14", "7 + 2 = 9", "14 − 2 = 12", "14 × 2 = 28"],
    answer: "2 × 7 = 14",
  },
];

/** Core tables: ×0, ×1, ×2, ×5, ×10 and their patterns */
export const multiplicationTablesCore = [
  {
    _cat: "x0x1",
    question: "What is 0 × 9?",
    choices: ["0", "1", "9", "10"],
    answer: "0",
  },
  {
    _cat: "x0x1",
    question: "Anything multiplied by 1 equals…",
    choices: ["0", "1", "The other number", "10"],
    answer: "The other number",
  },
  {
    _cat: "x0x1",
    passage: "A jar has 7 marbles. It is copied 0 times.",
    question: "How many marbles are in 0 copies of the jar?",
    choices: ["0", "1", "7", "70"],
    answer: "0",
  },
  {
    _cat: "x0x1",
    question: "What is 1 × 8?",
    choices: ["0", "1", "8", "18"],
    answer: "8",
  },
  {
    _cat: "x2",
    question: "What is 2 × 7?",
    choices: ["9", "12", "14", "27"],
    answer: "14",
  },
  {
    _cat: "x2",
    passage: "A pair of shoes has 2 shoes. Nia has 6 pairs.",
    question: "How many shoes does Nia have in all?",
    choices: ["8", "10", "12", "14"],
    answer: "12",
  },
  {
    _cat: "x2",
    question: "What is DOUBLE 9?",
    choices: ["11", "17", "18", "20"],
    answer: "18",
  },
  {
    _cat: "x5",
    question: "What is 5 × 6?",
    choices: ["11", "25", "30", "56"],
    answer: "30",
  },
  {
    _cat: "x5",
    passage: "Each hand has 5 fingers. There are 4 kids at the table.",
    question: "How many fingers are on all their hands together?",
    choices: ["20", "25", "40", "45"],
    answer: "40",
  },
  {
    _cat: "x5",
    question: "Multiples of 5 always end in…",
    choices: ["0 or 1", "5 or 6", "0 or 5", "2 or 7"],
    answer: "0 or 5",
  },
  {
    _cat: "x5",
    question: "What is 5 × 8?",
    choices: ["13", "35", "40", "45"],
    answer: "40",
  },
  {
    _cat: "x10",
    question: "What is 10 × 7?",
    choices: ["17", "60", "70", "80"],
    answer: "70",
  },
  {
    _cat: "x10",
    passage: "A ten-frame holds 10 counters. A game uses 4 full ten-frames.",
    question: "How many counters are in play?",
    choices: ["14", "40", "44", "410"],
    answer: "40",
  },
  {
    _cat: "x10",
    question: "To multiply a number by 10, you can…",
    choices: [
      "Add a zero at the end of the number",
      "Subtract 10",
      "Divide by 10",
      "Add 10",
    ],
    answer: "Add a zero at the end of the number",
  },
  {
    _cat: "pattern",
    question: "Which pattern is TRUE for even × even?",
    choices: [
      "The product is always ODD",
      "The product is always EVEN",
      "The product is always 0",
      "The product is always 10",
    ],
    answer: "The product is always EVEN",
  },
  {
    _cat: "pattern",
    passage: "5 × 3 = 15, 5 × 5 = 25, 5 × 7 = 35",
    question: "What pattern do you see in these products of 5 × an ODD number?",
    choices: [
      "They all end in 0",
      "They all end in 5",
      "They are all even",
      "They all end in 1",
    ],
    answer: "They all end in 5",
  },
];

/** Advanced tables: ×3, ×4, ×6, ×7, ×8, ×9 and distributive tricks */
export const multiplicationTablesAdvanced = [
  {
    _cat: "x3",
    question: "What is 3 × 8?",
    choices: ["21", "23", "24", "28"],
    answer: "24",
  },
  {
    _cat: "x3",
    passage: "A tricycle has 3 wheels. A parade has 9 tricycles rolling by.",
    question: "How many wheels are rolling in the parade?",
    choices: ["12", "18", "24", "27"],
    answer: "27",
  },
  {
    _cat: "x3",
    question: "Which is a good STRATEGY for 3 × 7?",
    choices: [
      "Add 3 seven times",
      "Multiply by 10",
      "Divide by 3",
      "Subtract 3 from 7",
    ],
    answer: "Add 3 seven times",
  },
  {
    _cat: "x4",
    question: "What is 4 × 6?",
    choices: ["10", "18", "24", "46"],
    answer: "24",
  },
  {
    _cat: "x4",
    passage: "A car has 4 tires. A parking lot has 8 cars.",
    question: "How many tires are in the parking lot?",
    choices: ["12", "16", "28", "32"],
    answer: "32",
  },
  {
    _cat: "x4",
    question:
      "To find 4 × 7, you can double 7 to get 14, then double again to get…",
    choices: ["21", "24", "28", "34"],
    answer: "28",
  },
  {
    _cat: "x6",
    question: "What is 6 × 8?",
    choices: ["42", "46", "48", "54"],
    answer: "48",
  },
  {
    _cat: "x6",
    passage: "A box holds 6 juice pouches. A team has 5 boxes.",
    question: "How many juice pouches does the team have?",
    choices: ["11", "24", "30", "36"],
    answer: "30",
  },
  {
    _cat: "x6",
    question:
      "You can find 6 × 7 by doing 5 × 7 and adding one more 7. What is 6 × 7?",
    choices: ["35", "40", "42", "48"],
    answer: "42",
  },
  {
    _cat: "x7",
    question: "What is 7 × 8?",
    choices: ["49", "54", "56", "63"],
    answer: "56",
  },
  {
    _cat: "x7",
    passage:
      "There are 7 days in a week. Amir practices piano for 3 weeks in a row.",
    question: "How many days has Amir practiced piano?",
    choices: ["10", "14", "21", "24"],
    answer: "21",
  },
  {
    _cat: "x7",
    question: "What is 7 × 6? (Hint: 7 × 6 has the same product as 6 × 7.)",
    choices: ["13", "36", "42", "48"],
    answer: "42",
  },
  {
    _cat: "x8",
    question: "What is 8 × 9?",
    choices: ["17", "63", "72", "89"],
    answer: "72",
  },
  {
    _cat: "x8",
    passage:
      "A spider has 8 legs. Ms. Kim's class finds 4 spiders in the garden.",
    question: "How many spider legs did the class find in all?",
    choices: ["12", "24", "32", "40"],
    answer: "32",
  },
  {
    _cat: "x8",
    question:
      "To multiply 8 × 6, you can double 6 three times: 6 → 12 → 24 → __. What is 8 × 6?",
    choices: ["36", "42", "48", "56"],
    answer: "48",
  },
  {
    _cat: "x9",
    question: "What is 9 × 4?",
    choices: ["27", "35", "36", "45"],
    answer: "36",
  },
  {
    _cat: "x9",
    question:
      "For 9 × 6, you can think 10 × 6 = 60, then subtract one 6. What is 9 × 6?",
    choices: ["45", "48", "54", "56"],
    answer: "54",
  },
  {
    _cat: "x9",
    passage:
      "The digits of 9's multiples add to 9: 18 (1+8=9), 27 (2+7=9), 36 (3+6=9).",
    question: "Following this pattern, the digits of 9 × 7 should ALSO add to…",
    choices: ["7", "9", "10", "16"],
    answer: "9",
  },
  {
    _cat: "distributive",
    passage:
      "Instead of finding 6 × 9 directly, Kai breaks it apart: 6 × 9 = (6 × 5) + (6 × 4).",
    question: "What is (6 × 5) + (6 × 4)?",
    choices: ["30 + 24 = 54", "30 + 24 = 45", "30 × 24 = 720", "6 + 9 = 15"],
    answer: "30 + 24 = 54",
  },
  {
    _cat: "distributive",
    question:
      "Which equation shows the DISTRIBUTIVE property to help find 7 × 8?",
    choices: [
      "7 × 8 = (7 × 5) + (7 × 3)",
      "7 × 8 = 7 + 8",
      "7 × 8 = 8 × 7 × 1 × 1",
      "7 × 8 = 78",
    ],
    answer: "7 × 8 = (7 × 5) + (7 × 3)",
  },
  {
    _cat: "distributive",
    passage: "Jamila splits 8 × 6 into two easier facts.",
    question: "Which split of 8 × 6 is CORRECT?",
    choices: [
      "(8 × 3) + (8 × 3)",
      "(8 × 5) + (8 × 2)",
      "(8 × 4) + (8 × 4)",
      "(8 × 6) + (8 × 6)",
    ],
    answer: "(8 × 3) + (8 × 3)",
  },
];

/** Word problems, missing-number equations, squares, and mixed one/two-step */
export const multiplicationWordProblems = [
  {
    _cat: "word",
    passage: "A pack of trading cards has 6 cards. Diego opens 8 packs.",
    question: "How many trading cards does Diego have?",
    choices: ["14", "42", "48", "56"],
    answer: "48",
  },
  {
    _cat: "word",
    passage: "A bag holds 9 apples. Farmer Riley fills 7 bags.",
    question: "How many apples did Farmer Riley put in bags?",
    choices: ["16", "56", "63", "72"],
    answer: "63",
  },
  {
    _cat: "word",
    passage:
      "45 students go on a field trip. They ride in vans that seat 5 students each.",
    question: "How many vans do they need?",
    choices: ["8", "9", "10", "40"],
    answer: "9",
  },
  {
    _cat: "word",
    passage: "A garden has 32 tomato plants planted in 4 equal rows.",
    question: "How many tomato plants are in each row?",
    choices: ["6", "7", "8", "12"],
    answer: "8",
  },
  {
    _cat: "word",
    passage:
      "Ana buys 3 packs of markers. Each pack has 8 markers. She gives 6 markers to her brother.",
    question: "How many markers does Ana have left?",
    choices: ["14", "17", "18", "22"],
    answer: "18",
  },
  {
    _cat: "word",
    passage:
      "A school store has 5 boxes of pencils. Each box has 9 pencils. They sold 12 pencils today.",
    question: "How many pencils are left in the store?",
    choices: ["33", "42", "45", "57"],
    answer: "33",
  },
  {
    _cat: "missing",
    question: "3 × ___ = 21. What number goes in the blank?",
    choices: ["6", "7", "8", "18"],
    answer: "7",
  },
  {
    _cat: "missing",
    question: "___ × 8 = 48. What number goes in the blank?",
    choices: ["5", "6", "7", "8"],
    answer: "6",
  },
  {
    _cat: "missing",
    passage:
      "Priya has 24 stickers to share EQUALLY among some friends. Each friend gets 6 stickers.",
    question: "How many friends did Priya share with?",
    choices: ["2", "3", "4", "5"],
    answer: "4",
  },
  {
    _cat: "missing",
    question: "56 ÷ ___ = 8. What number goes in the blank?",
    choices: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    _cat: "missing",
    question: "Which fact family MATCHES 4 × 7 = 28?",
    choices: [
      "28 − 4 = 24 and 28 − 7 = 21",
      "7 × 4 = 28 and 28 ÷ 4 = 7 and 28 ÷ 7 = 4",
      "4 + 7 = 11 and 4 − 7 = −3",
      "28 × 4 = 112",
    ],
    answer: "7 × 4 = 28 and 28 ÷ 4 = 7 and 28 ÷ 7 = 4",
  },
  {
    _cat: "square",
    question: "What is 5 × 5?",
    choices: ["10", "20", "25", "55"],
    answer: "25",
  },
  {
    _cat: "square",
    passage:
      "A chessboard has an equal number of rows and columns. It has 8 rows.",
    question: "How many squares are on the chessboard?",
    choices: ["16", "40", "56", "64"],
    answer: "64",
  },
  {
    _cat: "square",
    question: "What is 7 × 7?",
    choices: ["14", "42", "49", "56"],
    answer: "49",
  },
  {
    _cat: "square",
    passage: "A square garden bed is 6 ft on each side.",
    question: "What is the AREA of the garden bed?",
    choices: ["12 sq ft", "24 sq ft", "30 sq ft", "36 sq ft"],
    answer: "36 sq ft",
  },
  {
    _cat: "mixed",
    passage:
      "A pack has 4 juice boxes. A class buys 6 packs, then drinks 10 juice boxes at lunch.",
    question: "How many juice boxes are LEFT?",
    choices: ["10", "14", "16", "24"],
    answer: "14",
  },
  {
    _cat: "mixed",
    passage:
      "A store owner puts 72 muffins EQUALLY into 8 boxes. She sells 3 boxes at a school fair.",
    question: "How many muffins did she sell?",
    choices: ["9", "18", "24", "27"],
    answer: "27",
  },
  {
    _cat: "mixed",
    passage: "A pizza has 8 slices. Two families each order 3 pizzas.",
    question: "How many pizza slices did the families order in all?",
    choices: ["24", "40", "48", "56"],
    answer: "48",
  },
  {
    _cat: "mixed",
    passage:
      "Kai reads 15 pages a night for 5 nights. Then he reads 20 pages on the weekend.",
    question: "How many pages did Kai read in all?",
    choices: ["50", "75", "95", "100"],
    answer: "95",
  },
];
