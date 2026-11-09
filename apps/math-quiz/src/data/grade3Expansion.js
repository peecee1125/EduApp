function choicesFor(answer) {
  const choices = new Set([answer]);
  for (const offset of [1, -1, 2, -2, 3, -3, 4, -4]) {
    const candidate = answer + offset;
    if (candidate >= 0) choices.add(candidate);
    if (choices.size === 4) break;
  }
  return [...choices].map(String);
}

export const factFluencyQuestions = [
  ...Array.from({ length: 11 }, (_, a) =>
    Array.from({ length: 11 }, (_, b) => ({
      _cat: `multiply-${Math.max(a, b)}`,
      question: `What is ${a} × ${b}?`,
      choices: choicesFor(a * b),
      answer: String(a * b),
      explanation: `${a} groups of ${b} make ${a * b}.`,
    })),
  ).flat(),
  ...Array.from({ length: 10 }, (_, divisorIndex) => {
    const divisor = divisorIndex + 1;
    return Array.from({ length: 11 }, (_, quotient) => {
      const dividend = divisor * quotient;
      return {
        _cat: `divide-${divisor}`,
        question: `What is ${dividend} ÷ ${divisor}?`,
        choices: choicesFor(quotient),
        answer: String(quotient),
        explanation: `${divisor} × ${quotient} = ${dividend}, so ${dividend} ÷ ${divisor} = ${quotient}.`,
      };
    });
  }).flat(),
];

export const divisionPractice = [
  {
    _cat: "equal_groups",
    passage: "There are 32 crayons to share equally among 4 art tables.",
    question: "How many crayons go on each table?",
    choices: ["6", "7", "8", "9"],
    answer: "8",
    explanation: "Split 32 into 4 equal groups: 4 × 8 = 32, so each table gets 8.",
  },
  {
    _cat: "equal_groups",
    passage: "A coach shares 45 cones equally among 5 teams.",
    question: "How many cones does each team get?",
    choices: ["8", "9", "10", "15"],
    answer: "9",
    explanation: "Because 5 × 9 = 45, 45 ÷ 5 = 9.",
  },
  {
    _cat: "equal_groups",
    question: "Twenty-four stickers are split into 6 equal piles. How many in each pile?",
    choices: ["3", "4", "6", "18"],
    answer: "4",
    explanation: "Count 6 equal groups of 4: 6 × 4 = 24.",
  },
  {
    _cat: "equal_groups",
    passage: "A librarian puts 56 books equally on 7 shelves.",
    question: "How many books go on each shelf?",
    choices: ["7", "8", "9", "49"],
    answer: "8",
    explanation: "Seven groups of 8 make 56, so 56 ÷ 7 = 8.",
  },
  {
    _cat: "unknown_factor",
    question: "Which number makes 6 × □ = 42 true?",
    choices: ["6", "7", "8", "36"],
    answer: "7",
    explanation: "Think of the related division fact: 42 ÷ 6 = 7.",
  },
  {
    _cat: "unknown_factor",
    question: "Which number makes □ × 8 = 64 true?",
    choices: ["6", "7", "8", "9"],
    answer: "8",
    explanation: "Eight groups of 8 make 64, so the missing factor is 8.",
  },
  {
    _cat: "unknown_factor",
    question: "Which number makes 9 × □ = 27 true?",
    choices: ["2", "3", "4", "18"],
    answer: "3",
    explanation: "Since 27 ÷ 9 = 3, the missing factor is 3.",
  },
  {
    _cat: "fact_families",
    question: "If 7 × 4 = 28, which division fact is also true?",
    choices: ["28 ÷ 7 = 4", "28 ÷ 4 = 8", "7 ÷ 4 = 28", "28 ÷ 7 = 7"],
    answer: "28 ÷ 7 = 4",
    explanation: "Multiplication and division are related: 7 × 4 = 28, so 28 ÷ 7 = 4.",
  },
  {
    _cat: "fact_families",
    question: "Which fact belongs with 6 × 5 = 30?",
    choices: ["30 ÷ 6 = 5", "30 ÷ 6 = 6", "5 ÷ 6 = 30", "30 × 6 = 5"],
    answer: "30 ÷ 6 = 5",
    explanation: "The product 30 can be divided by either factor: 30 ÷ 6 = 5.",
  },
  {
    _cat: "word_problems",
    passage: "A teacher has 36 pencils and gives 4 pencils to each student.",
    question: "How many students can get pencils?",
    choices: ["8", "9", "10", "32"],
    answer: "9",
    explanation: "Find how many groups of 4 fit in 36: 36 ÷ 4 = 9.",
  },
  {
    _cat: "word_problems",
    passage: "A baker packs 48 muffins into boxes that hold 6 muffins each.",
    question: "How many boxes does the baker fill?",
    choices: ["6", "7", "8", "9"],
    answer: "8",
    explanation: "Eight boxes of 6 hold 48 muffins because 8 × 6 = 48.",
  },
  {
    _cat: "word_problems",
    passage: "There are 27 students going on a trip. Each car holds 3 students.",
    question: "How many cars are needed?",
    choices: ["8", "9", "10", "24"],
    answer: "9",
    explanation: "Share 27 students into groups of 3: 27 ÷ 3 = 9 cars.",
  },
];

