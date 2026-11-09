// Tennessee grade 3 practice — TN Academic Standards
// Math: 3.OA, 3.NBT, 3.NF, 3.MD, 3.G blended into short story problems.
// ELA: RL.3 / RI.3 / L.3 with TN-flavored passages.
// Social Studies (TN Grade 3 has world focus, but includes TN state connections):
// state symbols, TN geography & rivers, three branches of government, community roles.

export const mathGrade3Practice = [
  {
    _cat: "mult",
    passage:
      "A pack of Rocky Top Bakery muffins holds 8 muffins. Mia's mom buys 3 packs for a class picnic.",
    question: "How many muffins did Mia's mom buy in all?",
    choices: ["11", "18", "24", "32"],
    answer: "24",
  },
  {
    _cat: "mult",
    question: "What is 6 × 7?",
    choices: ["36", "42", "48", "13"],
    answer: "42",
  },
  {
    _cat: "mult",
    question:
      "Which multiplication fact matches the array of 4 rows and 9 stars?",
    choices: ["4 × 9 = 36", "4 + 9 = 13", "9 × 9 = 81", "4 × 4 = 16"],
    answer: "4 × 9 = 36",
  },
  {
    _cat: "groups",
    passage:
      "Ranger Tia hands out 32 park brochures equally to 4 tour groups at Great Smoky Mountains visitor center.",
    question: "How many brochures does each tour group get?",
    choices: ["6", "7", "8", "12"],
    answer: "8",
  },
  {
    _cat: "groups",
    passage:
      "A country music teacher has 21 guitar picks. She puts 3 picks in each envelope for her students.",
    question: "How many envelopes does she fill?",
    choices: ["6", "7", "8", "18"],
    answer: "7",
  },
  {
    _cat: "round",
    question: "Round 468 to the nearest ten.",
    choices: ["460", "470", "500", "400"],
    answer: "470",
  },
  {
    _cat: "round",
    question: "Round 632 to the nearest hundred.",
    choices: ["600", "630", "700", "640"],
    answer: "600",
  },
  {
    _cat: "place",
    passage: "The Titans played to a crowd of 65,209 fans in Nashville.",
    question: "What is the value of the 5 in 65,209?",
    choices: ["5", "50", "500", "5,000"],
    answer: "5,000",
  },
  {
    _cat: "place",
    question: "In the number 374, which digit is in the tens place?",
    choices: ["3", "7", "4", "None"],
    answer: "7",
  },
  {
    _cat: "frac",
    passage: "Grandpa cuts a pecan pie into 6 equal slices. Ava eats 2 slices.",
    question: "What fraction of the pie did Ava eat?",
    choices: ["2/8", "2/6", "6/2", "1/2"],
    answer: "2/6",
  },
  {
    _cat: "frac",
    question:
      "On a number line from 0 to 1 divided into 4 equal parts, where is 3/4?",
    choices: [
      "Right after 0",
      "Halfway between 0 and 1",
      "Three of the four steps from 0",
      "Past 1",
    ],
    answer: "Three of the four steps from 0",
  },
  {
    _cat: "time",
    passage:
      "A bluegrass festival concert starts at 6:15 p.m. and lasts 45 minutes.",
    question: "What time does the concert end?",
    choices: ["6:45 p.m.", "7:00 p.m.", "7:15 p.m.", "6:60 p.m."],
    answer: "7:00 p.m.",
  },
  {
    _cat: "time",
    question: "Which shows 3:47 to the nearest minute on an analog clock?",
    choices: [
      "Hour hand a bit past 3, minute hand on the 9 plus 2 marks",
      "Hour hand on 4, minute hand on 12",
      "Hour hand on 3, minute hand on 4",
      "Hour hand on 3:30, minute hand on 47",
    ],
    answer: "Hour hand a bit past 3, minute hand on the 9 plus 2 marks",
  },
  {
    _cat: "measure",
    passage:
      "A jug at a Memphis BBQ joint holds 2 liters of lemonade. It is completely filled.",
    question: "About how many milliliters of lemonade are in the jug?",
    choices: ["20 mL", "200 mL", "2,000 mL", "20,000 mL"],
    answer: "2,000 mL",
  },
  {
    _cat: "measure",
    question: "A watermelon has a mass of about…",
    choices: ["5 grams", "5 kilograms", "5 milligrams", "5 tons"],
    answer: "5 kilograms",
  },
  {
    _cat: "data",
    passage:
      "A picture graph at Nashville Zoo shows visitors' favorite animals. Each 🐘 stands for 5 votes. There are 4 🐘 next to 'elephant.'",
    question: "How many votes did elephant get?",
    choices: ["4", "9", "20", "45"],
    answer: "20",
  },
  {
    _cat: "data",
    passage:
      "A line plot shows how tall bean plants grew, measured to the nearest half-inch. Three plants are at 3 in., two are at 3½ in., and one is at 4 in.",
    question: "How many bean plants were measured in all?",
    choices: ["5", "6", "10", "12"],
    answer: "6",
  },
  {
    _cat: "geom",
    question: "A rectangle is 6 feet long and 4 feet wide. What is its AREA?",
    choices: ["10 sq ft", "20 sq ft", "24 sq ft", "48 sq ft"],
    answer: "24 sq ft",
  },
  {
    _cat: "geom",
    question:
      "A square garden has a side length of 5 meters. What is its PERIMETER?",
    choices: ["10 m", "15 m", "20 m", "25 m"],
    answer: "20 m",
  },
  {
    _cat: "word",
    passage:
      "A class collects 48 canned goods for a Tennessee food bank on Monday and 27 more on Tuesday.",
    question: "How many canned goods did they collect in the two days?",
    choices: ["21", "65", "75", "85"],
    answer: "75",
  },
  {
    _cat: "word",
    passage:
      "A school store had 400 pencils. During Read Across Tennessee week, they gave away 165.",
    question: "How many pencils are left?",
    choices: ["235", "245", "265", "335"],
    answer: "235",
  },
  {
    _cat: "money",
    passage:
      "A snow cone at a Chattanooga fair costs $3. Kai buys one snow cone for himself and one for each of his 3 cousins.",
    question: "How much does Kai spend?",
    choices: ["$6", "$9", "$12", "$15"],
    answer: "$12",
  },
  {
    _cat: "money",
    passage:
      "Zoe has a $10 bill. She buys a Tennessee bookmark for $2 and a state map for $5.",
    question: "How much change does Zoe get?",
    choices: ["$1", "$2", "$3", "$5"],
    answer: "$3",
  },
];

