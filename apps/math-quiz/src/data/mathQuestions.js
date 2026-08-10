// Math — TN Academic Standards for Math, Grade 3
// Standards: 3.OA (mult/div, properties, two-step), 3.NBT (round, add/sub within 1000,
// multiply by multiples of 10), 3.NF (fractions), 3.MD (time to minute + elapsed,
// mass & liquid volume, bar/pic graphs, line plots, area, perimeter), 3.G (shapes).
// Categories: "word" | "oa" | "nbt" | "md" | "time" | "money" | "data" | "g"

export const mathPractice1 = [
  // ── 3.OA.D.8 word problems (one- and two-step) ─── 14
  {
    _cat: "word",
    passage: "A school store sold 8 packs of pencils. Each pack has 6 pencils.",
    question: "How many pencils were sold in all?",
    choices: ["14", "42", "48", "56"],
    answer: "48",
  },
  {
    _cat: "word",
    passage: "There are 36 students. They form 4 equal teams for a math relay.",
    question: "How many students are on each team?",
    choices: ["6", "8", "9", "12"],
    answer: "9",
  },
  {
    _cat: "word",
    passage: "Priya reads 24 pages Monday and 37 pages Tuesday.",
    question: "How many pages did she read in the two days?",
    choices: ["51", "61", "63", "71"],
    answer: "61",
  },
  {
    _cat: "word",
    passage: "A bookstore had 245 comics. They sold 128.",
    question: "How many comics are left?",
    choices: ["107", "117", "127", "133"],
    answer: "117",
  },
  {
    _cat: "word",
    passage:
      "A pack of glue sticks has 6 sticks. A teacher buys 4 packs, then gives 5 sticks to another teacher.",
    question: "How many glue sticks does she have left?",
    choices: ["9", "15", "19", "24"],
    answer: "19",
  },
  {
    _cat: "word",
    passage: "A bakery makes 72 cupcakes and puts them equally into 8 boxes.",
    question: "How many cupcakes are in each box?",
    choices: ["7", "8", "9", "10"],
    answer: "9",
  },
  {
    _cat: "word",
    passage: "Kai has 3 boxes with 9 marbles in each. He buys 5 more marbles.",
    question: "How many marbles does Kai have now?",
    choices: ["17", "27", "32", "45"],
    answer: "32",
  },
  {
    _cat: "word",
    passage:
      "A class collected 156 cans on Monday and 89 more on Tuesday for a food drive.",
    question: "How many cans did they collect in the two days?",
    choices: ["225", "235", "245", "255"],
    answer: "245",
  },
  {
    _cat: "word",
    passage:
      "Aunt Riya bakes 42 cookies. She keeps 6 and shares the rest equally among 4 grandkids.",
    question: "How many cookies does EACH grandkid get?",
    choices: ["8", "9", "10", "12"],
    answer: "9",
  },
  {
    _cat: "word",
    passage: "A store has 5 shelves with 8 board games on each shelf.",
    question: "How many board games are on the shelves in all?",
    choices: ["13", "38", "40", "48"],
    answer: "40",
  },
  {
    _cat: "word",
    passage: "A hiker walked 315 steps up a trail and 268 steps back down.",
    question: "How many steps did the hiker take in all?",
    choices: ["483", "573", "583", "593"],
    answer: "583",
  },
  {
    _cat: "word",
    passage:
      "A garden has 6 rows with 7 tomato plants in each row. The farmer removes 8 plants that are sick.",
    question: "How many tomato plants are left?",
    choices: ["27", "34", "42", "50"],
    answer: "34",
  },
  {
    _cat: "word",
    passage:
      "A ticket booth sold 128 tickets on Friday and 236 tickets on Saturday.",
    question: "How many more tickets were sold Saturday than Friday?",
    choices: ["98", "108", "118", "128"],
    answer: "108",
  },
  {
    _cat: "word",
    passage:
      "There are 4 baskets. Each basket has 6 apples. A shopper buys 9 apples.",
    question: "How many apples are left?",
    choices: ["13", "15", "17", "24"],
    answer: "15",
  },

  // ── 3.OA.A/B/C multiplication & division facts + properties ─── 20
  {
    _cat: "oa",
    question: "What is 7 × 6?",
    choices: ["36", "42", "48", "54"],
    answer: "42",
  },
  {
    _cat: "oa",
    question: "What is 9 × 4?",
    choices: ["27", "34", "36", "45"],
    answer: "36",
  },
  {
    _cat: "oa",
    question: "What is 8 × 7?",
    choices: ["49", "54", "56", "63"],
    answer: "56",
  },
  {
    _cat: "oa",
    question: "What is 45 ÷ 5?",
    choices: ["7", "8", "9", "10"],
    answer: "9",
  },
  {
    _cat: "oa",
    question: "What is 63 ÷ 7?",
    choices: ["7", "8", "9", "11"],
    answer: "9",
  },
  {
    _cat: "oa",
    question: "What is 48 ÷ 6?",
    choices: ["6", "7", "8", "9"],
    answer: "8",
  },
  {
    _cat: "oa",
    question: "___ × 8 = 56. What number goes in the blank?",
    choices: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    _cat: "oa",
    question: "6 × ___ = 54. What number goes in the blank?",
    choices: ["6", "7", "8", "9"],
    answer: "9",
  },
  {
    _cat: "oa",
    question: "72 ÷ ___ = 8. What number goes in the blank?",
    choices: ["6", "7", "8", "9"],
    answer: "9",
  },
  {
    _cat: "oa",
    question: "Which fact family MATCHES 6 × 4 = 24?",
    choices: [
      "6 + 4 = 10 and 24 − 6 = 18",
      "4 × 6 = 24, 24 ÷ 6 = 4, 24 ÷ 4 = 6",
      "24 × 4 = 96",
      "6 − 4 = 2 and 24 ÷ 3 = 8",
    ],
    answer: "4 × 6 = 24, 24 ÷ 6 = 4, 24 ÷ 4 = 6",
  },
  {
    _cat: "oa",
    question:
      "The COMMUTATIVE property tells us that 3 × 9 has the same product as…",
    choices: ["9 × 3", "3 + 9", "9 − 3", "3 × 3"],
    answer: "9 × 3",
  },
  {
    _cat: "oa",
    question: "Which equation shows the DISTRIBUTIVE property for 7 × 8?",
    choices: [
      "7 × 8 = 7 + 8",
      "7 × 8 = (7 × 5) + (7 × 3)",
      "7 × 8 = 78",
      "7 × 8 = 8 × 7 × 1",
    ],
    answer: "7 × 8 = (7 × 5) + (7 × 3)",
  },
  {
    _cat: "oa",
    question: "What is 0 × 12?",
    choices: ["0", "1", "12", "120"],
    answer: "0",
  },
  {
    _cat: "oa",
    question: "What is 1 × 15?",
    choices: ["0", "1", "15", "16"],
    answer: "15",
  },
  {
    _cat: "oa",
    question: "What is 9 × 9?",
    choices: ["18", "72", "81", "99"],
    answer: "81",
  },
  {
    _cat: "oa",
    question: "What is 4 × 9?",
    choices: ["13", "27", "36", "45"],
    answer: "36",
  },
  {
    _cat: "oa",
    question: "Which shows 8 × 5 broken apart to help?",
    choices: ["(8 × 2) + (8 × 3)", "8 + 5", "8 × 8", "5 × 5"],
    answer: "(8 × 2) + (8 × 3)",
  },
  {
    _cat: "oa",
    question: "What is 30 ÷ 6?",
    choices: ["4", "5", "6", "7"],
    answer: "5",
  },
  {
    _cat: "oa",
    question: "What is 81 ÷ 9?",
    choices: ["7", "8", "9", "10"],
    answer: "9",
  },
  {
    _cat: "oa",
    question: "Rina knows 4 × 9 = 36. What is 9 × 4?",
    choices: ["13", "27", "36", "40"],
    answer: "36",
  },

  // ── 3.NBT rounding, add/sub within 1000, ×10s ─── 26
  {
    _cat: "nbt",
    question: "Round 47 to the nearest ten.",
    choices: ["40", "45", "50", "70"],
    answer: "50",
  },
  {
    _cat: "nbt",
    question: "Round 82 to the nearest ten.",
    choices: ["70", "80", "85", "90"],
    answer: "80",
  },
  {
    _cat: "nbt",
    question: "Round 251 to the nearest ten.",
    choices: ["240", "250", "260", "300"],
    answer: "250",
  },
  {
    _cat: "nbt",
    question: "Round 375 to the nearest ten.",
    choices: ["370", "375", "380", "400"],
    answer: "380",
  },
  {
    _cat: "nbt",
    question: "Round 469 to the nearest hundred.",
    choices: ["400", "460", "470", "500"],
    answer: "500",
  },
  {
    _cat: "nbt",
    question: "Round 638 to the nearest hundred.",
    choices: ["600", "630", "640", "700"],
    answer: "600",
  },
  {
    _cat: "nbt",
    question: "Round 750 to the nearest hundred.",
    choices: ["700", "750", "800", "900"],
    answer: "800",
  },
  {
    _cat: "nbt",
    question: "What is 253 + 168?",
    choices: ["411", "421", "431", "521"],
    answer: "421",
  },
  {
    _cat: "nbt",
    question: "What is 487 + 254?",
    choices: ["631", "731", "741", "751"],
    answer: "741",
  },
  {
    _cat: "nbt",
    question: "What is 725 − 348?",
    choices: ["377", "387", "477", "487"],
    answer: "377",
  },
  {
    _cat: "nbt",
    question: "What is 900 − 425?",
    choices: ["375", "475", "485", "575"],
    answer: "475",
  },
  {
    _cat: "nbt",
    question: "What is 306 + 259?",
    choices: ["555", "565", "575", "665"],
    answer: "565",
  },
  {
    _cat: "nbt",
    question: "What is 812 − 175?",
    choices: ["637", "643", "737", "647"],
    answer: "637",
  },
  {
    _cat: "nbt",
    question: "What is 5 × 40?",
    choices: ["45", "200", "220", "540"],
    answer: "200",
  },
  {
    _cat: "nbt",
    question: "What is 7 × 60?",
    choices: ["67", "420", "460", "760"],
    answer: "420",
  },
  {
    _cat: "nbt",
    question: "What is 8 × 30?",
    choices: ["38", "220", "240", "830"],
    answer: "240",
  },
  {
    _cat: "nbt",
    question: "What is 9 × 50?",
    choices: ["59", "400", "450", "950"],
    answer: "450",
  },
  {
    _cat: "nbt",
    question: "What is the value of the 8 in 4,875?",
    choices: ["8", "80", "800", "8,000"],
    answer: "800",
  },
  {
    _cat: "nbt",
    question: "Which is the standard form of 'six hundred fifty-two'?",
    choices: ["6,052", "652", "6,520", "625"],
    answer: "652",
  },
  {
    _cat: "nbt",
    question: "Which number is 100 MORE than 738?",
    choices: ["728", "748", "828", "838"],
    answer: "838",
  },
  {
    _cat: "nbt",
    question: "Which number is 10 LESS than 405?",
    choices: ["315", "395", "404", "415"],
    answer: "395",
  },
  {
    _cat: "nbt",
    question: "What number is HALFWAY between 400 and 500?",
    choices: ["425", "450", "475", "550"],
    answer: "450",
  },
  {
    _cat: "nbt",
    question: "Estimate 397 + 218 by rounding EACH to the nearest hundred.",
    choices: ["500", "600", "700", "800"],
    answer: "600",
  },
  {
    _cat: "nbt",
    question: "Which sign makes this TRUE? 486 __ 468",
    choices: ["<", ">", "=", "×"],
    answer: ">",
  },
  {
    _cat: "nbt",
    question: "Which is the smallest?\n429, 249, 942, 294",
    choices: ["429", "249", "942", "294"],
    answer: "249",
  },
  {
    _cat: "nbt",
    question: "Which is the LARGEST?\n617, 671, 176, 761",
    choices: ["617", "671", "176", "761"],
    answer: "761",
  },

  // ── 3.MD.A.2 & 3.MD.C/D measurement (mass, volume, area, perimeter) ─── 7
  {
    _cat: "md",
    question: "A watermelon has a mass of about…",
    choices: ["5 grams", "5 kilograms", "5 milligrams", "5 tons"],
    answer: "5 kilograms",
  },
  {
    _cat: "md",
    question:
      "A juice bottle holds about 500 milliliters. About how many bottles fit in a 2-LITER pitcher?",
    choices: ["2", "4", "5", "10"],
    answer: "4",
  },
  {
    _cat: "md",
    question: "A rectangle is 7 units long and 3 units wide. What is its AREA?",
    choices: ["10 sq units", "20 sq units", "21 sq units", "24 sq units"],
    answer: "21 sq units",
  },
  {
    _cat: "md",
    question: "A rectangle is 9 ft long and 5 ft wide. What is its AREA?",
    choices: ["14 sq ft", "35 sq ft", "40 sq ft", "45 sq ft"],
    answer: "45 sq ft",
  },
  {
    _cat: "md",
    question:
      "A rectangle has a length of 8 units and a width of 2 units. What is its PERIMETER?",
    choices: ["10 units", "16 units", "20 units", "24 units"],
    answer: "20 units",
  },
  {
    _cat: "md",
    question: "A square has sides of 6 cm. What is its PERIMETER?",
    choices: ["12 cm", "18 cm", "24 cm", "36 cm"],
    answer: "24 cm",
  },
  {
    _cat: "md",
    question: "A square has sides of 4 in. What is its AREA?",
    choices: ["8 sq in", "12 sq in", "16 sq in", "20 sq in"],
    answer: "16 sq in",
  },

  // ── 3.MD.A.1 time to nearest minute & elapsed time ─── 16
  {
    _cat: "time",
    question: "How many minutes are in one hour?",
    choices: ["30", "45", "60", "100"],
    answer: "60",
  },
  {
    _cat: "time",
    question: "How many minutes are in a HALF hour?",
    choices: ["15", "20", "30", "45"],
    answer: "30",
  },
  {
    _cat: "time",
    question: "The clock shows 2:37. How would you SAY it?",
    choices: [
      "Half past two",
      "Twenty-three minutes to three",
      "Two thirty-seven",
      "Two twenty-three",
    ],
    answer: "Two thirty-seven",
  },
  {
    _cat: "time",
    question: "The clock shows 4:52. Which time is this CLOSEST to?",
    choices: ["4:00", "4:30", "5:00", "6:00"],
    answer: "5:00",
  },
  {
    _cat: "time",
    passage: "A movie starts at 3:15 p.m. and lasts 45 minutes.",
    question: "What time does the movie end?",
    choices: ["3:45 p.m.", "4:00 p.m.", "4:15 p.m.", "4:45 p.m."],
    answer: "4:00 p.m.",
  },
  {
    _cat: "time",
    passage: "Reading begins at 10:20 a.m. and lasts 40 minutes.",
    question: "What time does reading END?",
    choices: ["10:40 a.m.", "10:50 a.m.", "11:00 a.m.", "11:20 a.m."],
    answer: "11:00 a.m.",
  },
  {
    _cat: "time",
    passage: "Diego's soccer game starts at 5:45 p.m. and ends at 7:15 p.m.",
    question: "How long was the game?",
    choices: ["1 hour", "1 hour 15 min", "1 hour 30 min", "2 hours"],
    answer: "1 hour 30 min",
  },
  {
    _cat: "time",
    passage: "Amir starts homework at 4:10 p.m. and finishes at 4:55 p.m.",
    question: "How LONG did Amir do homework?",
    choices: ["35 min", "40 min", "45 min", "50 min"],
    answer: "45 min",
  },
  {
    _cat: "time",
    passage: "Recess ends at 11:05 a.m. It lasts 25 minutes.",
    question: "What time did recess START?",
    choices: ["10:30 a.m.", "10:35 a.m.", "10:40 a.m.", "10:50 a.m."],
    answer: "10:40 a.m.",
  },
  {
    _cat: "time",
    question:
      "The minute hand goes from the 12 to the 3. How many minutes have passed?",
    choices: ["5", "10", "15", "30"],
    answer: "15",
  },
  {
    _cat: "time",
    passage: "A bus leaves at 8:12 a.m. and arrives at 8:47 a.m.",
    question: "How long was the bus trip?",
    choices: ["25 min", "35 min", "45 min", "1 hour"],
    answer: "35 min",
  },
  {
    _cat: "time",
    passage: "A math lesson lasts 40 minutes and ends at 1:05 p.m.",
    question: "What time did the lesson start?",
    choices: ["12:15 p.m.", "12:25 p.m.", "12:35 p.m.", "12:45 p.m."],
    answer: "12:25 p.m.",
  },
  {
    _cat: "time",
    question: "Which unit is BEST to measure how long a soccer game lasts?",
    choices: ["Seconds", "Minutes", "Days", "Weeks"],
    answer: "Minutes",
  },
  {
    _cat: "time",
    question: "Which shows 5:24 on an analog clock?",
    choices: [
      "Hour hand past 5, minute hand a bit past the 4",
      "Hour hand on 5, minute hand on 12",
      "Hour hand on 24, minute hand on 5",
      "Hour hand on 5, minute hand on the 5",
    ],
    answer: "Hour hand past 5, minute hand a bit past the 4",
  },
  {
    _cat: "time",
    passage: "Ana's book club meets from 3:30 p.m. to 4:15 p.m.",
    question: "How LONG is the book club meeting?",
    choices: ["30 min", "40 min", "45 min", "1 hour"],
    answer: "45 min",
  },
  {
    _cat: "time",
    question: "About how many seconds are in one minute?",
    choices: ["6", "16", "60", "600"],
    answer: "60",
  },

  // ── money (real-world word problems using +/−/×) ─── 7
  {
    _cat: "money",
    passage: "A comic book costs $4. Rita buys 3 of them.",
    question: "How much does Rita spend on comics?",
    choices: ["$7", "$9", "$12", "$16"],
    answer: "$12",
  },
  {
    _cat: "money",
    passage: "Amir has a $20 bill. He spends $8 on lunch.",
    question: "How much money does he have left?",
    choices: ["$8", "$10", "$12", "$18"],
    answer: "$12",
  },
  {
    _cat: "money",
    passage:
      "Notebook = $3, pencil pack = $2. Ella buys 2 notebooks and 1 pencil pack.",
    question: "How much does Ella spend in all?",
    choices: ["$5", "$7", "$8", "$10"],
    answer: "$8",
  },
  {
    _cat: "money",
    passage: "A snow cone costs $2. Kai buys 5 snow cones for friends.",
    question: "How much does Kai spend?",
    choices: ["$7", "$8", "$10", "$15"],
    answer: "$10",
  },
  {
    _cat: "money",
    passage: "Diego pays with a $10 bill for a book that costs $6.",
    question: "How much CHANGE does Diego get?",
    choices: ["$2", "$3", "$4", "$5"],
    answer: "$4",
  },
  {
    _cat: "money",
    passage:
      "A muffin is $3 and a juice is $2. A café sold 6 muffins and 4 juices.",
    question: "How much money did the café collect from those sales?",
    choices: ["$18", "$20", "$26", "$30"],
    answer: "$26",
  },
  {
    _cat: "money",
    passage:
      "Nia earns $5 a week for chores. How much will she earn in 8 weeks?",
    question: "Total earnings after 8 weeks?",
    choices: ["$13", "$35", "$40", "$45"],
    answer: "$40",
  },

  // ── 3.MD.B data (bar / picture graphs, line plots) ─── 4
  {
    _cat: "data",
    passage:
      "A bar graph shows favorite fruits: Apple = 12, Banana = 8, Mango = 15, Orange = 6.",
    question: "Which fruit got the MOST votes?",
    choices: ["Apple", "Banana", "Mango", "Orange"],
    answer: "Mango",
  },
  {
    _cat: "data",
    passage:
      "A picture graph shows books read this month. Each 📕 = 5 books. Mia has 4 📕.",
    question: "How many books did Mia read?",
    choices: ["4", "9", "20", "45"],
    answer: "20",
  },
  {
    _cat: "data",
    passage: "A bar graph shows: Soccer = 14, Kickball = 9, Tag = 11.",
    question: "How many kids in all voted for the games?",
    choices: ["23", "25", "34", "40"],
    answer: "34",
  },
  {
    _cat: "data",
    passage:
      "A line plot of pencil lengths (in.) shows: three at 5, two at 5½, and one at 6.",
    question: "How many pencils are shown on the line plot?",
    choices: ["3", "5", "6", "12"],
    answer: "6",
  },

  // ── 3.G shape classification ─── 10
  {
    _cat: "g",
    question: "A shape with 4 sides is called a…",
    choices: ["Triangle", "Pentagon", "Quadrilateral", "Hexagon"],
    answer: "Quadrilateral",
  },
  {
    _cat: "g",
    question: "How many sides does a HEXAGON have?",
    choices: ["4", "5", "6", "8"],
    answer: "6",
  },
  {
    _cat: "g",
    question: "How many sides does a PENTAGON have?",
    choices: ["4", "5", "6", "7"],
    answer: "5",
  },
  {
    _cat: "g",
    question: "Which is TRUE about squares?",
    choices: [
      "A square is a special kind of rectangle with all sides equal.",
      "A square has 3 sides.",
      "A square is not a quadrilateral.",
      "A square has no equal sides.",
    ],
    answer: "A square is a special kind of rectangle with all sides equal.",
  },
  {
    _cat: "g",
    question: "Which shape has 3 sides and 3 corners?",
    choices: ["Triangle", "Rectangle", "Rhombus", "Trapezoid"],
    answer: "Triangle",
  },
  {
    _cat: "g",
    question: "A rectangle with all 4 sides the SAME length is called a…",
    choices: ["Trapezoid", "Rhombus", "Square", "Circle"],
    answer: "Square",
  },
  {
    _cat: "g",
    question:
      "Which shape is a QUADRILATERAL with exactly one pair of parallel sides?",
    choices: ["Trapezoid", "Circle", "Triangle", "Pentagon"],
    answer: "Trapezoid",
  },
  {
    _cat: "g",
    question:
      "A pizza is cut into 4 EQUAL pieces. Each piece is what fraction of the whole pizza?",
    choices: ["1/2", "1/3", "1/4", "4/4"],
    answer: "1/4",
  },
  {
    _cat: "g",
    question:
      "A rectangle is split into 6 equal parts. Each part is what fraction of the rectangle?",
    choices: ["1/2", "1/3", "1/6", "6/6"],
    answer: "1/6",
  },
  {
    _cat: "g",
    question: "Which shape has NO straight sides?",
    choices: ["Square", "Circle", "Triangle", "Trapezoid"],
    answer: "Circle",
  },
];