export const fractionsPractice = [
  {
    _cat: "unit_fractions",
    question: "A whole is split into 5 equal parts. What fraction is one part?",
    choices: ["1/4", "1/5", "5/1", "5/5"],
    answer: "1/5",
    explanation: "One of 5 equal parts is written 1/5.",
  },
  {
    _cat: "unit_fractions",
    question: "Which fraction names one equal part when a whole is split into 8 parts?",
    choices: ["1/4", "1/7", "1/8", "8/1"],
    answer: "1/8",
    explanation: "The denominator tells how many equal parts make the whole.",
  },
  {
    _cat: "unit_fractions",
    question: "Which fraction is a unit fraction?",
    choices: ["2/3", "3/4", "1/6", "5/8"],
    answer: "1/6",
    explanation: "A unit fraction has 1 as its numerator.",
  },
  {
    _cat: "number_line",
    question: "A number line from 0 to 1 is split into 4 equal jumps. Where is 3/4?",
    choices: ["At the first mark", "At the middle mark", "At the third mark", "At 1"],
    answer: "At the third mark",
    explanation: "Each jump is 1/4; three jumps from 0 land on 3/4.",
  },
  {
    _cat: "number_line",
    question: "Which fraction is halfway between 0 and 1?",
    choices: ["1/3", "1/2", "2/3", "1/4"],
    answer: "1/2",
    explanation: "Halfway divides the distance from 0 to 1 into 2 equal parts.",
  },
  {
    _cat: "number_line",
    question: "A number line is split into 6 equal spaces. What fraction is at the fourth mark after 0?",
    choices: ["2/6", "3/6", "4/6", "6/4"],
    answer: "4/6",
    explanation: "Each space is 1/6, so four spaces from 0 is 4/6.",
  },
  {
    _cat: "equivalent",
    question: "Which fraction is equivalent to 1/2?",
    choices: ["2/3", "2/4", "3/5", "1/4"],
    answer: "2/4",
    explanation: "Two of 4 equal parts cover the same amount as one of 2 equal parts.",
  },
  {
    _cat: "equivalent",
    question: "Which fraction is equivalent to 2/3?",
    choices: ["2/6", "3/6", "4/6", "5/6"],
    answer: "4/6",
    explanation: "Doubling the numerator and denominator keeps the same-sized share: 2/3 = 4/6.",
  },
  {
    _cat: "equivalent",
    question: "Which fraction names the same amount as 3/4?",
    choices: ["3/8", "6/8", "4/6", "7/8"],
    answer: "6/8",
    explanation: "Three fourths and six eighths cover the same length or area.",
  },
  {
    _cat: "compare",
    question: "Which fraction is greater: 1/3 or 1/6?",
    choices: ["1/3", "1/6", "They are equal", "Cannot compare"],
    answer: "1/3",
    explanation: "When one whole is split into fewer equal parts, each part is larger.",
  },
  {
    _cat: "compare",
    question: "Which fraction is greater: 3/8 or 5/8?",
    choices: ["3/8", "5/8", "They are equal", "Cannot compare"],
    answer: "5/8",
    explanation: "The denominators match, so compare numerators: 5 eighths is more than 3 eighths.",
  },
  {
    _cat: "compare",
    question: "Which fraction is less than 1/2?",
    choices: ["3/4", "2/3", "2/5", "5/8"],
    answer: "2/5",
    explanation: "Two fifths is less than one half; 2/5 is less than 2.5/5.",
  },
];

