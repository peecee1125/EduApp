// ELA — TN Academic Standards for English Language Arts, Grade 3
// elaPractice1: Reading Literature (RL.3) & Reading Informational Text (RI.3)
//   Categories: rl_detail | rl_main | rl_structure | rl_vocab | rl_pov |
//               ri_detail | ri_vocab | ri_text | ri_purpose
// elaPractice2: Language conventions & vocabulary (L.3)
//   Categories: l_grammar | l_mechanics | l_vocab
// elaPractice3: Writing tasks & study skills (W.3)
//   Categories: w_opinion | w_inform | w_narrative | w_research

// ─── Shared literature passages (reused for multiple items) ───────────────────
const LIT_LOST_KITE = `Mia raced across the field, gripping the string of her new red kite. The wind snapped it up into the sky like a tiny sail. But when she tried to slow down, her sneaker caught on a root, and the string flew from her hand. She watched, breathless, as the kite drifted higher and higher, until it caught on the highest branch of the oak by the pond. "Well," Mia sighed, "I guess I'm climbing today."`;

const LIT_GRANDPA_GARDEN = `Every Saturday, Diego walked with Grandpa Luis to the community garden behind the library. Grandpa's hands, dusted with soil, moved slowly. "Plants like patience," he said, patting a tomato seedling into place. Diego liked to rush, but Grandpa would only smile. When the first bright tomato ripened weeks later, Diego felt taller than ever. Patience, he decided, was harder — and sweeter — than he had thought.`;

const LIT_NEW_STUDENT = `Amir stood at the classroom door, his backpack still on. Everyone stared. Mrs. Patel smiled and waved him in. Then a girl with two braids stood up and said, "Hi! I'm Kai. Sit by me." At recess, Kai showed him where to find the four-square lines. By the end of the day, Amir was already laughing at Kai's terrible knock-knock jokes. Maybe this new school wouldn't be so scary after all.`;

const LIT_BROKEN_VASE = `Nia and her little brother Sam were playing tag inside — even though Mom had said "Only in the yard!" Sam ducked, Nia turned, and CRASH — the blue vase from the shelf hit the floor. Nia's eyes stung. She knew that vase was Grandma's. Sam started to cry. Nia took a deep breath. "Mom," she called, "I have to tell you something."`;

const LIT_STAR_POEM = `Little star above the roof,
Winking at me, waterproof,
Neither cloud nor rain nor haze
Can hide your tiny, gentle blaze.`;

// ─── Shared informational passages ────────────────────────────────────────────
const INFO_HONEYBEES = `Honeybees are more than sweet-makers. When a bee lands on a flower to collect nectar, yellow pollen sticks to its fuzzy body. As it flies from flower to flower, some pollen falls off, helping fruit and seeds to grow. Many crops that Tennessee farmers grow — apples, blueberries, watermelons — depend on bees. Without bees, our grocery stores would look very different.`;

const INFO_TN_RIVERS = `Tennessee has more than 60,000 miles of rivers and streams. The Mississippi River rolls along the western edge, carrying barges to the Gulf of Mexico. The Cumberland River winds through Nashville, and the Tennessee River loops through Chattanooga. These waterways moved early settlers, power huge dams, and cool giant power plants today.`;

const INFO_BATS = `Bats are the only mammals that can truly fly. Instead of feathers, their wings are made of stretched skin between long finger bones. Most bats hunt at night. They send out squeaks that bounce off insects and echo back — a superpower called echolocation. One little brown bat can eat a thousand mosquitoes in a single hour. That makes bats one of a gardener's best friends.`;

const INFO_RECYCLE = `Every day, kids toss out paper, plastic bottles, and cans. When these go in the trash, they end up in landfills. When they go in the recycling bin, they get a second life. An aluminum can might come back as a new can in as little as 60 days. Recycling saves trees, saves energy, and keeps our streams cleaner.`;

const INFO_MEASURING = `Scientists need tools to be exact. A ruler measures length. A balance measures mass — how much matter is in an object. A thermometer measures how hot or cold something is. Choosing the right tool is the first step to gathering data you can trust.`;