export const elaGrade3Practice = [
  {
    _cat: "detail",
    passage:
      "Every summer, the Miller family drives to their cabin near Fall Creek Falls in Tennessee. Jamie's favorite part is hiking to the tallest waterfall east of the Mississippi River. He always carries the trail map, and his little sister Ivy insists on packing granola bars for the group.",
    question:
      "According to the passage, WHAT does Ivy always pack for the family?",
    choices: ["A trail map", "Granola bars", "A camera", "Water bottles"],
    answer: "Granola bars",
  },
  {
    _cat: "detail",
    passage:
      "Every summer, the Miller family drives to their cabin near Fall Creek Falls in Tennessee. Jamie's favorite part is hiking to the tallest waterfall east of the Mississippi River. He always carries the trail map, and his little sister Ivy insists on packing granola bars for the group.",
    question: "Where is the Miller family's cabin located?",
    choices: [
      "Near the Rocky Mountains",
      "Near Fall Creek Falls in Tennessee",
      "At a beach in Florida",
      "In downtown Nashville",
    ],
    answer: "Near Fall Creek Falls in Tennessee",
  },
  {
    _cat: "main",
    passage:
      "Honeybees do more than make sweet honey. They visit flowers to gather nectar and pollen. As they move from bloom to bloom, they help farmers grow apples, strawberries, and pumpkins. Without bees, many of our favorite foods would be hard to find.",
    question: "What is the MAIN idea of this passage?",
    choices: [
      "Honey tastes sweet.",
      "Bees help people by pollinating important crops.",
      "Bees live in Tennessee.",
      "Strawberries are red.",
    ],
    answer: "Bees help people by pollinating important crops.",
  },
  {
    _cat: "main",
    passage:
      "Elephants have huge ears they flap like fans to stay cool. Their long trunks can pick up a peanut or splash water. Baby elephants stay close to their mothers and learn from the herd for many years.",
    question: "Which sentence BEST states what the passage is mostly about?",
    choices: [
      "Elephants love peanuts.",
      "Elephants have special body parts and habits that help them live.",
      "Elephants live only in one country.",
      "Elephants are large.",
    ],
    answer: "Elephants have special body parts and habits that help them live.",
  },
  {
    _cat: "vocab",
    passage:
      "The volunteer described the old dogwood tree as 'ancient.' Its trunk was thick, and its bark was rough and cracked from many, many years of sun and storms.",
    question: "In the passage, what does the word 'ancient' MEAN?",
    choices: ["New", "Very old", "Small", "Green"],
    answer: "Very old",
  },
  {
    _cat: "vocab",
    passage:
      "Layla was famished after soccer practice. She hadn't eaten since lunch, and her stomach kept growling all the way home.",
    question: "What does 'famished' most likely mean?",
    choices: ["Very tired", "Very hungry", "Very happy", "Very cold"],
    answer: "Very hungry",
  },
  {
    _cat: "purpose",
    passage:
      "How to Make a Simple Bird Feeder: 1) Roll a pinecone in peanut butter. 2) Sprinkle it with birdseed. 3) Tie a string on top. 4) Hang it from a tree branch.",
    question: "Why did the author MOST LIKELY write this text?",
    choices: [
      "To make you laugh",
      "To tell a story about a bird",
      "To teach you how to do something",
      "To describe a bird's life cycle",
    ],
    answer: "To teach you how to do something",
  },
  {
    _cat: "purpose",
    passage:
      "You should always wear a helmet when you ride your bike. Helmets protect your head if you fall. Kids who wear helmets are much safer than kids who don't.",
    question: "What is the author's MAIN purpose?",
    choices: [
      "To describe a helmet",
      "To convince readers to wear a bike helmet",
      "To tell a scary bike story",
      "To sell a helmet",
    ],
    answer: "To convince readers to wear a bike helmet",
  },
  {
    _cat: "context",
    passage:
      "The old barn was DILAPIDATED. Its roof sagged, boards had fallen off the walls, and the door hung crookedly on one hinge.",
    question: "Using clues from the passage, DILAPIDATED probably means…",
    choices: ["Brand new", "Falling apart", "Painted red", "Empty inside"],
    answer: "Falling apart",
  },
  {
    _cat: "context",
    passage:
      "Marcus tried to console his little brother, who was crying because his ice cream had fallen off the cone. Marcus hugged him and offered to share his own scoop.",
    question: "What does 'console' mean here?",
    choices: [
      "To yell at",
      "To comfort someone who is upset",
      "To play a game",
      "To buy something",
    ],
    answer: "To comfort someone who is upset",
  },
  {
    _cat: "structure",
    passage:
      "Ants live in colonies. First, the queen lays eggs. Next, worker ants care for the eggs until they hatch. Then, the young ants grow into adults. Finally, adult ants help gather food for the colony.",
    question: "Which text structure is used in this passage?",
    choices: [
      "Compare and contrast",
      "Sequence (step-by-step order)",
      "Cause and effect only",
      "Description of a place",
    ],
    answer: "Sequence (step-by-step order)",
  },
  {
    _cat: "structure",
    passage:
      "Frogs and toads look alike, but they are different. Frogs have smooth, wet skin and long back legs for jumping. Toads have bumpy, dry skin and shorter legs, so they walk more than they hop.",
    question: "What text structure does this passage use?",
    choices: [
      "Sequence",
      "Cause and effect",
      "Compare and contrast",
      "Problem and solution",
    ],
    answer: "Compare and contrast",
  },
  {
    _cat: "compare",
    passage:
      "In one story, a boy tames a wild horse by being patient and gentle. In another story, a girl learns to trust a stray dog by feeding it every day.",
    question: "What is a THEME shared by both stories?",
    choices: [
      "Animals are dangerous.",
      "Trust and kindness help build friendship with animals.",
      "Horses are better than dogs.",
      "Kids should never touch animals.",
    ],
    answer: "Trust and kindness help build friendship with animals.",
  },
  {
    _cat: "compare",
    passage:
      "A NONFICTION article about butterflies gives facts about their life cycle. A POEM about butterflies describes them as 'floating stained-glass windows in the sky.'",
    question: "How is the poem different from the article?",
    choices: [
      "It uses colorful, imaginative language instead of straight facts.",
      "It only uses numbers.",
      "It has no words about butterflies.",
      "It has more facts than the article.",
    ],
    answer: "It uses colorful, imaginative language instead of straight facts.",
  },
  {
    _cat: "poetry",
    passage: `The moon peeks through the tall pine trees,
Silver light on the mountain breeze.
Fireflies dance around the porch,
Each one carries a tiny torch.`,
    question: "What are the fireflies COMPARED to in this poem?",
    choices: ["The moon", "Torches", "Pine trees", "The wind"],
    answer: "Torches",
  },
  {
    _cat: "poetry",
    passage: `Slippery snakes slide slowly.
Buzzy bees buzz busily.`,
    question: "Which sound feature does the poet MAINLY use in these lines?",
    choices: [
      "Rhyme at the end of lines",
      "Alliteration (repeating beginning sounds)",
      "Numbers",
      "Punctuation marks only",
    ],
    answer: "Alliteration (repeating beginning sounds)",
  },
  {
    _cat: "grammar",
    question: "Which sentence uses a PROPER NOUN?",
    choices: [
      "The dog ran fast.",
      "My teacher is very kind.",
      "We visited Nashville last summer.",
      "The park has a big slide.",
    ],
    answer: "We visited Nashville last summer.",
  },
  {
    _cat: "grammar",
    question: "Which word is the correct past tense of RUN?",
    choices: ["Runned", "Ran", "Runs", "Running"],
    answer: "Ran",
  },
  {
    _cat: "infer",
    passage:
      "When Grandma opened the door, Toby's tail wagged so hard it thumped against the wall. He ran in circles and dropped his leash at her feet.",
    question: "What can you INFER about Toby?",
    choices: [
      "Toby is tired.",
      "Toby is upset.",
      "Toby is excited and wants to go for a walk.",
      "Toby is hungry for dinner.",
    ],
    answer: "Toby is excited and wants to go for a walk.",
  },
  {
    _cat: "infer",
    passage:
      "Ella looked at the empty cereal box, then at the empty milk carton, then at her tiny brother's grinning, milk-covered face.",
    question: "What most likely happened?",
    choices: [
      "Ella's brother ate all the cereal and drank the milk.",
      "Ella already ate breakfast.",
      "Their mom made pancakes.",
      "The cat drank the milk.",
    ],
    answer: "Ella's brother ate all the cereal and drank the milk.",
  },
  {
    _cat: "textfeat",
    passage:
      "In a nonfiction book about frogs, a special section titled 'Glossary' at the back explains hard words like AMPHIBIAN and METAMORPHOSIS.",
    question: "How would you use the GLOSSARY?",
    choices: [
      "To find where the author lives",
      "To look up what a hard word in the book means",
      "To find pictures only",
      "To read the whole story again",
    ],
    answer: "To look up what a hard word in the book means",
  },
  {
    _cat: "textfeat",
    question:
      "Which text feature would BEST help you find the chapter about 'Weather' in a science book?",
    choices: [
      "Glossary",
      "Table of contents",
      "Picture caption",
      "About the author page",
    ],
    answer: "Table of contents",
  },
];