export const measurementPractice = [
  {
    _cat: "area",
    question: "A rectangle is 7 units long and 3 units wide. What is its area?",
    choices: ["10 square units", "20 square units", "21 square units", "28 square units"],
    answer: "21 square units",
    explanation: "Area counts square units inside the shape: 7 × 3 = 21.",
  },
  {
    _cat: "area",
    question: "A rectangle has 4 rows of 6 tiles. How many tiles cover it?",
    choices: ["10", "20", "24", "28"],
    answer: "24",
    explanation: "The rows form an array, so area is 4 × 6 = 24 square tiles.",
  },
  {
    _cat: "area",
    question: "A square has side lengths of 5 centimeters. What is its area?",
    choices: ["10 sq cm", "20 sq cm", "25 sq cm", "30 sq cm"],
    answer: "25 sq cm",
    explanation: "Multiply the side by itself: 5 × 5 = 25 square centimeters.",
  },
  {
    _cat: "perimeter",
    question: "A rectangle is 8 meters long and 3 meters wide. What is its perimeter?",
    choices: ["11 m", "19 m", "22 m", "24 m"],
    answer: "22 m",
    explanation: "Add all four sides: 8 + 3 + 8 + 3 = 22 meters.",
  },
  {
    _cat: "perimeter",
    question: "A square garden has sides that are each 6 feet long. What is its perimeter?",
    choices: ["12 ft", "18 ft", "24 ft", "36 ft"],
    answer: "24 ft",
    explanation: "A square has 4 equal sides: 4 × 6 = 24 feet around.",
  },
  {
    _cat: "perimeter",
    question: "A triangle has side lengths 5 cm, 7 cm, and 8 cm. What is its perimeter?",
    choices: ["15 cm", "20 cm", "35 cm", "56 cm"],
    answer: "20 cm",
    explanation: "Perimeter is the distance around: 5 + 7 + 8 = 20 cm.",
  },
  {
    _cat: "elapsed_time",
    passage: "A soccer practice starts at 3:25 p.m. and ends at 4:10 p.m.",
    question: "How long is the practice?",
    choices: ["35 minutes", "40 minutes", "45 minutes", "55 minutes"],
    answer: "45 minutes",
    explanation: "From 3:25 to 4:00 is 35 minutes, then 10 more minutes makes 45.",
  },
  {
    _cat: "elapsed_time",
    passage: "A library program begins at 10:40 a.m. and lasts 35 minutes.",
    question: "When does it end?",
    choices: ["11:05 a.m.", "11:15 a.m.", "11:25 a.m.", "12:15 p.m."],
    answer: "11:15 a.m.",
    explanation: "20 minutes takes the time to 11:00; 15 more minutes is 11:15.",
  },
  {
    _cat: "elapsed_time",
    passage: "A movie starts at 1:15 p.m. and ends at 2:05 p.m.",
    question: "How long is the movie?",
    choices: ["40 minutes", "45 minutes", "50 minutes", "55 minutes"],
    answer: "50 minutes",
    explanation: "From 1:15 to 2:00 is 45 minutes, plus 5 minutes is 50.",
  },
  {
    _cat: "measurement",
    question: "Which unit is best for measuring the mass of a watermelon?",
    choices: ["Milligrams", "Grams", "Kilograms", "Liters"],
    answer: "Kilograms",
    explanation: "A watermelon is fairly heavy, so kilograms are a useful mass unit.",
  },
  {
    _cat: "measurement",
    question: "A bottle holds 1 liter of water. How many milliliters is that?",
    choices: ["10 mL", "100 mL", "1,000 mL", "10,000 mL"],
    answer: "1,000 mL",
    explanation: "1 liter is equal to 1,000 milliliters.",
  },
  {
    _cat: "measurement",
    question: "Which tool is best for measuring the length of a pencil?",
    choices: ["A ruler", "A thermometer", "A balance", "A measuring cup"],
    answer: "A ruler",
    explanation: "A ruler measures length; the other tools measure temperature, mass, or volume.",
  },
];