// ─── elaPractice1: Fiction & informational reading (RL.3 & RI.3) ──────────────
export const elaPractice1 = [
  // rl_detail — 11
  {
    _cat: "rl_detail",
    passage: LIT_LOST_KITE,
    question: "Where did Mia's kite end up?",
    choices: [
      "In the pond",
      "On the roof of the school",
      "In the highest branch of an oak tree",
      "Under a rock",
    ],
    answer: "In the highest branch of an oak tree",
  },
  {
    _cat: "rl_detail",
    passage: LIT_LOST_KITE,
    question: "What color was Mia's new kite?",
    choices: ["Blue", "Red", "Green", "Yellow"],
    answer: "Red",
  },
  {
    _cat: "rl_detail",
    passage: LIT_GRANDPA_GARDEN,
    question: "Where do Diego and Grandpa Luis go every Saturday?",
    choices: [
      "The city park",
      "The community garden behind the library",
      "The zoo",
      "The school playground",
    ],
    answer: "The community garden behind the library",
  },
  {
    _cat: "rl_detail",
    passage: LIT_GRANDPA_GARDEN,
    question: "What did Grandpa Luis say about plants?",
    choices: [
      "Plants like sunshine only",
      "Plants like patience",
      "Plants need a lot of noise",
      "Plants grow overnight",
    ],
    answer: "Plants like patience",
  },
  {
    _cat: "rl_detail",
    passage: LIT_NEW_STUDENT,
    question: "Who was the first classmate to speak to Amir?",
    choices: ["Kai", "Mrs. Patel", "Diego", "Grandpa Luis"],
    answer: "Kai",
  },
  {
    _cat: "rl_detail",
    passage: LIT_NEW_STUDENT,
    question: "What did Kai show Amir at recess?",
    choices: [
      "How to open his locker",
      "Where the four-square lines were",
      "The library",
      "The lunch line",
    ],
    answer: "Where the four-square lines were",
  },
  {
    _cat: "rl_detail",
    passage: LIT_BROKEN_VASE,
    question: "Whose vase did the children break?",
    choices: ["Mom's", "Grandma's", "Dad's", "The neighbor's"],
    answer: "Grandma's",
  },
  {
    _cat: "rl_detail",
    passage: LIT_BROKEN_VASE,
    question: "What rule had Mom given Nia and Sam?",
    choices: [
      "No snacks before dinner",
      "Play tag only in the yard",
      "Don't touch Grandma's things",
      "Bedtime by 8 p.m.",
    ],
    answer: "Play tag only in the yard",
  },
  {
    _cat: "rl_detail",
    passage: LIT_STAR_POEM,
    question: "In the poem, what is the star described as being?",
    choices: [
      "A tiny gentle blaze that clouds can't hide",
      "A ball of yarn",
      "A rocket ship",
      "A snowflake",
    ],
    answer: "A tiny gentle blaze that clouds can't hide",
  },
  {
    _cat: "rl_detail",
    passage: LIT_STAR_POEM,
    question: "Where is the star, according to the poem?",
    choices: ["Under the sea", "Above the roof", "Inside a jar", "On the moon"],
    answer: "Above the roof",
  },
  {
    _cat: "rl_detail",
    passage: LIT_GRANDPA_GARDEN,
    question: "How did Diego feel when the first tomato ripened weeks later?",
    choices: ["Bored", "Taller than ever", "Angry", "Sleepy"],
    answer: "Taller than ever",
  },

  // rl_main — 5
  {
    _cat: "rl_main",
    passage: LIT_GRANDPA_GARDEN,
    question: "What is the main LESSON (theme) of this story?",
    choices: [
      "It is fun to grow tomatoes.",
      "Being patient can bring sweet rewards.",
      "Grandpas know everything.",
      "Libraries are quiet.",
    ],
    answer: "Being patient can bring sweet rewards.",
  },
  {
    _cat: "rl_main",
    passage: LIT_NEW_STUDENT,
    question: "What theme BEST fits the story about Amir?",
    choices: [
      "New places always stay scary.",
      "One kind classmate can change a whole day.",
      "Recess is more important than class.",
      "Backpacks should stay on all day.",
    ],
    answer: "One kind classmate can change a whole day.",
  },
  {
    _cat: "rl_main",
    passage: LIT_BROKEN_VASE,
    question: "What is the LESSON of Nia's story?",
    choices: [
      "Break things when adults aren't home.",
      "Being honest is hard but the right thing to do.",
      "Little brothers ruin everything.",
      "Vases are dangerous.",
    ],
    answer: "Being honest is hard but the right thing to do.",
  },
  {
    _cat: "rl_main",
    passage: LIT_LOST_KITE,
    question: "Which sentence BEST states the story's message?",
    choices: [
      "Kites can fly very high.",
      "Sometimes we have to do hard things to fix our mistakes.",
      "Trees are dangerous.",
      "It's always windy outside.",
    ],
    answer: "Sometimes we have to do hard things to fix our mistakes.",
  },
  {
    _cat: "rl_main",
    passage: LIT_STAR_POEM,
    question: "What is the poem MOSTLY about?",
    choices: [
      "How clouds cover the sky",
      "A small, cheerful star shining above",
      "A person going swimming",
      "A homework problem",
    ],
    answer: "A small, cheerful star shining above",
  },

  // rl_structure — 10
  {
    _cat: "rl_structure",
    passage: LIT_LOST_KITE,
    question: "What is the PROBLEM in this story?",
    choices: [
      "Mia forgets her backpack.",
      "Mia's kite gets stuck in a tree.",
      "There is no wind.",
      "The pond is empty.",
    ],
    answer: "Mia's kite gets stuck in a tree.",
  },
  {
    _cat: "rl_structure",
    passage: LIT_LOST_KITE,
    question: "What SOLUTION does Mia decide on?",
    choices: [
      "Give up",
      "Climb the tree",
      "Get a new kite",
      "Swim in the pond",
    ],
    answer: "Climb the tree",
  },
  {
    _cat: "rl_structure",
    passage: LIT_BROKEN_VASE,
    question: "Which event happens FIRST in the story?",
    choices: [
      "The vase breaks.",
      "Nia calls to Mom.",
      "Nia and Sam play tag inside.",
      "Sam ducks.",
    ],
    answer: "Nia and Sam play tag inside.",
  },
  {
    _cat: "rl_structure",
    passage: LIT_BROKEN_VASE,
    question: "What happens RIGHT AFTER Nia takes a deep breath?",
    choices: [
      "The vase breaks.",
      "Nia decides to tell Mom the truth.",
      "Sam starts playing hide-and-seek.",
      "Grandma calls.",
    ],
    answer: "Nia decides to tell Mom the truth.",
  },
  {
    _cat: "rl_structure",
    passage: LIT_GRANDPA_GARDEN,
    question: "How is the story mostly organized?",
    choices: [
      "Cause and effect only",
      "By place: from house to library",
      "In the order events happen over time (weeks)",
      "As a list of definitions",
    ],
    answer: "In the order events happen over time (weeks)",
  },
  {
    _cat: "rl_structure",
    passage: LIT_NEW_STUDENT,
    question: "What is the SETTING at the start of the story?",
    choices: [
      "Amir's home",
      "The classroom door on Amir's first day",
      "A grocery store",
      "The library",
    ],
    answer: "The classroom door on Amir's first day",
  },
  {
    _cat: "rl_structure",
    passage: LIT_NEW_STUDENT,
    question: "Which sentence BEST describes how Amir's feelings CHANGE?",
    choices: [
      "He starts angry and stays angry.",
      "He starts nervous, then feels welcomed and less scared.",
      "He is bored the whole day.",
      "He never changes.",
    ],
    answer: "He starts nervous, then feels welcomed and less scared.",
  },
  {
    _cat: "rl_structure",
    passage: LIT_LOST_KITE,
    question:
      "How does the writer help you feel Mia's excitement at the start?",
    choices: [
      "By using words like 'raced,' 'gripping,' and 'snapped it up'",
      "By listing colors of many kites",
      "By describing the school day",
      "By using math symbols",
    ],
    answer: "By using words like 'raced,' 'gripping,' and 'snapped it up'",
  },
  {
    _cat: "rl_structure",
    passage: LIT_STAR_POEM,
    question: "How many LINES does this poem have?",
    choices: ["Two", "Three", "Four", "Five"],
    answer: "Four",
  },
  {
    _cat: "rl_structure",
    passage: LIT_STAR_POEM,
    question: "Which pair of words at the ENDS of lines rhyme?",
    choices: [
      "roof / waterproof",
      "little / cloud",
      "star / rain",
      "gentle / blaze",
    ],
    answer: "roof / waterproof",
  },

  // rl_vocab — 7
  {
    _cat: "rl_vocab",
    passage: LIT_LOST_KITE,
    question:
      "In this sentence, what does 'breathless' most likely mean?\n\"She watched, breathless, as the kite drifted higher and higher.\"",
    choices: [
      "Very sleepy",
      "So excited or shocked that she could hardly breathe",
      "Full of air",
      "Angry at the wind",
    ],
    answer: "So excited or shocked that she could hardly breathe",
  },
  {
    _cat: "rl_vocab",
    passage: LIT_GRANDPA_GARDEN,
    question: "In the story, 'seedling' means…",
    choices: [
      "A very old plant",
      "A young, small plant that has just started to grow",
      "A pile of dirt",
      "A basket",
    ],
    answer: "A young, small plant that has just started to grow",
  },
  {
    _cat: "rl_vocab",
    passage: LIT_NEW_STUDENT,
    question:
      "\"Amir stood at the classroom door, his backpack still on.\"\n\nHere, 'still on' tells you that Amir had NOT yet…",
    choices: [
      "Eaten his lunch",
      "Taken off his backpack",
      "Learned to read",
      "Painted a picture",
    ],
    answer: "Taken off his backpack",
  },
  {
    _cat: "rl_vocab",
    passage: LIT_BROKEN_VASE,
    question:
      "'Nia's eyes stung.'\n\nIn this sentence, 'stung' probably means her eyes felt…",
    choices: [
      "Full of laughter",
      "Sharp with the pinch of tears",
      "Sleepy",
      "Cold",
    ],
    answer: "Sharp with the pinch of tears",
  },
  {
    _cat: "rl_vocab",
    passage: LIT_STAR_POEM,
    question: "In the poem, 'blaze' means the star's…",
    choices: ["Cold", "Sleep", "Bright glow", "Silence"],
    answer: "Bright glow",
  },
  {
    _cat: "rl_vocab",
    passage: LIT_GRANDPA_GARDEN,
    question:
      "Which detail helps you understand that Grandpa Luis works slowly and carefully?",
    choices: [
      '"Grandpa\'s hands, dusted with soil, moved slowly."',
      '"Every Saturday…"',
      '"Diego liked to rush."',
      '"Patience, he decided…"',
    ],
    answer: '"Grandpa\'s hands, dusted with soil, moved slowly."',
  },
  {
    _cat: "rl_vocab",
    passage: LIT_LOST_KITE,
    question:
      '"The wind snapped it up into the sky like a tiny sail."\n\nThis is an example of a…',
    choices: [
      "Question",
      "Simile (comparing one thing to another using 'like')",
      "List",
      "Number sentence",
    ],
    answer: "Simile (comparing one thing to another using 'like')",
  },

  // rl_pov — 4
  {
    _cat: "rl_pov",
    passage: LIT_BROKEN_VASE,
    question: "Who TELLS this story?",
    choices: [
      "Nia, using 'I'",
      "A narrator outside the story who calls the kids by name",
      "Sam, whispering",
      "Grandma from another town",
    ],
    answer: "A narrator outside the story who calls the kids by name",
  },
  {
    _cat: "rl_pov",
    passage: LIT_BROKEN_VASE,
    question: "How does NIA most likely feel about breaking the vase?",
    choices: ["Proud", "Nervous and sorry", "Confused", "Excited to hide it"],
    answer: "Nervous and sorry",
  },
  {
    _cat: "rl_pov",
    passage: LIT_NEW_STUDENT,
    question:
      "How does KAI treat Amir? Which detail best supports your answer?",
    choices: [
      "Kai ignores him — 'Everyone stared.'",
      "Kai is welcoming — 'Sit by me.'",
      "Kai is mean — the story does not show any words from Kai.",
      "Kai is bossy — Kai tells Amir to leave.",
    ],
    answer: "Kai is welcoming — 'Sit by me.'",
  },
  {
    _cat: "rl_pov",
    passage: LIT_LOST_KITE,
    question:
      "Whose thoughts and feelings does the reader see MOST in the story?",
    choices: ["Mia's", "The oak tree's", "The kite's", "A stranger's"],
    answer: "Mia's",
  },

  // ri_detail — 11
  {
    _cat: "ri_detail",
    passage: INFO_HONEYBEES,
    question:
      "According to the passage, what sticks to a bee's body while it collects nectar?",
    choices: ["Grass", "Rainwater", "Pollen", "Sand"],
    answer: "Pollen",
  },
  {
    _cat: "ri_detail",
    passage: INFO_HONEYBEES,
    question: "Which crop is NOT mentioned in the passage?",
    choices: ["Apples", "Blueberries", "Watermelons", "Bananas"],
    answer: "Bananas",
  },
  {
    _cat: "ri_detail",
    passage: INFO_TN_RIVERS,
    question:
      "According to the passage, about how many miles of rivers and streams does Tennessee have?",
    choices: ["600", "6,000", "60,000", "600,000"],
    answer: "60,000",
  },
  {
    _cat: "ri_detail",
    passage: INFO_TN_RIVERS,
    question: "Which river winds through Nashville?",
    choices: ["Mississippi", "Cumberland", "Ohio", "Colorado"],
    answer: "Cumberland",
  },
  {
    _cat: "ri_detail",
    passage: INFO_BATS,
    question: "How many mosquitoes can a little brown bat eat in one hour?",
    choices: [
      "A dozen",
      "About a hundred",
      "About a thousand",
      "About a million",
    ],
    answer: "About a thousand",
  },
  {
    _cat: "ri_detail",
    passage: INFO_BATS,
    question: "What is echolocation?",
    choices: [
      "A way bats sleep during the day",
      "Sending out squeaks that bounce off insects and echo back",
      "A dance bats do",
      "How bats grow their wings",
    ],
    answer: "Sending out squeaks that bounce off insects and echo back",
  },
  {
    _cat: "ri_detail",
    passage: INFO_RECYCLE,
    question: "About how quickly can an aluminum can come back as a new can?",
    choices: ["60 minutes", "60 days", "60 years", "6 hours"],
    answer: "60 days",
  },
  {
    _cat: "ri_detail",
    passage: INFO_RECYCLE,
    question: "According to the passage, recycling does all of these EXCEPT…",
    choices: [
      "Save trees",
      "Save energy",
      "Keep streams cleaner",
      "Make plastic disappear instantly",
    ],
    answer: "Make plastic disappear instantly",
  },
  {
    _cat: "ri_detail",
    passage: INFO_MEASURING,
    question: "Which tool measures MASS?",
    choices: ["Ruler", "Thermometer", "Balance", "Clock"],
    answer: "Balance",
  },
  {
    _cat: "ri_detail",
    passage: INFO_MEASURING,
    question: "Which tool measures how HOT or COLD something is?",
    choices: ["Balance", "Ruler", "Thermometer", "Meter stick"],
    answer: "Thermometer",
  },
  {
    _cat: "ri_detail",
    passage: INFO_TN_RIVERS,
    question:
      "What do the Tennessee rivers described in the passage help do TODAY?",
    choices: [
      "Power dams and cool power plants",
      "Send astronauts to Mars",
      "Grow only cotton",
      "Make snow",
    ],
    answer: "Power dams and cool power plants",
  },

  // ri_vocab — 5
  {
    _cat: "ri_vocab",
    passage: INFO_HONEYBEES,
    question:
      "\"Many crops that Tennessee farmers grow — apples, blueberries, watermelons — DEPEND on bees.\"\n\nWhat does 'depend on' mean here?",
    choices: [
      "Are dangerous to",
      "Need in order to grow well",
      "Are colored like",
      "Are afraid of",
    ],
    answer: "Need in order to grow well",
  },
  {
    _cat: "ri_vocab",
    passage: INFO_BATS,
    question: "In the passage, 'mammals' are animals that…",
    choices: [
      "Have feathers",
      "Are the only ones that can truly fly",
      "Belong to the group that includes bats (warm-blooded, live-birth animals)",
      "Live under the sea only",
    ],
    answer:
      "Belong to the group that includes bats (warm-blooded, live-birth animals)",
  },
  {
    _cat: "ri_vocab",
    passage: INFO_RECYCLE,
    question: "A 'landfill' is BEST described as…",
    choices: [
      "A giant recycling bin",
      "A place where trash is collected and buried",
      "A hospital",
      "A farm",
    ],
    answer: "A place where trash is collected and buried",
  },
  {
    _cat: "ri_vocab",
    passage: INFO_MEASURING,
    question: "\"Scientists need tools to be EXACT.\"\n\nHere, 'exact' means…",
    choices: ["Fast", "Careful and precise", "Loud", "Silly"],
    answer: "Careful and precise",
  },
  {
    _cat: "ri_vocab",
    passage: INFO_TN_RIVERS,
    question: "A 'barge' in this passage is most likely a…",
    choices: [
      "Tiny fish",
      "Flat boat that carries heavy cargo",
      "Type of tree",
      "Small stone",
    ],
    answer: "Flat boat that carries heavy cargo",
  },

  // ri_text — 4
  {
    _cat: "ri_text",
    passage: INFO_BATS,
    question:
      "Which text FEATURE would BEST help you understand how a bat's wing is made?",
    choices: [
      "A labeled diagram of a bat's wing",
      "A weather map",
      "A menu",
      "A poem",
    ],
    answer: "A labeled diagram of a bat's wing",
  },
  {
    _cat: "ri_text",
    passage: INFO_HONEYBEES,
    question:
      "You want to find where the word 'pollen' is EXPLAINED in a science book. Which text feature helps most?",
    choices: [
      "The glossary",
      "The cover",
      "The page number of the last chapter only",
      "The dedication",
    ],
    answer: "The glossary",
  },
  {
    _cat: "ri_text",
    passage: INFO_RECYCLE,
    question:
      "Which text feature helps you find the CHAPTER about recycling in a nonfiction book?",
    choices: [
      "Table of contents",
      "Photo caption",
      "About the author",
      "Copyright page",
    ],
    answer: "Table of contents",
  },
  {
    _cat: "ri_text",
    passage: INFO_MEASURING,
    question: "How is this passage organized?",
    choices: [
      "It DESCRIBES tools and what each one measures.",
      "It tells a story about a rainy day.",
      "It compares two rivers.",
      "It solves a math problem.",
    ],
    answer: "It DESCRIBES tools and what each one measures.",
  },

  // ri_purpose — 5
  {
    _cat: "ri_purpose",
    passage: INFO_HONEYBEES,
    question: "Why did the author MOST LIKELY write about honeybees?",
    choices: [
      "To make readers laugh",
      "To inform readers about why bees matter to plants and food",
      "To sell honey",
      "To describe a bee's family",
    ],
    answer: "To inform readers about why bees matter to plants and food",
  },
  {
    _cat: "ri_purpose",
    passage: INFO_RECYCLE,
    question: "What is the author's MAIN purpose?",
    choices: [
      "To entertain with a funny story",
      "To persuade readers to recycle",
      "To describe how to build a recycling bin only",
      "To sell aluminum",
    ],
    answer: "To persuade readers to recycle",
  },
  {
    _cat: "ri_purpose",
    passage: INFO_BATS,
    question: "The author probably wants readers to…",
    choices: [
      "Fear bats forever",
      "Understand and appreciate bats",
      "Buy a pet bat today",
      "Move to a cave",
    ],
    answer: "Understand and appreciate bats",
  },
  {
    _cat: "ri_purpose",
    passage: INFO_TN_RIVERS,
    question: "This passage is BEST described as…",
    choices: [
      "A fictional story",
      "An informational article",
      "A recipe",
      "A song",
    ],
    answer: "An informational article",
  },
  {
    _cat: "ri_purpose",
    passage: INFO_MEASURING,
    question: "The author's MAIN purpose in this passage is to…",
    choices: [
      "Teach readers which tools scientists use",
      "Tell a joke",
      "Sell a thermometer",
      "Argue about the weather",
    ],
    answer: "Teach readers which tools scientists use",
  },
];