export const tennesseeSocialStudies = [
  {
    _cat: "state_government",
    question: "What is the CAPITAL city of Tennessee?",
    choices: ["Memphis", "Nashville", "Knoxville", "Chattanooga"],
    answer: "Nashville",
  },
  {
    _cat: "state_symbols",
    question: "Which of these is a state SYMBOL of Tennessee?",
    choices: ["Bald eagle", "Mockingbird", "Blue jay", "Puffin"],
    answer: "Mockingbird",
  },
  {
    _cat: "state_symbols",
    question: "The state flower of Tennessee, often seen in gardens, is the…",
    choices: ["Iris", "Rose", "Sunflower", "Daisy"],
    answer: "Iris",
  },
  {
    _cat: "state_symbols",
    passage:
      "Tennessee's state flag has three white stars in a blue circle. Each star stands for one of the state's three parts.",
    question: "What do the three stars on Tennessee's flag stand for?",
    choices: [
      "Three big cities",
      "The three grand divisions: East, Middle, and West Tennessee",
      "Three rivers",
      "Three governors",
    ],
    answer: "The three grand divisions: East, Middle, and West Tennessee",
  },
  {
    _cat: "geography_rivers",
    passage:
      "A wide, muddy river forms the western border of Tennessee. Barges push cargo up and down it every day.",
    question: "Which river forms Tennessee's western border?",
    choices: [
      "Cumberland River",
      "Ohio River",
      "Mississippi River",
      "Tennessee River",
    ],
    answer: "Mississippi River",
  },
  {
    _cat: "geography_regions",
    question:
      "In which part of Tennessee are the Great Smoky Mountains located?",
    choices: [
      "East Tennessee",
      "Middle Tennessee",
      "West Tennessee",
      "Southern Tennessee only",
    ],
    answer: "East Tennessee",
  },
  {
    _cat: "tennessee_history",
    passage:
      "Elvis Presley's home Graceland and a famous BBQ scene are found in this city on the bluffs of the Mississippi River.",
    question: "Which Tennessee city is being described?",
    choices: ["Nashville", "Memphis", "Knoxville", "Kingsport"],
    answer: "Memphis",
  },
  {
    _cat: "resources",
    question:
      "Which of these is a NATURAL RESOURCE that people use in Tennessee?",
    choices: ["Cars", "Trees for lumber", "Cell phones", "Bicycles"],
    answer: "Trees for lumber",
  },
  {
    _cat: "economics",
    question:
      "A GOOD is something you can hold, and a SERVICE is work someone does for you. Which is a SERVICE?",
    choices: [
      "A loaf of bread",
      "A haircut at the barber",
      "A new bike",
      "A pair of sneakers",
    ],
    answer: "A haircut at the barber",
  },
  {
    _cat: "economics",
    question: "People who BUY goods and services are called…",
    choices: ["Producers", "Consumers", "Governors", "Mayors"],
    answer: "Consumers",
  },
  {
    _cat: "economics",
    question:
      "A farmer who grows Tennessee tomatoes and sells them at a market is a…",
    choices: ["Consumer", "Producer", "Judge", "Tourist"],
    answer: "Producer",
  },
  {
    _cat: "economics",
    passage:
      "There are always more wants than resources to fill them. Tennessee farmers can only plant so many acres.",
    question: "This idea is called…",
    choices: ["Scarcity", "Voting", "Weather", "Sports"],
    answer: "Scarcity",
  },
  {
    _cat: "state_government",
    question: "The leader of the state of Tennessee is the…",
    choices: ["President", "Governor", "Mayor", "Chief Justice"],
    answer: "Governor",
  },
  {
    _cat: "government_branches",
    question: "Which BRANCH of government makes the laws?",
    choices: [
      "Legislative (Congress or legislature)",
      "Executive (President or Governor)",
      "Judicial (courts)",
      "News branch",
    ],
    answer: "Legislative (Congress or legislature)",
  },
  {
    _cat: "government_branches",
    question:
      "The BRANCH of government that decides if laws follow the U.S. Constitution is the…",
    choices: ["Legislative", "Executive", "Judicial", "Voting"],
    answer: "Judicial",
  },
  {
    _cat: "civics",
    passage:
      "A citizen has both rights (things they may do) and responsibilities (things they should do).",
    question: "Which is a RESPONSIBILITY of a good citizen?",
    choices: [
      "Playing video games",
      "Following the rules and helping the community",
      "Traveling every summer",
      "Getting many toys",
    ],
    answer: "Following the rules and helping the community",
  },
  {
    _cat: "civics",
    question:
      "The first ten changes added to the U.S. Constitution are called the…",
    choices: [
      "Bill of Rights",
      "Declaration of Rules",
      "Star-Spangled List",
      "State Flags",
    ],
    answer: "Bill of Rights",
  },
  {
    _cat: "indigenous_history",
    passage:
      "Long before European settlers arrived, the CHEROKEE people lived in what is now East Tennessee. They built villages, farmed corn, and fished.",
    question: "The Cherokee are an example of…",
    choices: [
      "European explorers",
      "Native American / American Indian people",
      "Astronauts",
      "Modern engineers",
    ],
    answer: "Native American / American Indian people",
  },
  {
    _cat: "tennessee_history",
    passage:
      "Davy Crockett was a famous Tennessean known as a hunter, a soldier, and later a member of the U.S. Congress from Tennessee.",
    question: "Which title BEST describes Davy Crockett based on the passage?",
    choices: [
      "Governor of Alaska",
      "Tennessee frontiersman and lawmaker",
      "Ancient king",
      "Baseball player",
    ],
    answer: "Tennessee frontiersman and lawmaker",
  },
  {
    _cat: "tennessee_culture",
    passage:
      "Tennessee's largest music genre grew from folk, gospel, and blues. Nashville became known as 'Music City' because of it.",
    question: "Which type of music is Nashville MOST famous for?",
    choices: ["Country", "Opera", "Classical", "Reggae"],
    answer: "Country",
  },
  {
    _cat: "civics",
    question:
      "When people take TURNS voting for leaders, this important part of American life is called…",
    choices: ["An election", "A parade", "A recess", "A committee"],
    answer: "An election",
  },
];