export const elaGrade3Depth = [
  {
    _cat: "text_evidence",
    passage:
      "On Saturday, Lena found a tiny bird near the garden fence. She put a box nearby but did not touch it. She called the wildlife center, which told her to watch from a distance. An adult volunteer later found the nest in a low tree and returned the bird safely.",
    question: "Which detail best shows that Lena followed the expert's advice?",
    choices: [
      "She found the bird on Saturday.",
      "She watched from a distance.",
      "The nest was in a low tree.",
      "The garden had a fence.",
    ],
    answer: "She watched from a distance.",
    explanation: "The passage says the wildlife center told Lena to watch from a distance, and she did.",
  },
  {
    _cat: "text_evidence",
    passage:
      "On Saturday, Lena found a tiny bird near the garden fence. She put a box nearby but did not touch it. She called the wildlife center, which told her to watch from a distance. An adult volunteer later found the nest in a low tree and returned the bird safely.",
    question: "Why did Lena call the wildlife center?",
    choices: [
      "She wanted help deciding how to keep the bird safe.",
      "She wanted to build a new fence.",
      "She wanted to take the bird to school.",
      "She wanted to find a different garden.",
    ],
    answer: "She wanted help deciding how to keep the bird safe.",
    explanation: "The next steps came from the wildlife center, showing Lena called for safe advice.",
  },
  {
    _cat: "text_structure",
    passage:
      "First, Mina filled a pot with soil. Next, she planted three bean seeds and watered them. A week later, tiny green shoots appeared. She kept the pot near a sunny window.",
    question: "How is this passage mostly organized?",
    choices: ["In time order", "By comparing two plants", "As a list of questions", "From most important to least important"],
    answer: "In time order",
    explanation: "Words like first, next, and a week later show the events in sequence.",
  },
  {
    _cat: "text_structure",
    passage:
      "A sea turtle uses flippers to swim through the ocean. A tortoise has sturdy legs for walking on land. Both animals lay eggs, but they live in very different places.",
    question: "How does the passage organize information?",
    choices: ["It compares two animals.", "It explains steps in a recipe.", "It tells events in time order.", "It lists reasons to recycle."],
    answer: "It compares two animals.",
    explanation: "The passage describes similarities and differences between a sea turtle and a tortoise.",
  },
  {
    _cat: "vocabulary",
    passage: "The trail was slippery, so Noor stepped cautiously over the wet rocks.",
    question: "What does cautiously mean in this sentence?",
    choices: ["Carefully", "Loudly", "Quickly", "Carelessly"],
    answer: "Carefully",
    explanation: "The wet, slippery rocks are a clue that Noor needed to move carefully.",
  },
  {
    _cat: "prefixes",
    question: "What does the prefix re- mean in the word rebuild?",
    choices: ["Again", "Not", "Before", "Small"],
    answer: "Again",
    explanation: "Rebuild means to build again; re- often means again.",
  },
  {
    _cat: "prefixes",
    question: "What does unhappy mean?",
    choices: ["Not happy", "Very happy", "Happy again", "A little happy"],
    answer: "Not happy",
    explanation: "The prefix un- means not, so unhappy means not happy.",
  },
  {
    _cat: "suffixes",
    question: "What does the suffix -less mean in fearless?",
    choices: ["Without", "Full of", "One who", "Before"],
    answer: "Without",
    explanation: "Fearless means without fear; -less means without.",
  },
  {
    _cat: "homophones",
    question: "Choose the correct word: We can ___ the birds singing.",
    choices: ["hear", "here", "hair", "hare"],
    answer: "hear",
    explanation: "Hear means to listen with your ears; here means in this place.",
  },
  {
    _cat: "homophones",
    question: "Choose the correct word: The dog wagged ___ tail.",
    choices: ["its", "it's", "it is", "its'"],
    answer: "its",
    explanation: "Its shows that the tail belongs to the dog. It's means it is.",
  },
  {
    _cat: "reference_tools",
    question: "Which guide word pair would help you find the word meadow on a dictionary page?",
    choices: ["map–march", "meal–measles", "meadow–meat", "melt–memory"],
    answer: "meadow–meat",
    explanation: "Meadow comes alphabetically after meadow's first letters and before meat.",
  },
  {
    _cat: "reference_tools",
    question: "What can a glossary at the end of a book help you find?",
    choices: ["Meanings of important words", "The author's home address", "Every character's picture", "The book's next chapter"],
    answer: "Meanings of important words",
    explanation: "A glossary lists important words from the book and explains their meanings.",
  },
];