// ─── elaPractice2: Language (grammar, mechanics, vocabulary) — L.3 ────────────
export const elaPractice2 = [
  // l_grammar — 27
  {
    _cat: "l_grammar",
    question:
      "Which word in this sentence is a NOUN?\n'The friendly puppy chased the ball.'",
    choices: ["Friendly", "Puppy", "Chased", "The"],
    answer: "Puppy",
  },
  {
    _cat: "l_grammar",
    question:
      "Which word in this sentence is a VERB?\n'Sofia writes a story every morning.'",
    choices: ["Sofia", "Writes", "Story", "Morning"],
    answer: "Writes",
  },
  {
    _cat: "l_grammar",
    question:
      "Which word is an ADJECTIVE in this sentence?\n'The tall giraffe ate the leaves.'",
    choices: ["Tall", "Giraffe", "Ate", "Leaves"],
    answer: "Tall",
  },
  {
    _cat: "l_grammar",
    question: "Which word is an ADVERB?\n'Marcus quickly ran to the bus.'",
    choices: ["Marcus", "Quickly", "Ran", "Bus"],
    answer: "Quickly",
  },
  {
    _cat: "l_grammar",
    question: "Which is a PROPER NOUN?",
    choices: ["city", "river", "Nashville", "state"],
    answer: "Nashville",
  },
  {
    _cat: "l_grammar",
    question: "Choose the correct PLURAL of 'child'.",
    choices: ["Childs", "Childes", "Children", "Childrens"],
    answer: "Children",
  },
  {
    _cat: "l_grammar",
    question: "Choose the correct PLURAL of 'mouse'.",
    choices: ["Mouses", "Mice", "Mices", "Mousies"],
    answer: "Mice",
  },
  {
    _cat: "l_grammar",
    question: "Which sentence uses the PAST TENSE correctly?",
    choices: [
      "Yesterday, I run to the store.",
      "Yesterday, I ran to the store.",
      "Yesterday, I runs to the store.",
      "Yesterday, I running to the store.",
    ],
    answer: "Yesterday, I ran to the store.",
  },
  {
    _cat: "l_grammar",
    question: "Which sentence is in the FUTURE tense?",
    choices: [
      "We play soccer now.",
      "We played soccer last week.",
      "We will play soccer tomorrow.",
      "We are playing soccer today.",
    ],
    answer: "We will play soccer tomorrow.",
  },
  {
    _cat: "l_grammar",
    question:
      "Which PRONOUN best fits the blank?\n'Mia loves her dog. ___ takes him for walks every day.'",
    choices: ["He", "She", "It", "They"],
    answer: "She",
  },
  {
    _cat: "l_grammar",
    question: "Which sentence uses the correct SUBJECT-VERB agreement?",
    choices: [
      "My brother sing loudly.",
      "My brothers sings loudly.",
      "My brothers sing loudly.",
      "My brother singing loudly.",
    ],
    answer: "My brothers sing loudly.",
  },
  {
    _cat: "l_grammar",
    question: "Choose the CORRECT sentence.",
    choices: [
      "The dogs runs fast.",
      "The dog run fast.",
      "The dogs run fast.",
      "The dog running fast.",
    ],
    answer: "The dogs run fast.",
  },
  {
    _cat: "l_grammar",
    question: "Which word is a CONJUNCTION?\n'I want juice AND toast.'",
    choices: ["Want", "Juice", "And", "Toast"],
    answer: "And",
  },
  {
    _cat: "l_grammar",
    question: "Which sentence uses 'their,' 'there,' and 'they're' correctly?",
    choices: [
      "Their going to they're friend's house over there.",
      "They're going to their friend's house over there.",
      "There going to their friend's house over they're.",
      "Their going to there friend's house over they're.",
    ],
    answer: "They're going to their friend's house over there.",
  },
  {
    _cat: "l_grammar",
    question: "Which is the correct COMPARATIVE form?",
    choices: [
      "Bigger than a truck",
      "More bigger than a truck",
      "Most big than a truck",
      "Big than a truck",
    ],
    answer: "Bigger than a truck",
  },
  {
    _cat: "l_grammar",
    question: "Which sentence uses an ADVERB to tell HOW?",
    choices: [
      "The bird flew.",
      "The bird flew gracefully.",
      "The bird has feathers.",
      "The bird is small.",
    ],
    answer: "The bird flew gracefully.",
  },
  {
    _cat: "l_grammar",
    question: "Choose the sentence that uses a POSSESSIVE noun.",
    choices: [
      "The dogs ran fast.",
      "The dog's ball is red.",
      "The dogs are barking.",
      "The dog runs fast.",
    ],
    answer: "The dog's ball is red.",
  },
  {
    _cat: "l_grammar",
    question: "Which sentence is a QUESTION?",
    choices: [
      "I like pizza.",
      "Do you like pizza?",
      "That is a slice of pizza.",
      "Wow, this pizza is great!",
    ],
    answer: "Do you like pizza?",
  },
  {
    _cat: "l_grammar",
    question: "Which sentence uses an EXCLAMATION correctly?",
    choices: [
      "I finished my homework.",
      "What time is it?",
      "Watch out!",
      "Please close the door.",
    ],
    answer: "Watch out!",
  },
  {
    _cat: "l_grammar",
    question: "Which is a COMMAND (imperative sentence)?",
    choices: [
      "The cat is sleeping.",
      "Please clean your room.",
      "How are you?",
      "That was awesome!",
    ],
    answer: "Please clean your room.",
  },
  {
    _cat: "l_grammar",
    question:
      "Choose the correct IRREGULAR PAST TENSE.\n'Yesterday I ___ my grandmother.'",
    choices: ["seed", "saw", "sawed", "seen"],
    answer: "saw",
  },
  {
    _cat: "l_grammar",
    question: "Which sentence has a compound SUBJECT?",
    choices: [
      "The dog ran fast.",
      "Ana and Diego ran fast.",
      "Ana ran quickly and quietly.",
      "Diego runs every day.",
    ],
    answer: "Ana and Diego ran fast.",
  },
  {
    _cat: "l_grammar",
    question: "Which sentence has a compound PREDICATE?",
    choices: [
      "The kids swam.",
      "The kids swam and laughed.",
      "The kids and their parents swam.",
      "The kids ran.",
    ],
    answer: "The kids swam and laughed.",
  },
  {
    _cat: "l_grammar",
    question: "Which is a COMPLETE sentence?",
    choices: [
      "Ran to the store.",
      "Because I said so.",
      "The tall boy in the red hat.",
      "The tall boy ran to the store.",
    ],
    answer: "The tall boy ran to the store.",
  },
  {
    _cat: "l_grammar",
    question:
      "Which underlined word is used AS AN ADJECTIVE?\n'The BRIGHT sun warmed our faces.'",
    choices: ["Bright", "Sun", "Warmed", "Faces"],
    answer: "Bright",
  },
  {
    _cat: "l_grammar",
    question: "Choose the correct PRONOUN.\n'Diego and ___ are going hiking.'",
    choices: ["I", "me", "myself", "we"],
    answer: "I",
  },
  {
    _cat: "l_grammar",
    question: "Which sentence uses a PREPOSITIONAL phrase?",
    choices: [
      "The cat sleeps.",
      "The cat sleeps under the bed.",
      "The cat is sleeping.",
      "The tired cat sleeps.",
    ],
    answer: "The cat sleeps under the bed.",
  },

  // l_mechanics — 16
  {
    _cat: "l_mechanics",
    question: "Which sentence is punctuated correctly?",
    choices: [
      "do you like apples",
      "Do you like apples?",
      "Do you like apples.",
      "Do you like apples!",
    ],
    answer: "Do you like apples?",
  },
  {
    _cat: "l_mechanics",
    question: "Which sentence uses CAPITAL letters correctly?",
    choices: [
      "we went to a park in july.",
      "We went to a park in july.",
      "we went to a park in July.",
      "We went to a park in July.",
    ],
    answer: "We went to a park in July.",
  },
  {
    _cat: "l_mechanics",
    question: "Which sentence uses COMMAS in a list correctly?",
    choices: [
      "I like apples oranges and bananas.",
      "I like apples, oranges, and bananas.",
      "I like apples, oranges and, bananas.",
      "I like, apples oranges and bananas.",
    ],
    answer: "I like apples, oranges, and bananas.",
  },
  {
    _cat: "l_mechanics",
    question: "Which sentence uses an APOSTROPHE correctly?",
    choices: [
      "Its my birthday.",
      "It's my birthday.",
      "Its' my birthday.",
      "It is'nt my birthday.",
    ],
    answer: "It's my birthday.",
  },
  {
    _cat: "l_mechanics",
    question: "Choose the sentence with correct CAPITALIZATION.",
    choices: [
      "my friend rita lives in memphis.",
      "My friend Rita lives in Memphis.",
      "My friend rita lives in Memphis.",
      "my Friend Rita lives in memphis.",
    ],
    answer: "My friend Rita lives in Memphis.",
  },
  {
    _cat: "l_mechanics",
    question: "Which sentence uses QUOTATION MARKS correctly?",
    choices: [
      "Mom said, come home now.",
      'Mom said "come home now."',
      'Mom said, "Come home now."',
      '"Mom said come home now."',
    ],
    answer: 'Mom said, "Come home now."',
  },
  {
    _cat: "l_mechanics",
    question: "Choose the correct CONTRACTION for 'do not.'",
    choices: ["Do'nt", "Don't", "Dont'", "Don't."],
    answer: "Don't",
  },
  {
    _cat: "l_mechanics",
    question: "Choose the correct CONTRACTION for 'they are.'",
    choices: ["There", "Their", "They're", "Theyr"],
    answer: "They're",
  },
  {
    _cat: "l_mechanics",
    question: "Which sentence uses a COMMA to separate a date correctly?",
    choices: [
      "I was born on July 4 2015.",
      "I was born on July 4, 2015.",
      "I was born on July, 4, 2015.",
      "I was born, on July 4 2015.",
    ],
    answer: "I was born on July 4, 2015.",
  },
  {
    _cat: "l_mechanics",
    question: "Which title is CAPITALIZED correctly?",
    choices: [
      "charlotte's web",
      "Charlotte's Web",
      "Charlotte's web",
      "charlotte's Web",
    ],
    answer: "Charlotte's Web",
  },
  {
    _cat: "l_mechanics",
    question: "Which word is spelled correctly?",
    choices: ["Friend", "Freind", "Frend", "Freend"],
    answer: "Friend",
  },
  {
    _cat: "l_mechanics",
    question: "Which word is spelled correctly?",
    choices: ["Recieve", "Receive", "Receeve", "Recive"],
    answer: "Receive",
  },
  {
    _cat: "l_mechanics",
    question: "Which shows the correct plural spelling?",
    choices: ["Familys", "Familyes", "Families", "Familes"],
    answer: "Families",
  },
  {
    _cat: "l_mechanics",
    question: "Which shows the correct spelling of the PAST TENSE of 'stop'?",
    choices: ["Stoped", "Stopped", "Stopedd", "Staped"],
    answer: "Stopped",
  },
  {
    _cat: "l_mechanics",
    question:
      "Which sentence uses a COMMA correctly after a greeting in a letter?",
    choices: [
      "Dear Grandma How are you?",
      "Dear Grandma, How are you?",
      "Dear, Grandma How are you?",
      "Dear Grandma. How are you.",
    ],
    answer: "Dear Grandma, How are you?",
  },
  {
    _cat: "l_mechanics",
    question: "Which sentence uses END punctuation correctly?",
    choices: [
      "We won the game.",
      "We won the game?",
      "We won the game",
      "we won the game.",
    ],
    answer: "We won the game.",
  },

  // l_vocab — 22
  {
    _cat: "l_vocab",
    question: "Which word means the SAME as 'happy'?",
    choices: ["Sad", "Angry", "Joyful", "Tired"],
    answer: "Joyful",
  },
  {
    _cat: "l_vocab",
    question: "Which word means the OPPOSITE of 'begin'?",
    choices: ["Start", "End", "Open", "Try"],
    answer: "End",
  },
  {
    _cat: "l_vocab",
    question: "Which word is a SYNONYM for 'huge'?",
    choices: ["Tiny", "Enormous", "Fast", "Silent"],
    answer: "Enormous",
  },
  {
    _cat: "l_vocab",
    question: "Which word is an ANTONYM for 'brave'?",
    choices: ["Bold", "Fearful", "Strong", "Loud"],
    answer: "Fearful",
  },
  {
    _cat: "l_vocab",
    question:
      "Read the sentence.\n'The stubborn mule refused to move.'\n\nWhat does 'stubborn' mean?",
    choices: [
      "Kind and eager",
      "Not willing to change or move",
      "Very tired",
      "Very fast",
    ],
    answer: "Not willing to change or move",
  },
  {
    _cat: "l_vocab",
    question:
      "Read the sentence.\n'Ana was ecstatic when her team won the championship.'\n\nWhat does 'ecstatic' mean?",
    choices: ["Very upset", "Very happy or thrilled", "Confused", "Sleepy"],
    answer: "Very happy or thrilled",
  },
  {
    _cat: "l_vocab",
    question:
      "What does the PREFIX 'un-' usually mean in words like 'unhappy' or 'unkind'?",
    choices: ["Very", "Again", "Not", "Before"],
    answer: "Not",
  },
  {
    _cat: "l_vocab",
    question:
      "What does the PREFIX 're-' usually mean in words like 'redo' or 'replay'?",
    choices: ["Not", "Again", "Very", "Before"],
    answer: "Again",
  },
  {
    _cat: "l_vocab",
    question:
      "What does the SUFFIX '-less' usually mean in 'hopeless' or 'fearless'?",
    choices: ["Without", "Full of", "Again", "One who"],
    answer: "Without",
  },
  {
    _cat: "l_vocab",
    question:
      "What does the SUFFIX '-ful' usually mean in 'joyful' or 'careful'?",
    choices: ["Without", "Full of", "Not", "Before"],
    answer: "Full of",
  },
  {
    _cat: "l_vocab",
    question: "Which word means 'full of harm'?",
    choices: ["Harmless", "Harmful", "Reharm", "Harmed"],
    answer: "Harmful",
  },
  {
    _cat: "l_vocab",
    question: "Which word means 'to do again'?",
    choices: ["Undo", "Redo", "Doable", "Doing"],
    answer: "Redo",
  },
  {
    _cat: "l_vocab",
    question: "What does the IDIOM 'raining cats and dogs' mean?",
    choices: [
      "Pets are outside",
      "It is raining very hard",
      "There is a storm coming",
      "There are animals in the sky",
    ],
    answer: "It is raining very hard",
  },
  {
    _cat: "l_vocab",
    question: "What does the IDIOM 'a piece of cake' mean?",
    choices: ["Very easy", "A small dessert", "Very hard", "A big party"],
    answer: "Very easy",
  },
  {
    _cat: "l_vocab",
    question:
      "Read the sentence.\n'The trail was so STEEP we had to rest halfway.'\n\nWhat does 'steep' mean?",
    choices: ["Flat", "Wet", "Rising sharply", "Full of trees"],
    answer: "Rising sharply",
  },
  {
    _cat: "l_vocab",
    question: "Which word means to 'look at something carefully'?",
    choices: ["Glance", "Observe", "Skim", "Skip"],
    answer: "Observe",
  },
  {
    _cat: "l_vocab",
    question: "Which sentence uses 'bank' meaning the SIDE of a river?",
    choices: [
      "Mom went to the bank to deposit money.",
      "The children sat on the grassy bank of the creek.",
      "I keep coins in my piggy bank.",
      "The bank was closed on Sunday.",
    ],
    answer: "The children sat on the grassy bank of the creek.",
  },
  {
    _cat: "l_vocab",
    question: "Which sentence uses 'bat' meaning the small flying mammal?",
    choices: [
      "He swung the bat and missed.",
      "A bat flew out of the cave at dusk.",
      "She grabbed the bat from the shed.",
      "The wooden bat was heavy.",
    ],
    answer: "A bat flew out of the cave at dusk.",
  },
  {
    _cat: "l_vocab",
    question: "Which word is a COMPOUND word?",
    choices: ["Bookstore", "Because", "Happen", "Reading"],
    answer: "Bookstore",
  },
  {
    _cat: "l_vocab",
    question: "Which word means 'able to be trusted'?",
    choices: ["Reliable", "Careless", "Hopeless", "Furious"],
    answer: "Reliable",
  },
  {
    _cat: "l_vocab",
    question:
      "Read the sentence.\n'The chef GARNISHED the plate with parsley.'\n\nWhat does 'garnished' most likely mean?",
    choices: ["Ate", "Threw away", "Decorated", "Cooked"],
    answer: "Decorated",
  },
  {
    _cat: "l_vocab",
    question:
      "Read the sentence.\n'Kai was RELUCTANT to try the spicy salsa.'\n\nWhat does 'reluctant' mean?",
    choices: ["Eager", "Not willing", "Very hungry", "Delighted"],
    answer: "Not willing",
  },
];