export const mathPractice2 = [
  // ── word problems (mixed one/two-step) ─── 14
  {
    _cat: "word",
    passage: "A bakery bakes 6 trays of cookies with 9 cookies on each tray.",
    question: "How many cookies did the bakery bake?",
    choices: ["15", "48", "54", "63"],
    answer: "54",
  },
  {
    _cat: "word",
    passage: "A library has 480 books. It buys 175 more.",
    question: "How many books does the library have now?",
    choices: ["555", "615", "655", "755"],
    answer: "655",
  },
  {
    _cat: "word",
    passage: "There are 8 lunch tables. Each table seats 6 students.",
    question: "How many students can sit at the tables in all?",
    choices: ["14", "36", "42", "48"],
    answer: "48",
  },
  {
    _cat: "word",
    passage: "A store had 500 balloons. It sold 245 for a birthday party.",
    question: "How many balloons are left?",
    choices: ["245", "255", "265", "355"],
    answer: "255",
  },
  {
    _cat: "word",
    passage: "A farmer has 63 eggs. He packs them into cartons of 6.",
    question: "How many FULL cartons can he pack?",
    choices: ["9", "10", "11", "12"],
    answer: "10",
  },
  {
    _cat: "word",
    passage:
      "A garden club plants 4 rows of 8 tulips. They also plant 12 daisies.",
    question: "How many flowers in all?",
    choices: ["24", "32", "44", "48"],
    answer: "44",
  },
  {
    _cat: "word",
    passage: "A school has 615 students. On field day, 148 stayed home.",
    question: "How many students came to school?",
    choices: ["457", "463", "467", "563"],
    answer: "467",
  },
  {
    _cat: "word",
    passage:
      "A soccer coach buys 4 packs of jerseys. Each pack has 7 jerseys. She gives 3 away as gifts.",
    question: "How many jerseys does she have LEFT?",
    choices: ["25", "28", "31", "35"],
    answer: "25",
  },
  {
    _cat: "word",
    passage:
      "A children's museum sold 189 tickets on Saturday and 214 tickets on Sunday.",
    question: "How many tickets were sold in the two days?",
    choices: ["393", "403", "413", "423"],
    answer: "403",
  },
  {
    _cat: "word",
    passage:
      "A snack box has 8 crackers. A class of 24 students each gets one box.",
    question: "How many crackers in all?",
    choices: ["96", "182", "192", "202"],
    answer: "192",
  },
  {
    _cat: "word",
    passage: "A shopper buys a $12 book, a $3 poster, and a $5 pencil pack.",
    question: "How much does the shopper spend in all?",
    choices: ["$17", "$18", "$20", "$25"],
    answer: "$20",
  },
  {
    _cat: "word",
    passage:
      "A ferry can carry 60 people. Today 8 groups of 7 people are on board.",
    question: "How many empty spots are still on the ferry?",
    choices: ["3", "4", "6", "8"],
    answer: "4",
  },
  {
    _cat: "word",
    passage: "A recycling club collected 245 cans, 168 bottles, and 92 boxes.",
    question: "How many items did they collect in all?",
    choices: ["405", "495", "505", "515"],
    answer: "505",
  },
  {
    _cat: "word",
    passage:
      "A pizza has 8 slices. A family orders 3 pizzas and eats 15 slices.",
    question: "How many slices are LEFT?",
    choices: ["6", "8", "9", "12"],
    answer: "9",
  },

  // ── OA facts + properties ─── 12
  {
    _cat: "oa",
    question: "What is 6 × 8?",
    choices: ["42", "46", "48", "54"],
    answer: "48",
  },
  {
    _cat: "oa",
    question: "What is 7 × 9?",
    choices: ["56", "63", "72", "81"],
    answer: "63",
  },
  {
    _cat: "oa",
    question: "What is 56 ÷ 8?",
    choices: ["6", "7", "8", "9"],
    answer: "7",
  },
  {
    _cat: "oa",
    question: "What is 42 ÷ 6?",
    choices: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    _cat: "oa",
    question: "9 × ___ = 72. What number goes in the blank?",
    choices: ["6", "7", "8", "9"],
    answer: "8",
  },
  {
    _cat: "oa",
    question: "Which fact family MATCHES 8 × 3 = 24?",
    choices: [
      "3 × 8 = 24, 24 ÷ 3 = 8, 24 ÷ 8 = 3",
      "8 + 3 = 11",
      "24 × 3 = 72",
      "8 − 3 = 5",
    ],
    answer: "3 × 8 = 24, 24 ÷ 3 = 8, 24 ÷ 8 = 3",
  },
  {
    _cat: "oa",
    question:
      "Rina uses the DISTRIBUTIVE property: 6 × 9 = (6 × 5) + (6 × 4). What is 6 × 9?",
    choices: ["24", "36", "48", "54"],
    answer: "54",
  },
  {
    _cat: "oa",
    question: "What is 12 × 5?",
    choices: ["25", "50", "55", "60"],
    answer: "60",
  },
  {
    _cat: "oa",
    question: "What is 11 × 4?",
    choices: ["44", "48", "54", "84"],
    answer: "44",
  },
  {
    _cat: "oa",
    question: "What is 32 ÷ 4?",
    choices: ["6", "7", "8", "9"],
    answer: "8",
  },
  {
    _cat: "oa",
    question: "What is 24 ÷ 3?",
    choices: ["6", "7", "8", "9"],
    answer: "8",
  },
  {
    _cat: "oa",
    question: "Which product is EVEN?",
    choices: ["3 × 5", "7 × 3", "4 × 9", "5 × 5"],
    answer: "4 × 9",
  },

  // ── NBT (round, +/−, ×10s, place value) ─── 22
  {
    _cat: "nbt",
    question: "Round 168 to the nearest ten.",
    choices: ["160", "165", "170", "200"],
    answer: "170",
  },
  {
    _cat: "nbt",
    question: "Round 546 to the nearest hundred.",
    choices: ["500", "540", "550", "600"],
    answer: "500",
  },
  {
    _cat: "nbt",
    question: "Round 289 to the nearest hundred.",
    choices: ["200", "250", "290", "300"],
    answer: "300",
  },
  {
    _cat: "nbt",
    question: "Round 725 to the nearest ten.",
    choices: ["700", "720", "730", "800"],
    answer: "730",
  },
  {
    _cat: "nbt",
    question: "What is 349 + 274?",
    choices: ["513", "613", "623", "713"],
    answer: "623",
  },
  {
    _cat: "nbt",
    question: "What is 507 + 293?",
    choices: ["700", "790", "800", "890"],
    answer: "800",
  },
  {
    _cat: "nbt",
    question: "What is 813 − 249?",
    choices: ["464", "564", "574", "664"],
    answer: "564",
  },
  {
    _cat: "nbt",
    question: "What is 1,000 − 486?",
    choices: ["414", "514", "524", "614"],
    answer: "514",
  },
  {
    _cat: "nbt",
    question: "What is 246 + 189?",
    choices: ["325", "425", "435", "445"],
    answer: "435",
  },
  {
    _cat: "nbt",
    question: "What is 6 × 70?",
    choices: ["76", "410", "420", "670"],
    answer: "420",
  },
  {
    _cat: "nbt",
    question: "What is 9 × 30?",
    choices: ["39", "260", "270", "930"],
    answer: "270",
  },
  {
    _cat: "nbt",
    question: "What is 8 × 90?",
    choices: ["98", "720", "740", "890"],
    answer: "720",
  },
  {
    _cat: "nbt",
    question: "What is the value of the 6 in 4,692?",
    choices: ["6", "60", "600", "6,000"],
    answer: "600",
  },
  {
    _cat: "nbt",
    question: "Which number matches the words 'four hundred nine'?",
    choices: ["49", "409", "490", "4,009"],
    answer: "409",
  },
  {
    _cat: "nbt",
    question: "Which is 100 less than 512?",
    choices: ["112", "402", "412", "502"],
    answer: "412",
  },
  {
    _cat: "nbt",
    question: "Which is 10 more than 897?",
    choices: ["887", "907", "997", "1,897"],
    answer: "907",
  },
  {
    _cat: "nbt",
    question: "Estimate 583 − 218 by rounding EACH to the nearest hundred.",
    choices: ["300", "400", "500", "600"],
    answer: "400",
  },
  {
    _cat: "nbt",
    question: "Which sign makes this TRUE? 274 __ 247",
    choices: ["<", ">", "=", "×"],
    answer: ">",
  },
  {
    _cat: "nbt",
    question: "Order from LEAST to GREATEST: 519, 195, 951, 591.",
    choices: [
      "195, 519, 591, 951",
      "195, 591, 519, 951",
      "951, 591, 519, 195",
      "519, 591, 195, 951",
    ],
    answer: "195, 519, 591, 951",
  },
  {
    _cat: "nbt",
    question: "Which number is even?",
    choices: ["347", "521", "638", "899"],
    answer: "638",
  },
  {
    _cat: "nbt",
    question: "Which number rounds to 600 when rounded to the nearest hundred?",
    choices: ["548", "555", "630", "651"],
    answer: "630",
  },
  {
    _cat: "nbt",
    question: "What is 4 × 20?",
    choices: ["24", "80", "82", "84"],
    answer: "80",
  },

  // ── measurement (mass, volume, area, perimeter, 3.NF fractions on line/shape) ─── 8
  {
    _cat: "md",
    question: "Which unit is BEST for measuring the mass of a paperclip?",
    choices: ["Kilogram", "Gram", "Liter", "Meter"],
    answer: "Gram",
  },
  {
    _cat: "md",
    question:
      "Which unit is BEST for measuring how much water is in a bathtub?",
    choices: ["Milliliter", "Gram", "Liter", "Kilometer"],
    answer: "Liter",
  },
  {
    _cat: "md",
    question: "A rectangle is 8 units long and 6 units wide. What is its AREA?",
    choices: ["14 sq units", "28 sq units", "42 sq units", "48 sq units"],
    answer: "48 sq units",
  },
  {
    _cat: "md",
    question:
      "A rectangle has a length of 10 ft and a width of 3 ft. What is its PERIMETER?",
    choices: ["13 ft", "23 ft", "26 ft", "30 ft"],
    answer: "26 ft",
  },
  {
    _cat: "md",
    question:
      "A number line from 0 to 1 is split into 4 equal parts. Which fraction is at the SECOND mark from 0?",
    choices: ["1/4", "1/2", "3/4", "4/4"],
    answer: "1/2",
  },
  {
    _cat: "md",
    question: "Which fraction is EQUAL to 1/2?",
    choices: ["2/3", "2/4", "3/4", "4/5"],
    answer: "2/4",
  },
  {
    _cat: "md",
    question: "Which fraction is GREATER: 3/4 or 1/4?",
    choices: ["1/4", "3/4", "They are equal", "Cannot tell"],
    answer: "3/4",
  },
  {
    _cat: "md",
    question: "A rectangular room is 12 ft by 4 ft. What is its AREA?",
    choices: ["16 sq ft", "32 sq ft", "48 sq ft", "56 sq ft"],
    answer: "48 sq ft",
  },

  // ── time ─── 16
  {
    _cat: "time",
    question: "How many minutes are in TWO hours?",
    choices: ["60", "100", "120", "200"],
    answer: "120",
  },
  {
    _cat: "time",
    question: "How many hours are in ONE day?",
    choices: ["12", "18", "24", "36"],
    answer: "24",
  },
  {
    _cat: "time",
    question: "The clock shows 6:08. Which time is this CLOSEST to?",
    choices: ["6:00", "6:15", "6:30", "7:00"],
    answer: "6:00",
  },
  {
    _cat: "time",
    passage: "A play starts at 7:20 p.m. It lasts 55 minutes.",
    question: "What time does the play end?",
    choices: ["7:55 p.m.", "8:00 p.m.", "8:15 p.m.", "8:25 p.m."],
    answer: "8:15 p.m.",
  },
  {
    _cat: "time",
    passage: "Lunch ends at 12:35 p.m. Lunch was 30 minutes long.",
    question: "What time did lunch start?",
    choices: ["12:00 p.m.", "12:05 p.m.", "12:15 p.m.", "12:25 p.m."],
    answer: "12:05 p.m.",
  },
  {
    _cat: "time",
    passage: "A school day starts at 8:00 a.m. and ends at 3:00 p.m.",
    question: "How many hours long is the school day?",
    choices: ["5 hours", "6 hours", "7 hours", "8 hours"],
    answer: "7 hours",
  },
  {
    _cat: "time",
    passage: "A basketball game starts at 6:45 p.m. and ends at 8:20 p.m.",
    question: "How long was the game?",
    choices: [
      "1 hour 15 min",
      "1 hour 25 min",
      "1 hour 35 min",
      "1 hour 45 min",
    ],
    answer: "1 hour 35 min",
  },
  {
    _cat: "time",
    passage: "A soccer practice lasts 40 minutes. It ends at 5:10 p.m.",
    question: "What time did practice START?",
    choices: ["4:20 p.m.", "4:30 p.m.", "4:40 p.m.", "4:50 p.m."],
    answer: "4:30 p.m.",
  },
  {
    _cat: "time",
    question:
      "The minute hand moves from the 12 to the 6. How many minutes have passed?",
    choices: ["15", "20", "30", "45"],
    answer: "30",
  },
  {
    _cat: "time",
    question: "Which unit is BEST for measuring how long a movie lasts?",
    choices: ["Seconds", "Minutes", "Days", "Weeks"],
    answer: "Minutes",
  },
  {
    _cat: "time",
    question: "How many minutes are in a QUARTER hour?",
    choices: ["10", "15", "20", "30"],
    answer: "15",
  },
  {
    _cat: "time",
    passage:
      "Ana takes 25 min to eat breakfast and 15 min to brush and pack up.",
    question: "How much time does she spend on the two things in all?",
    choices: ["30 min", "35 min", "40 min", "45 min"],
    answer: "40 min",
  },
  {
    _cat: "time",
    passage: "A bake sale runs from 9:15 a.m. until 11:30 a.m.",
    question: "How long is the bake sale?",
    choices: ["1 hour 15 min", "2 hours", "2 hours 15 min", "2 hours 45 min"],
    answer: "2 hours 15 min",
  },
  {
    _cat: "time",
    passage:
      "A field trip bus leaves at 8:50 a.m. and arrives at the museum at 9:35 a.m.",
    question: "How long is the bus ride?",
    choices: ["35 min", "40 min", "45 min", "50 min"],
    answer: "45 min",
  },
  {
    _cat: "time",
    question: "Which is longer: 90 minutes or 1 hour?",
    choices: ["1 hour", "90 minutes", "They are equal", "Cannot tell"],
    answer: "90 minutes",
  },
  {
    _cat: "time",
    question: "Which shows 7:15 correctly?",
    choices: [
      "Hour hand near 7, minute hand on the 3",
      "Hour hand on 15, minute hand on 7",
      "Hour hand on 7, minute hand on the 15",
      "Hour hand on 12, minute hand on 7",
    ],
    answer: "Hour hand near 7, minute hand on the 3",
  },

  // ── money ─── 8
  {
    _cat: "money",
    passage: "A pack of trading cards costs $6. Rita buys 4 packs.",
    question: "How much does Rita spend?",
    choices: ["$10", "$20", "$24", "$28"],
    answer: "$24",
  },
  {
    _cat: "money",
    passage: "A movie ticket costs $8. A family of 5 goes to the movie.",
    question: "How much do the tickets cost in all?",
    choices: ["$13", "$35", "$40", "$45"],
    answer: "$40",
  },
  {
    _cat: "money",
    passage: "Ana has $15. She buys a book for $9.",
    question: "How much change does Ana have?",
    choices: ["$4", "$5", "$6", "$7"],
    answer: "$6",
  },
  {
    _cat: "money",
    passage: "A snack pack has 3 pretzels for $2. Kai wants 12 pretzels.",
    question: "How much money does Kai need?",
    choices: ["$4", "$6", "$8", "$12"],
    answer: "$8",
  },
  {
    _cat: "money",
    passage:
      "A muffin is $3 and a smoothie is $4. A café sold 5 muffins and 6 smoothies.",
    question: "How much money did the café make?",
    choices: ["$30", "$35", "$39", "$45"],
    answer: "$39",
  },
  {
    _cat: "money",
    passage: "A grocery bill is $28. Priya pays with two $20 bills.",
    question: "How much change does Priya get?",
    choices: ["$8", "$10", "$12", "$18"],
    answer: "$12",
  },
  {
    _cat: "money",
    passage: "A pencil costs 25¢. Diego buys 4 pencils.",
    question: "How much does Diego spend?",
    choices: ["25¢", "$1", "$1.00", "$1.25"],
    answer: "$1",
  },
  {
    _cat: "money",
    passage:
      "Nia earns $6 a week doing chores. How much will she earn in 5 weeks?",
    question: "Total earnings after 5 weeks?",
    choices: ["$11", "$25", "$30", "$36"],
    answer: "$30",
  },

  // ── data (bar / picture graphs, line plots) ─── 5
  {
    _cat: "data",
    passage: "A bar graph shows: Reading = 10, Math = 8, Art = 14, Music = 12.",
    question: "Which subject got the FEWEST votes?",
    choices: ["Reading", "Math", "Art", "Music"],
    answer: "Math",
  },
  {
    _cat: "data",
    passage:
      "A picture graph shows books read. Each 📚 = 4 books. Diego has 5 📚.",
    question: "How many books did Diego read?",
    choices: ["4", "9", "20", "24"],
    answer: "20",
  },
  {
    _cat: "data",
    passage:
      "A bar graph shows candy bars sold: Chocolate 24, Caramel 18, Mint 12, Peanut 9.",
    question: "How many MORE Chocolate than Peanut were sold?",
    choices: ["9", "12", "15", "18"],
    answer: "15",
  },
  {
    _cat: "data",
    passage:
      "A line plot of pencil lengths (in.) shows: two at 4, three at 4½, one at 5, and two at 5½.",
    question: "How many pencils were measured in all?",
    choices: ["4", "6", "8", "10"],
    answer: "8",
  },
  {
    _cat: "data",
    passage:
      "A picture graph shows fruit sold. Each 🍎 = 3 apples. On Monday, 6 🍎; Tuesday, 4 🍎.",
    question: "How many apples were sold on Monday and Tuesday together?",
    choices: ["10", "18", "24", "30"],
    answer: "30",
  },

  // ── geometry / fractions of shapes ─── 11
  {
    _cat: "g",
    question:
      "A circle cut into 8 equal slices. Each slice is what fraction of the circle?",
    choices: ["1/2", "1/4", "1/6", "1/8"],
    answer: "1/8",
  },
  {
    _cat: "g",
    question: "How many CORNERS (vertices) does a rectangle have?",
    choices: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    _cat: "g",
    question: "How many SIDES does an OCTAGON have?",
    choices: ["5", "6", "7", "8"],
    answer: "8",
  },
  {
    _cat: "g",
    question: "Which shape is NOT a quadrilateral?",
    choices: ["Square", "Rectangle", "Trapezoid", "Triangle"],
    answer: "Triangle",
  },
  {
    _cat: "g",
    question: "Which of these is TRUE?",
    choices: [
      "Every square is a rectangle.",
      "Every triangle has 4 sides.",
      "A circle has 3 sides.",
      "A pentagon has 6 sides.",
    ],
    answer: "Every square is a rectangle.",
  },
  {
    _cat: "g",
    question:
      "A shape has 4 sides that are all the same length. It could be a…",
    choices: ["Rectangle only", "Square or rhombus", "Triangle", "Trapezoid"],
    answer: "Square or rhombus",
  },
  {
    _cat: "g",
    question:
      "A rectangle is split into 3 equal columns. What fraction is EACH column?",
    choices: ["1/2", "1/3", "1/4", "3/3"],
    answer: "1/3",
  },
  {
    _cat: "g",
    question:
      "A pizza is cut into 6 equal slices. Ana eats 2 slices. What fraction did she eat?",
    choices: ["1/6", "2/6", "1/3 only", "6/2"],
    answer: "2/6",
  },
  {
    _cat: "g",
    question: "Which fraction is EQUAL to 1?",
    choices: ["1/2", "2/2", "1/4", "3/4"],
    answer: "2/2",
  },
  {
    _cat: "g",
    question: "Which shape has 5 sides?",
    choices: ["Hexagon", "Pentagon", "Quadrilateral", "Triangle"],
    answer: "Pentagon",
  },
  {
    _cat: "g",
    question:
      "A window is split into 4 equal panes. Three panes are painted. What fraction is painted?",
    choices: ["1/4", "2/4", "3/4", "4/4"],
    answer: "3/4",
  },
];