export const scienceGrade3Strands = [
  {
    _cat: "forces_magnets",
    passage: "A child brings a magnet close to a steel paper clip, and the clip moves toward it.",
    question: "What caused the paper clip to move?",
    choices: ["A magnetic force", "A sound wave", "A change in weather", "A life cycle"],
    answer: "A magnetic force",
    explanation: "Magnets can exert a force that attracts some metals, including steel.",
  },
  {
    _cat: "forces_magnets",
    question: "Which object is most likely to be attracted to a magnet?",
    choices: ["A steel nail", "A wooden block", "A plastic spoon", "A paper leaf"],
    answer: "A steel nail",
    explanation: "Steel contains iron, a metal that magnets can attract.",
  },
  {
    _cat: "weather_climate",
    question: "A report says it will rain tomorrow. Is this weather or climate?",
    choices: ["Weather", "Climate", "A life cycle", "A landform"],
    answer: "Weather",
    explanation: "Weather describes conditions over a short time, such as tomorrow.",
  },
  {
    _cat: "weather_climate",
    question: "A place is usually hot and rainy for many years. This describes its…",
    choices: ["Climate", "Today's weather", "A force", "A trait"],
    answer: "Climate",
    explanation: "Climate is the usual pattern of weather in a place over many years.",
  },
  {
    _cat: "life_cycles",
    question: "Which sequence shows a butterfly's life cycle?",
    choices: [
      "Egg, caterpillar, chrysalis, butterfly",
      "Butterfly, egg, bird, chrysalis",
      "Seed, sprout, flower, butterfly",
      "Chrysalis, egg, flower, caterpillar",
    ],
    answer: "Egg, caterpillar, chrysalis, butterfly",
    explanation: "Butterflies hatch from eggs, grow as caterpillars, form a chrysalis, then become adults.",
  },
  {
    _cat: "life_cycles",
    question: "What happens to a seed when it begins to grow?",
    choices: ["It germinates.", "It evaporates.", "It freezes.", "It becomes a rock."],
    answer: "It germinates.",
    explanation: "Germination is when a seed starts to grow into a new plant.",
  },
  {
    _cat: "inherited_traits",
    question: "A puppy has fur color similar to its parents. This is an example of…",
    choices: ["An inherited trait", "Today's weather", "A magnetic force", "A learned rule"],
    answer: "An inherited trait",
    explanation: "Inherited traits are features passed from parents to offspring.",
  },
  {
    _cat: "inherited_traits",
    question: "Which trait is a young plant most likely to inherit from its parent plant?",
    choices: ["Flower color", "The date it was watered", "Its place in the garden", "The gardener's name"],
    answer: "Flower color",
    explanation: "Traits such as flower color can be passed from a parent plant to its offspring.",
  },
  {
    _cat: "weather_data",
    passage: "A class measures the temperature at noon each day for a week.",
    question: "What could the students use to show how the temperature changed?",
    choices: ["A graph", "A food chain", "A map of the moon", "A magnet"],
    answer: "A graph",
    explanation: "A graph helps organize measurements and show changes over time.",
  },
  {
    _cat: "forces_magnets",
    question: "What happens when the same ends of two magnets are pushed together?",
    choices: ["They push apart.", "They always stick together.", "They melt.", "They stop being magnets."],
    answer: "They push apart.",
    explanation: "Like poles repel, which means they push away from one another.",
  },
];