// ─── elaPractice3: Writing tasks & study skills (W.3) ─────────────────────────
export const elaPractice3 = [
  // w_opinion — 12
  {
    _cat: "w_opinion",
    question: "Which sentence states an OPINION?",
    choices: [
      "Tennessee is a state in the U.S.",
      "Nashville has music venues.",
      "Pizza is the best food ever.",
      "Bears live in the Great Smoky Mountains.",
    ],
    answer: "Pizza is the best food ever.",
  },
  {
    _cat: "w_opinion",
    question: "Which sentence states a FACT?",
    choices: [
      "Reading is fun.",
      "Cats are better than dogs.",
      "Water freezes at 32°F.",
      "Summer is the best season.",
    ],
    answer: "Water freezes at 32°F.",
  },
  {
    _cat: "w_opinion",
    question:
      "You are writing to convince others that recess should be longer. Which sentence would make the STRONGEST reason?",
    choices: [
      "Recess is nice.",
      "Recess helps kids focus better in class after they move around.",
      "Recess is at 10 a.m.",
      "Kids sometimes play tag.",
    ],
    answer: "Recess helps kids focus better in class after they move around.",
  },
  {
    _cat: "w_opinion",
    question:
      "Which is the BEST opening for an opinion essay titled 'Everyone Should Read More'?",
    choices: [
      "Books have pages.",
      "Reading is one of the best things you can do — here's why.",
      "I like the color blue.",
      "I have three brothers.",
    ],
    answer: "Reading is one of the best things you can do — here's why.",
  },
  {
    _cat: "w_opinion",
    question: "Which sentence would BEST end an opinion piece about kindness?",
    choices: [
      "The end.",
      "That's why kindness matters — it makes our whole community better.",
      "I have to go.",
      "Kindness is a word.",
    ],
    answer:
      "That's why kindness matters — it makes our whole community better.",
  },
  {
    _cat: "w_opinion",
    question: "Which word or phrase HELPS connect a reason to an opinion?",
    choices: ["Because", "Purple", "Rock", "Suddenly"],
    answer: "Because",
  },
  {
    _cat: "w_opinion",
    question: "Which word signals another REASON in an opinion piece?",
    choices: ["Also", "Sleep", "Yesterday", "Very tall"],
    answer: "Also",
  },
  {
    _cat: "w_opinion",
    question: "Which sentence gives an EXAMPLE to support an opinion?",
    choices: [
      "For example, my sister reads a book every week.",
      "Books are things.",
      "The library is nearby.",
      "Reading is a word.",
    ],
    answer: "For example, my sister reads a book every week.",
  },
  {
    _cat: "w_opinion",
    question:
      "Which is the BEST title for an opinion essay about wearing helmets while biking?",
    choices: [
      "Bicycles Are Round",
      "Why All Bike Riders Should Wear Helmets",
      "The History of the Bicycle",
      "How to Fix a Flat Tire",
    ],
    answer: "Why All Bike Riders Should Wear Helmets",
  },
  {
    _cat: "w_opinion",
    question:
      "Read the reason:\n'It gives us fresh air, exercise, and a chance to make friends.'\n\nThis reason BEST supports which opinion?",
    choices: [
      "We should eat more spinach.",
      "Kids should play outside every day.",
      "TV is fun.",
      "Snow melts in spring.",
    ],
    answer: "Kids should play outside every day.",
  },
  {
    _cat: "w_opinion",
    question: "Which choice is a STRONG closing sentence for an opinion piece?",
    choices: [
      "The end.",
      "So, as you can see, these reasons show why our class should visit the science museum.",
      "I forgot what I was saying.",
      "Anyway.",
    ],
    answer:
      "So, as you can see, these reasons show why our class should visit the science museum.",
  },
  {
    _cat: "w_opinion",
    question:
      "You want to convince your teacher to allow class pets. Which is the BEST supporting reason?",
    choices: [
      "Pets are cute.",
      "Caring for a class pet teaches responsibility and gives us hands-on science lessons.",
      "My cousin has a hamster.",
      "I like animals.",
    ],
    answer:
      "Caring for a class pet teaches responsibility and gives us hands-on science lessons.",
  },

  // w_inform — 16
  {
    _cat: "w_inform",
    question:
      "Which is the BEST topic sentence for a paragraph ABOUT MONARCH BUTTERFLIES?",
    choices: [
      "I saw a butterfly once.",
      "Monarch butterflies are amazing insects that migrate thousands of miles each year.",
      "Butterflies fly.",
      "Yellow is a color.",
    ],
    answer:
      "Monarch butterflies are amazing insects that migrate thousands of miles each year.",
  },
  {
    _cat: "w_inform",
    question:
      "Which sentence adds a DETAIL to support an informational paragraph about the water cycle?",
    choices: [
      "Water is wet.",
      "Water evaporates when the sun heats a lake, turning it into water vapor.",
      "I drank water yesterday.",
      "Rain is loud.",
    ],
    answer:
      "Water evaporates when the sun heats a lake, turning it into water vapor.",
  },
  {
    _cat: "w_inform",
    question:
      "Which is the BEST word to SIGNAL SEQUENCE in an informational piece?",
    choices: ["Because", "First", "Instead", "Although"],
    answer: "First",
  },
  {
    _cat: "w_inform",
    question:
      "You are writing directions on how to make a peanut butter sandwich. Which is the BEST FIRST step?",
    choices: [
      "Eat the sandwich.",
      "Get out two slices of bread, a knife, and peanut butter.",
      "Cut it in half.",
      "Put it on a plate.",
    ],
    answer: "Get out two slices of bread, a knife, and peanut butter.",
  },
  {
    _cat: "w_inform",
    question:
      "Which detail BEST supports a paragraph titled 'Why Sleep Matters'?",
    choices: [
      "Sleep is quiet.",
      "Sleep helps kids grow, focus at school, and stay healthy.",
      "Beds are soft.",
      "I have a pillow.",
    ],
    answer: "Sleep helps kids grow, focus at school, and stay healthy.",
  },
  {
    _cat: "w_inform",
    question: "Which word helps a writer add MORE information?",
    choices: ["However", "Also", "Instead", "But"],
    answer: "Also",
  },
  {
    _cat: "w_inform",
    question:
      "Which is the BEST closing sentence for a report about honeybees?",
    choices: [
      "That's all.",
      "In short, honeybees are tiny helpers that keep our food supply strong.",
      "The end.",
      "Yay bees.",
    ],
    answer:
      "In short, honeybees are tiny helpers that keep our food supply strong.",
  },
  {
    _cat: "w_inform",
    question: "Which SENTENCE gives a clear DEFINITION?",
    choices: [
      "Metamorphosis is cool.",
      "Metamorphosis is a big change an animal goes through, like a caterpillar becoming a butterfly.",
      "It happens.",
      "Butterflies fly.",
    ],
    answer:
      "Metamorphosis is a big change an animal goes through, like a caterpillar becoming a butterfly.",
  },
  {
    _cat: "w_inform",
    question:
      "Which is a good HEADING for a section about the roots of a plant?",
    choices: ["Recess", "Sports", "How Roots Help Plants", "Space Travel"],
    answer: "How Roots Help Plants",
  },
  {
    _cat: "w_inform",
    question:
      "Which sentence gives a good FACT for a report about the Great Smoky Mountains?",
    choices: [
      "The Great Smoky Mountains are pretty.",
      "The Great Smoky Mountains National Park sits along the border of Tennessee and North Carolina.",
      "I want to hike there.",
      "Trees are green.",
    ],
    answer:
      "The Great Smoky Mountains National Park sits along the border of Tennessee and North Carolina.",
  },
  {
    _cat: "w_inform",
    question: "Which sentence uses linking words that show CAUSE and EFFECT?",
    choices: [
      "Bees pollinate flowers because they carry pollen from bloom to bloom.",
      "Bees are yellow.",
      "Buzz.",
      "Flowers grow.",
    ],
    answer:
      "Bees pollinate flowers because they carry pollen from bloom to bloom.",
  },
  {
    _cat: "w_inform",
    question: "In a nonfiction book, a CAPTION near a photo tells you…",
    choices: [
      "What is in the photo and why it matters",
      "The author's dinner",
      "The last chapter's summary",
      "The book's price",
    ],
    answer: "What is in the photo and why it matters",
  },
  {
    _cat: "w_inform",
    question:
      "Which detail BEST supports a paragraph about how thunderstorms form?",
    choices: [
      "Warm, moist air rises and cools, forming tall clouds where lightning can develop.",
      "Rain is wet.",
      "Boom!",
      "Thunder is loud.",
    ],
    answer:
      "Warm, moist air rises and cools, forming tall clouds where lightning can develop.",
  },
  {
    _cat: "w_inform",
    question:
      "Which is the BEST way to organize an informational essay about the phases of the Moon?",
    choices: [
      "Alphabetically",
      "In the order the phases appear in the sky",
      "By color",
      "By the writer's mood",
    ],
    answer: "In the order the phases appear in the sky",
  },
  {
    _cat: "w_inform",
    question: "Which sentence WOULD NOT belong in a paragraph about rocks?",
    choices: [
      "Sedimentary rocks form in layers.",
      "Igneous rocks form from cooled lava.",
      "Metamorphic rocks change under heat and pressure.",
      "My favorite ice cream is vanilla.",
    ],
    answer: "My favorite ice cream is vanilla.",
  },
  {
    _cat: "w_inform",
    question: "Which is a good CLOSING sentence for an informational report?",
    choices: [
      "Bye.",
      "Now that you know how the water cycle works, you can watch it happen all around you.",
      "The end.",
      "Water.",
    ],
    answer:
      "Now that you know how the water cycle works, you can watch it happen all around you.",
  },

  // w_narrative — 11
  {
    _cat: "w_narrative",
    question: "Which is the BEST opening for a narrative story?",
    choices: [
      "Once upon a rainy Saturday, I found a strange key stuck in the mud by our porch.",
      "Then we went home.",
      "The end.",
      "Rocks are hard.",
    ],
    answer:
      "Once upon a rainy Saturday, I found a strange key stuck in the mud by our porch.",
  },
  {
    _cat: "w_narrative",
    question: "In a story, which detail tells you the SETTING?",
    choices: [
      "It was a hot afternoon at the county fair.",
      "She screamed.",
      "Then we ate.",
      "He laughed.",
    ],
    answer: "It was a hot afternoon at the county fair.",
  },
  {
    _cat: "w_narrative",
    question:
      "Which word is a TEMPORAL word (shows time order) often used in stories?",
    choices: ["Suddenly", "Very", "Purple", "Bag"],
    answer: "Suddenly",
  },
  {
    _cat: "w_narrative",
    question: "Which sentence uses DIALOGUE?",
    choices: [
      "The cat was hungry.",
      '"I forgot my lunch!" cried Sam.',
      "It was cold outside.",
      "She ran fast.",
    ],
    answer: '"I forgot my lunch!" cried Sam.',
  },
  {
    _cat: "w_narrative",
    question: "Which sentence uses VIVID description?",
    choices: [
      "The soup was good.",
      "The steaming soup smelled of ginger, garlic, and warm bread.",
      "I ate soup.",
      "It was food.",
    ],
    answer: "The steaming soup smelled of ginger, garlic, and warm bread.",
  },
  {
    _cat: "w_narrative",
    question: "Which sentence shows a CHARACTER'S FEELINGS?",
    choices: [
      "The bell rang.",
      "Her heart pounded as she stepped onto the stage.",
      "The book had 40 pages.",
      "It was Monday.",
    ],
    answer: "Her heart pounded as she stepped onto the stage.",
  },
  {
    _cat: "w_narrative",
    question: "Which is the BEST closing for a narrative?",
    choices: [
      "The end.",
      "As we drove home in the twinkling dusk, Mia grinned — she had made a friend at last.",
      "Bye now.",
      "Then nothing.",
    ],
    answer:
      "As we drove home in the twinkling dusk, Mia grinned — she had made a friend at last.",
  },
  {
    _cat: "w_narrative",
    question:
      "Which sentence uses SENSORY details (what you can see, hear, smell, feel, or taste)?",
    choices: [
      "The pancakes sizzled and filled the kitchen with a buttery, warm smell.",
      "Pancakes are food.",
      "I ate breakfast.",
      "Then we left.",
    ],
    answer:
      "The pancakes sizzled and filled the kitchen with a buttery, warm smell.",
  },
  {
    _cat: "w_narrative",
    question: "Which sentence uses a STRONG action verb?",
    choices: [
      "The dog went across the yard.",
      "The dog dashed across the yard.",
      "The dog was in the yard.",
      "The dog is a dog.",
    ],
    answer: "The dog dashed across the yard.",
  },
  {
    _cat: "w_narrative",
    question: "Which TRANSITION word signals the NEXT event in a story?",
    choices: ["Then", "Purple", "Chair", "Silent"],
    answer: "Then",
  },
  {
    _cat: "w_narrative",
    question: "Which sentence would BEST show a story's PROBLEM?",
    choices: [
      "It was Tuesday.",
      "When Dad opened the box, our new puppy was missing.",
      "Puppies are cute.",
      "I have a dog.",
    ],
    answer: "When Dad opened the box, our new puppy was missing.",
  },

  // w_research — 7
  {
    _cat: "w_research",
    question:
      "Where is the BEST place to find a definition of the word 'photosynthesis'?",
    choices: [
      "A comic book",
      "A dictionary or glossary",
      "A weather app",
      "A grocery list",
    ],
    answer: "A dictionary or glossary",
  },
  {
    _cat: "w_research",
    question:
      "Which SOURCE would you use to find facts about the Great Smoky Mountains for a report?",
    choices: [
      "A novel about dragons",
      "A national park website or nonfiction book",
      "A comic book",
      "A movie review",
    ],
    answer: "A national park website or nonfiction book",
  },
  {
    _cat: "w_research",
    question:
      "Which is a KEY WORD you might type in a search bar to research honeybees?",
    choices: [
      "'sneakers'",
      "'honeybee pollination'",
      "'purple'",
      "'lunch menu'",
    ],
    answer: "'honeybee pollination'",
  },
  {
    _cat: "w_research",
    question: "Why should a researcher CHECK MORE THAN ONE source?",
    choices: [
      "To use up time",
      "To make sure the information is correct and complete",
      "To copy the same thing twice",
      "Because one source is not fun",
    ],
    answer: "To make sure the information is correct and complete",
  },
  {
    _cat: "w_research",
    question: "When taking NOTES from a book, you should…",
    choices: [
      "Copy every word",
      "Write the key ideas in your OWN words and note the source",
      "Make it up",
      "Not use notes",
    ],
    answer: "Write the key ideas in your OWN words and note the source",
  },
  {
    _cat: "w_research",
    question: "A GLOSSARY is used to look up…",
    choices: [
      "The author's phone number",
      "Definitions of key words in the book",
      "The color of the pages",
      "How the book is printed",
    ],
    answer: "Definitions of key words in the book",
  },
  {
    _cat: "w_research",
    question:
      "Which section of a book usually tells you the PAGES for each chapter?",
    choices: ["Cover", "Table of contents", "Index only", "Copyright page"],
    answer: "Table of contents",
  },
];
