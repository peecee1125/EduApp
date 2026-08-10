/**
 * Grade-3 readiness + curiosity topics — TN Academic Standards for Grade 3
 * (Math 3.OA/3.NBT/3.NF/3.MD/3.G, Science 3.LS/3.PS/3.ESS, Social Studies world
 * geography with TN connections) plus enrichment banks for planets, "wow" facts,
 * and paleontology as science.
 * Banks that use _cat work well with pickRepresentative() for varied quizzes.
 */

/** STEM curiosity: life, Earth, physical science & science practices */
export const stemThirdGradeCuriosity = [
  {
    _cat: "life",
    passage:
      "A salmon egg hatches into a tiny fish, grows in a river, swims to the ocean, and years later returns to lay eggs in the same river.",
    question: "This ordered set of stages is best called a salmon's…",
    choices: ["Food web", "Life cycle", "Weather report", "Habitat"],
    answer: "Life cycle",
  },
  {
    _cat: "life",
    question:
      "Two kittens from the same litter have different colored fur. This shows that offspring…",
    choices: [
      "Choose their own fur color",
      "Are always identical to their parents",
      "Inherit traits from parents but can VARY from siblings",
      "Never look like their parents",
    ],
    answer: "Inherit traits from parents but can VARY from siblings",
  },
  {
    _cat: "matter",
    passage:
      "A metal spoon is dropped in hot soup. After a minute, the handle feels warm too.",
    question: "The metal spoon is a good…",
    choices: [
      "Conductor of heat",
      "Insulator of heat",
      "Source of magnetism",
      "Living thing",
    ],
    answer: "Conductor of heat",
  },
  {
    _cat: "matter",
    question:
      "Which of these is a physical PROPERTY you could use to sort a group of buttons?",
    choices: [
      "Which button is happy",
      "The color and shape of each button",
      "The button's dreams",
      "Yesterday's weather",
    ],
    answer: "The color and shape of each button",
  },
  {
    _cat: "force",
    passage:
      "A cardboard box is pushed across a smooth floor. When it moves onto a rug, it slows down and stops sooner.",
    question: "Why does the box slow down faster on the rug?",
    choices: [
      "There is more friction on the rug",
      "The box gets heavier",
      "Gravity is stronger on the rug",
      "The box turns into a liquid",
    ],
    answer: "There is more friction on the rug",
  },
  {
    _cat: "force",
    question:
      "Two children push a wagon in the SAME direction. Compared to one child pushing alone, the wagon will…",
    choices: [
      "Move slower",
      "Not move at all",
      "Move faster or with more force",
      "Turn into a magnet",
    ],
    answer: "Move faster or with more force",
  },
  {
    _cat: "energy",
    passage:
      "A guitar string is plucked. It vibrates back and forth, and Aahana hears the note.",
    question: "What did the vibrating string produce?",
    choices: ["Sound energy", "Only heat", "Only light", "A magnet"],
    answer: "Sound energy",
  },
  {
    _cat: "energy",
    question:
      "A flashlight uses a battery to make a bulb glow. The energy travels from the battery through wires. This shows an…",
    choices: ["Empty box", "Electrical circuit", "Ocean current", "Life cycle"],
    answer: "Electrical circuit",
  },
  {
    _cat: "earth",
    passage:
      "During a storm in East Tennessee, heavy rain washes soil down a hill and into a creek. The creek turns brown.",
    question: "Which Earth process is this an example of?",
    choices: [
      "Erosion by moving water",
      "Volcanic eruption",
      "Tornado formation",
      "Rock crystallizing",
    ],
    answer: "Erosion by moving water",
  },
  {
    _cat: "earth",
    question:
      "Which is a way people can PROTECT soil from washing away on farms?",
    choices: [
      "Removing all the plants",
      "Planting cover crops or building terraces",
      "Adding more water at once",
      "Paving the whole farm",
    ],
    answer: "Planting cover crops or building terraces",
  },
  {
    _cat: "weather",
    question:
      "Ms. Patel's class records daily temperature for a month. They are studying…",
    choices: ["Weather patterns", "Life cycles", "Sound waves", "Fossils"],
    answer: "Weather patterns",
  },
  {
    _cat: "weather",
    passage:
      "A spinning column of air reaches down from a thundercloud, tearing the roof off a barn in Middle Tennessee.",
    question: "What kind of severe weather is being described?",
    choices: ["Blizzard", "Hurricane", "Tornado", "Drought"],
    answer: "Tornado",
  },
  {
    _cat: "space_earth",
    question: "Day and night on Earth are caused by…",
    choices: [
      "Earth's rotation on its axis",
      "The Moon blocking the Sun each day",
      "The Sun turning off",
      "Clouds only",
    ],
    answer: "Earth's rotation on its axis",
  },
  {
    _cat: "space_earth",
    question:
      "The Moon looks different night after night. These shapes we see are called…",
    choices: ["Moon phases", "Solar flares", "Rainbows", "Constellations"],
    answer: "Moon phases",
  },
  {
    _cat: "investigation",
    passage:
      "Rohan wonders if the color of a container affects how quickly ice melts inside. He fills a black cup and a white cup, each with one ice cube, and sets them both in the sun.",
    question: "In Rohan's test, what is the VARIABLE he is testing?",
    choices: [
      "The number of ice cubes",
      "The color of the cup",
      "How much sun",
      "The size of the cups",
    ],
    answer: "The color of the cup",
  },
  {
    _cat: "investigation",
    passage:
      "Priya asks her class what the class's favorite fruit is. Ten friends say apple, five say banana, and three say mango.",
    question: "Which is the BEST way for Priya to SHARE her results?",
    choices: [
      "A bar graph showing votes for each fruit",
      "A weather map",
      "A poem about apples",
      "A shopping list",
    ],
    answer: "A bar graph showing votes for each fruit",
  },
  {
    _cat: "engineering",
    passage:
      "A group of students needs to design a container that keeps an ice cube from melting for the longest time possible.",
    question: "Which is the BEST first step in the engineering design process?",
    choices: [
      "Guess the winner without testing",
      "Identify the problem and think of possible solutions",
      "Throw the ice cube outside",
      "Build one design and never change it",
    ],
    answer: "Identify the problem and think of possible solutions",
  },
  {
    _cat: "engineering",
    question:
      "After testing a paper-cup phone that doesn't work, an engineer should…",
    choices: [
      "Give up",
      "Try improving the design and testing again",
      "Blame the string",
      "Never share the results",
    ],
    answer: "Try improving the design and testing again",
  },
  {
    _cat: "data",
    passage:
      "A picture graph shows books read this month. Each 📕 = 2 books. Ana has 4 book icons.",
    question: "How many books did Ana read?",
    choices: ["4", "6", "8", "16"],
    answer: "8",
  },
  {
    _cat: "data",
    passage:
      "A bar graph shows how many students chose recess games. Tag = 10, Kickball = 6, Soccer = 8, Freeze = 4.",
    question: "Which game got the FEWEST votes?",
    choices: ["Tag", "Kickball", "Soccer", "Freeze"],
    answer: "Freeze",
  },
];

/** Planets, moons, missions — curiosity hooks */
export const planetaryWonderGrade3 = [
  {
    _cat: "sun",
    passage:
      "The Sun is a star at the center of our solar system. Its gravity holds the planets in orbit.",
    question: "The Sun is BEST described as…",
    choices: ["A planet", "A star", "A moon", "An asteroid"],
    answer: "A star",
  },
  {
    _cat: "sun",
    question: "Without the Sun's light and warmth, Earth would MOST likely be…",
    choices: [
      "Much colder and darker",
      "Exactly the same",
      "Made of cheese",
      "Closer to Jupiter",
    ],
    answer: "Much colder and darker",
  },
  {
    _cat: "inner",
    question:
      "Which inner planet is closest to the Sun and has almost no atmosphere?",
    choices: ["Venus", "Mercury", "Earth", "Mars"],
    answer: "Mercury",
  },
  {
    _cat: "inner",
    question:
      "Which planet is the only one known to have large amounts of liquid water on its surface?",
    choices: ["Mars", "Venus", "Earth", "Mercury"],
    answer: "Earth",
  },
  {
    _cat: "earth_moon",
    question: "About how long does it take the Moon to orbit Earth once?",
    choices: ["About 1 day", "About 1 month", "About 1 year", "About 10 years"],
    answer: "About 1 month",
  },
  {
    _cat: "earth_moon",
    question:
      "We see different Moon phases because we see different amounts of the Moon's…",
    choices: ["Lit side from Earth", "Rings", "Oceans", "Volcanoes"],
    answer: "Lit side from Earth",
  },
  {
    _cat: "mars",
    passage:
      "The Curiosity rover has explored Mars and drilled into rocks to study their chemistry.",
    question: "Rovers on Mars send data back to Earth using…",
    choices: [
      "Radio signals to antennas on Earth",
      "Paper letters",
      "Carrier pigeons",
      "Ocean cables",
    ],
    answer: "Radio signals to antennas on Earth",
  },
  {
    _cat: "mars",
    question: "Mars appears reddish partly because its soil contains a lot of…",
    choices: ["Iron oxide (rusty dust)", "Gold", "Ice only", "Grass"],
    answer: "Iron oxide (rusty dust)",
  },
  {
    _cat: "jup_sat",
    question:
      "Jupiter is the largest planet in our solar system. It is MOSTLY made of…",
    choices: [
      "Rock and metal only",
      "Hydrogen and helium gases",
      "Solid ice cubes",
      "Liquid water only",
    ],
    answer: "Hydrogen and helium gases",
  },
  {
    _cat: "jup_sat",
    question: "Saturn is famous for its bright…",
    choices: [
      "Rings of ice and rock",
      "Oceans of lava",
      "Two moons only",
      "Purple grass",
    ],
    answer: "Rings of ice and rock",
  },
  {
    _cat: "ice_giants",
    question:
      "Uranus spins on its side compared with most planets. Uranus is an…",
    choices: ["Ice giant", "Inner rocky planet", "Star", "Asteroid belt"],
    answer: "Ice giant",
  },
  {
    _cat: "ice_giants",
    question:
      "Neptune is so far from the Sun that one Neptune year lasts about…",
    choices: [
      "1 Earth day",
      "1 Earth month",
      "165 Earth years",
      "4 Earth years",
    ],
    answer: "165 Earth years",
  },
  {
    _cat: "small_bodies",
    question:
      "A rocky object orbiting the Sun that is too small to be a planet is often called an…",
    choices: ["Asteroid", "Comet tail only", "Galaxy", "Nebula"],
    answer: "Asteroid",
  },
  {
    _cat: "small_bodies",
    question:
      "When a meteoroid enters Earth's atmosphere and burns up, the streak of light is called a…",
    choices: ["Meteor (shooting star)", "Comet", "Planet", "Moon phase"],
    answer: "Meteor (shooting star)",
  },
  {
    _cat: "people_space",
    question: "Astronauts train in large pools to practice working in…",
    choices: [
      "Microgravity-like conditions underwater",
      "Desert sandstorms",
      "Deep caves only",
      "Shopping malls",
    ],
    answer: "Microgravity-like conditions underwater",
  },
  {
    _cat: "people_space",
    question:
      "The first person to walk on the Moon was an American astronaut named…",
    choices: ["Neil Armstrong", "Sally Ride", "Galileo", "Yuri Gagarin"],
    answer: "Neil Armstrong",
  },
  {
    _cat: "tools",
    question: "Scientists use a spectroscope to study…",
    choices: [
      "Light from stars and what it tells about chemicals",
      "Only shoe sizes",
      "Ocean tides only",
      "Dinosaur footprints only",
    ],
    answer: "Light from stars and what it tells about chemicals",
  },
  {
    _cat: "tools",
    question: "The James Webb Space Telescope uses a large mirror to collect…",
    choices: [
      "Infrared light from very distant objects",
      "Only rain on Earth",
      "Fish in the ocean",
      "Sound from Jupiter",
    ],
    answer: "Infrared light from very distant objects",
  },
  {
    _cat: "scale",
    question: "Which is larger: Earth's diameter or the Moon's diameter?",
    choices: [
      "Earth's",
      "The Moon's",
      "They are exactly equal",
      "Neither has a diameter",
    ],
    answer: "Earth's",
  },
  {
    _cat: "scale",
    question: "Our solar system is located inside the…",
    choices: [
      "Milky Way galaxy",
      "Andromeda galaxy only",
      "Sun itself",
      "A single comet",
    ],
    answer: "Milky Way galaxy",
  },
];

/** Geography curiosity: world regions, US & Tennessee */
export const geographyExplorersGrade3 = [
  {
    _cat: "maps",
    question: "A map SCALE tells you how…",
    choices: [
      "Distance on the map compares to real distance on the ground",
      "Old the map is",
      "Loud the map is",
      "Heavy the map is",
    ],
    answer: "Distance on the map compares to real distance on the ground",
  },
  {
    _cat: "maps",
    passage:
      "A political map of the United States shows colored blocks with names like Tennessee, Kentucky, and Georgia inside them.",
    question: "A political map mostly shows…",
    choices: [
      "Countries, states, and borders",
      "Only mountains",
      "Only rain patterns",
      "Only oceans",
    ],
    answer: "Countries, states, and borders",
  },
  {
    _cat: "landforms",
    question:
      "The Appalachian Mountains stretch across the eastern United States, including Tennessee. Mountains are formed over MILLIONS of years by…",
    choices: [
      "Slow movements of Earth's crust",
      "One quick sand storm",
      "A single lightning strike",
      "Ocean waves in one day",
    ],
    answer: "Slow movements of Earth's crust",
  },
  {
    _cat: "landforms",
    question: "The Grand Canyon in Arizona was carved out mostly by the…",
    choices: ["Colorado River", "Wind alone", "One big rain", "A volcano"],
    answer: "Colorado River",
  },
  {
    _cat: "water",
    passage:
      "The Great Lakes lie between the United States and Canada. Together they hold huge amounts of freshwater.",
    question: "The Great Lakes are examples of…",
    choices: [
      "Large freshwater lakes",
      "Salty oceans",
      "Man-made pools",
      "Underground rivers",
    ],
    answer: "Large freshwater lakes",
  },
  {
    _cat: "water",
    question: "A river usually flows from higher land toward…",
    choices: [
      "Lower land like a sea or a larger river",
      "Straight up a mountain",
      "The center of the Earth",
      "The Moon",
    ],
    answer: "Lower land like a sea or a larger river",
  },
  {
    _cat: "US",
    question:
      "The Mississippi River flows through the middle of the United States and empties into the…",
    choices: [
      "Gulf of Mexico",
      "Pacific Ocean",
      "Great Salt Lake",
      "Hudson Bay",
    ],
    answer: "Gulf of Mexico",
  },
  {
    _cat: "US",
    question:
      "Which large U.S. mountain range runs along the western side of North America?",
    choices: ["Rocky Mountains", "Appalachian Mountains", "Alps", "Andes"],
    answer: "Rocky Mountains",
  },
  {
    _cat: "TN",
    passage:
      "Tennessee has three grand divisions: East, Middle, and West. Each has a different landscape and history.",
    question: "Which is the CORRECT set of Tennessee's three grand divisions?",
    choices: [
      "North, South, and Central",
      "East, Middle, and West",
      "Upper, Lower, and Coastal",
      "Alpha, Beta, and Gamma",
    ],
    answer: "East, Middle, and West",
  },
  {
    _cat: "TN",
    question:
      "Which of these Tennessee cities sits along the Mississippi River?",
    choices: ["Nashville", "Knoxville", "Memphis", "Chattanooga"],
    answer: "Memphis",
  },
  {
    _cat: "poles",
    question: "The Arctic and Antarctica are cold because they are…",
    choices: [
      "Near the North and South Poles, far from the equator",
      "Very close to the Sun",
      "Underground",
      "In deep caves",
    ],
    answer: "Near the North and South Poles, far from the equator",
  },
  {
    _cat: "climate",
    passage:
      "Places near the equator get direct sunlight all year, so they stay warm. Places far from the equator get slanted sunlight, so they stay cooler.",
    question: "This shows how a place's LOCATION affects its…",
    choices: ["Climate", "Time zone only", "Language only", "Color"],
    answer: "Climate",
  },
  {
    _cat: "people_place",
    passage:
      "In Middle Tennessee, farmers grow soybeans, corn, and tobacco. In the Great Smoky Mountains, many families work in tourism.",
    question: "This shows how geography can affect…",
    choices: [
      "What jobs people do in different regions",
      "The colors of houses",
      "How many stars are in the sky",
      "Bedtimes",
    ],
    answer: "What jobs people do in different regions",
  },
  {
    _cat: "people_place",
    question:
      "Long before European settlers, the Cherokee lived in what is now East Tennessee. The Cherokee are…",
    choices: [
      "A Native American people",
      "European explorers",
      "A modern country",
      "Astronauts",
    ],
    answer: "A Native American people",
  },
  {
    _cat: "resources",
    question: "Which of these is a NATURAL RESOURCE from Tennessee's forests?",
    choices: ["Timber (wood)", "Rubber toys", "Plastic bags", "Video games"],
    answer: "Timber (wood)",
  },
  {
    _cat: "conservation",
    passage:
      "Rangers plant trees along a creek in a Tennessee state park. Roots help hold the soil in place when it rains.",
    question: "The rangers are practicing…",
    choices: [
      "Conservation (protecting natural resources)",
      "Space travel",
      "Pollution",
      "Weather forecasting",
    ],
    answer: "Conservation (protecting natural resources)",
  },
];

/** "Wow" STEM + world facts */
export const stemWowFactsCuriosity = [
  {
    _cat: "animals",
    question: "How many legs does a spider have?",
    choices: ["Six", "Eight", "Ten", "Two"],
    answer: "Eight",
  },
  {
    _cat: "animals",
    question:
      "Which mammal is the FASTEST on land, reaching speeds near 70 mph?",
    choices: ["Tortoise", "Cheetah", "House cat", "Sloth"],
    answer: "Cheetah",
  },
  {
    _cat: "human_body",
    question: "Which organ pumps blood through your body?",
    choices: ["Lungs", "Heart", "Stomach", "Skin only"],
    answer: "Heart",
  },
  {
    _cat: "human_body",
    question: "About how many bones does an adult human have?",
    choices: ["About 20", "About 206", "About 1,000", "About 5"],
    answer: "About 206",
  },
  {
    _cat: "ocean",
    question: "Which ocean is the largest on Earth?",
    choices: ["Atlantic", "Pacific", "Arctic only", "Indian only"],
    answer: "Pacific",
  },
  {
    _cat: "ocean",
    question: "Coral reefs are built mostly by tiny animals called…",
    choices: [
      "Corals (coral polyps)",
      "Penguins",
      "Sharks only",
      "Seaweed only",
    ],
    answer: "Corals (coral polyps)",
  },
  {
    _cat: "sky_weather",
    passage:
      "Hailstones can form when strong updrafts carry raindrops high into freezing air.",
    question: "Hail is made of…",
    choices: ["Ice", "Fire", "Sand only", "Cotton"],
    answer: "Ice",
  },
  {
    _cat: "sky_weather",
    question: "What causes thunder?",
    choices: [
      "Lightning heats air so fast it expands with a boom",
      "Clouds rubbing together like shoes",
      "The Moon falling",
      "Birds flapping together",
    ],
    answer: "Lightning heats air so fast it expands with a boom",
  },
  {
    _cat: "space_tech",
    question: "Weather satellites orbiting Earth help forecasters track…",
    choices: [
      "Storms and cloud patterns",
      "Only dinosaur bones",
      "Only subway maps",
      "Only library books",
    ],
    answer: "Storms and cloud patterns",
  },
  {
    _cat: "space_tech",
    question: "The International Space Station travels around Earth at about…",
    choices: ["5 mph", "17,500 mph", "The speed of light", "1 mph"],
    answer: "17,500 mph",
  },
  {
    _cat: "materials",
    question:
      "Diamond is one of the hardest natural materials because of how its…",
    choices: [
      "Atoms are bonded tightly",
      "Color is blue",
      "Size is always tiny",
      "Weight is zero",
    ],
    answer: "Atoms are bonded tightly",
  },
  {
    _cat: "materials",
    question: "Aluminum cans are often recycled to make…",
    choices: [
      "New cans and products",
      "Only glass",
      "Only water",
      "Only clouds",
    ],
    answer: "New cans and products",
  },
  {
    _cat: "speed_records",
    question: "Sound travels faster in which medium?",
    choices: [
      "Air",
      "Water or steel (denser materials)",
      "Empty vacuum",
      "Outer space only",
    ],
    answer: "Water or steel (denser materials)",
  },
  {
    _cat: "tiny_big",
    question:
      "A single grain of sand is tiny, but beaches are huge. This shows how small parts can…",
    choices: [
      "Build up large features over time",
      "Never add up",
      "Only exist in space",
      "Disappear instantly",
    ],
    answer: "Build up large features over time",
  },
  {
    _cat: "history_sci",
    question:
      "Marie Curie studied radioactivity and won Nobel Prizes in different sciences. She worked in…",
    choices: [
      "Chemistry and physics",
      "Only cooking",
      "Only map drawing",
      "Only sports",
    ],
    answer: "Chemistry and physics",
  },
  {
    _cat: "history_sci",
    question:
      "Alexander Graham Bell is famous for inventing an early practical…",
    choices: ["Telephone", "Bicycle", "Telescope", "Submarine only"],
    answer: "Telephone",
  },
  {
    _cat: "water_earth",
    question: "Most of Earth's freshwater is locked in…",
    choices: ["Ice caps and glaciers", "Desert sand", "The Sun", "Volcanoes"],
    answer: "Ice caps and glaciers",
  },
  {
    _cat: "water_earth",
    question: "The Amazon River basin contains the world's largest tropical…",
    choices: ["Rainforest", "Desert", "Glacier", "Coral reef"],
    answer: "Rainforest",
  },
];

/** Paleontology as science: fossils, evidence, birds */
export const dinoStemFossils = [
  {
    _cat: "fossils",
    question: "A fossilized leaf pressed flat in rock is an example of a…",
    choices: ["Body fossil", "Weather report", "Living animal", "Comet"],
    answer: "Body fossil",
  },
  {
    _cat: "fossils",
    question: "Fossilized animal droppings (scat) are a type of…",
    choices: ["Trace fossil", "Igneous rock", "Meteorite", "Crystal ball"],
    answer: "Trace fossil",
  },
  {
    _cat: "bones",
    question:
      "Scientists study the shape of fossil teeth to learn what an animal…",
    choices: ["Ate", "Wore as hats", "Texted", "Painted"],
    answer: "Ate",
  },
  {
    _cat: "bones",
    question:
      "A complete dinosaur skeleton displayed in a museum is usually a…",
    choices: [
      "Cast or assembled bones from fossils",
      "Living dinosaur",
      "Plastic toy only",
      "Meteor",
    ],
    answer: "Cast or assembled bones from fossils",
  },
  {
    _cat: "time_scale",
    question: "The Mesozoic Era is often called the Age of…",
    choices: ["Dinosaurs", "Humans only", "Smartphones", "Ice ages only"],
    answer: "Dinosaurs",
  },
  {
    _cat: "time_scale",
    question:
      "Which came first: flowering plants widespread on land, or most dinosaurs?",
    choices: [
      "Most dinosaurs (before widespread flowers)",
      "Flowering plants first",
      "They started the same day",
      "Neither ever existed",
    ],
    answer: "Most dinosaurs (before widespread flowers)",
  },
  {
    _cat: "classification",
    question: "Stegosaurus is a dinosaur with plates on its back. It was a…",
    choices: ["Plant-eating dinosaur", "Fish", "Bird", "Insect"],
    answer: "Plant-eating dinosaur",
  },
  {
    _cat: "classification",
    question: "Ichthyosaurs looked like dolphins but were…",
    choices: [
      "Marine reptiles, not dinosaurs",
      "Modern birds",
      "Flowers",
      "Mammals like whales",
    ],
    answer: "Marine reptiles, not dinosaurs",
  },
  {
    _cat: "birds_link",
    question:
      "Archaeopteryx fossils show feathers AND teeth, linking birds to…",
    choices: ["Theropod dinosaurs", "Fish only", "Frogs", "Trees"],
    answer: "Theropod dinosaurs",
  },
  {
    _cat: "birds_link",
    question: "Modern birds have hollow bones, which helps them…",
    choices: [
      "Fly more easily",
      "Swim underground",
      "Grow teeth",
      "Live without air",
    ],
    answer: "Fly more easily",
  },
  {
    _cat: "digging",
    question: "Paleontologists use small brushes and picks to…",
    choices: [
      "Remove rock carefully around fragile fossils",
      "Cook meals",
      "Paint the sky",
      "Measure wind only",
    ],
    answer: "Remove rock carefully around fragile fossils",
  },
  {
    _cat: "digging",
    question: "GPS and detailed notes at a dig site help scientists record…",
    choices: [
      "Exactly where each fossil was found",
      "Only lunch menus",
      "Tomorrow's lottery",
      "Only cloud colors",
    ],
    answer: "Exactly where each fossil was found",
  },
  {
    _cat: "extinction",
    question:
      "After non-avian dinosaurs died out, which group of animals became more dominant on land?",
    choices: ["Mammals", "Trilobites", "Dinosaurs again", "None ever lived"],
    answer: "Mammals",
  },
  {
    _cat: "extinction",
    question:
      "Volcanic eruptions and climate change may have ALSO stressed ecosystems at the end of the…",
    choices: [
      "Cretaceous Period",
      "Triassic only",
      "Yesterday",
      "Future century",
    ],
    answer: "Cretaceous Period",
  },
  {
    _cat: "modern_science",
    question: "3D printing from CT scans lets scientists share accurate…",
    choices: [
      "Copies of fossil bones for study",
      "Only pizza recipes",
      "Only weather maps",
      "Only shoe sizes",
    ],
    answer: "Copies of fossil bones for study",
  },
  {
    _cat: "modern_science",
    question:
      "Comparing fossil sizes in the same rock layer helps scientists estimate…",
    choices: [
      "How old the layer is and how animals lived together",
      "Next week's homework",
      "Phone numbers",
      "Only star colors",
    ],
    answer: "How old the layer is and how animals lived together",
  },
];

/** Math used in STEM: graphs, measurement, area/perimeter, patterns (TN 3.MD, 3.OA, 3.G) */
export const mathStemDataGrade3 = [
  {
    _cat: "graph",
    passage:
      "A bar graph shows books read this month: Diego 8, Mia 5, Amir 3, Riley 6.",
    question: "Who read the MOST books?",
    choices: ["Diego", "Mia", "Amir", "Riley"],
    answer: "Diego",
  },
  {
    _cat: "graph",
    passage:
      "A picture graph shows soccer goals scored, where each ⚽ stands for 4 goals. The Lions have 3 ⚽ next to their name.",
    question: "How many goals did the Lions score?",
    choices: ["3", "7", "12", "43"],
    answer: "12",
  },
  {
    _cat: "measure",
    question:
      "A pencil is about 18 centimeters long. Which everyday item is closest to 1 centimeter wide?",
    choices: [
      "A car tire",
      "The width of a fingernail",
      "A soccer field",
      "A doorway",
    ],
    answer: "The width of a fingernail",
  },
  {
    _cat: "measure",
    question:
      "A small bottle of juice holds about 250 milliliters. Roughly how many bottles fit in a 1 LITER pitcher?",
    choices: ["1", "2", "4", "10"],
    answer: "4",
  },
  {
    _cat: "time_calc",
    passage: "A math class starts at 10:35 a.m. and lasts 40 minutes.",
    question: "What time does the math class end?",
    choices: ["10:75 a.m.", "11:05 a.m.", "11:15 a.m.", "11:35 a.m."],
    answer: "11:15 a.m.",
  },
  {
    _cat: "time_calc",
    passage: "A movie starts at 6:20 p.m. and ends at 8:05 p.m.",
    question: "How long is the movie?",
    choices: [
      "45 minutes",
      "1 hour 25 minutes",
      "1 hour 45 minutes",
      "2 hours 45 minutes",
    ],
    answer: "1 hour 45 minutes",
  },
  {
    _cat: "array",
    passage:
      "A robotics team lines up chairs in 4 rows with 6 chairs in each row for a science fair.",
    question: "How many chairs are lined up in all?",
    choices: ["10", "18", "24", "46"],
    answer: "24",
  },
  {
    _cat: "array",
    question:
      "Which multiplication fact matches an array with 7 rows and 3 stars per row?",
    choices: ["7 + 3 = 10", "7 × 3 = 21", "3 × 3 = 9", "7 × 7 = 49"],
    answer: "7 × 3 = 21",
  },
  {
    _cat: "perimeter",
    question:
      "A rectangular garden bed is 8 ft long and 3 ft wide. What is its PERIMETER?",
    choices: ["11 ft", "22 ft", "24 ft", "48 ft"],
    answer: "22 ft",
  },
  {
    _cat: "perimeter",
    question:
      "A rectangle has an AREA of 20 square units. Its length is 5 units. What is its width?",
    choices: ["2 units", "4 units", "5 units", "15 units"],
    answer: "4 units",
  },
  {
    _cat: "money_data",
    passage:
      "A school store sells pencils for $1, notebooks for $3, and stickers for $2.",
    question: "Ana buys 2 pencils and 1 notebook. How much does she spend?",
    choices: ["$3", "$4", "$5", "$6"],
    answer: "$5",
  },
  {
    _cat: "money_data",
    passage:
      "A snack bar sold apples ($1), yogurts ($2), and muffins ($3). Data shows they sold 5 apples, 3 yogurts, and 2 muffins today.",
    question: "How much money did the snack bar collect today?",
    choices: ["$10", "$15", "$17", "$20"],
    answer: "$17",
  },
  {
    _cat: "compare",
    question: "Which comparison is TRUE?",
    choices: ["7 × 8 = 54", "9 × 6 > 8 × 7", "5 × 4 = 4 × 5", "3 × 3 > 4 × 4"],
    answer: "5 × 4 = 4 × 5",
  },
  {
    _cat: "fraction_visual",
    passage: "A pizza is cut into 8 equal slices. Sam eats 3 slices.",
    question: "What fraction of the pizza did Sam eat?",
    choices: ["3/8", "3/5", "5/8", "8/3"],
    answer: "3/8",
  },
  {
    _cat: "pattern",
    question: "What is the NEXT number in this pattern? 5, 10, 15, 20, __",
    choices: ["21", "22", "25", "30"],
    answer: "25",
  },
  {
    _cat: "pattern",
    question: "Which rule describes this pattern? 3, 6, 12, 24, __",
    choices: [
      "Add 3 each time",
      "Multiply by 2 each time",
      "Subtract 3 each time",
      "Divide by 2 each time",
    ],
    answer: "Multiply by 2 each time",
  },
  {
    _cat: "tools",
    question: "Which tool would BEST measure how heavy a science-fair rock is?",
    choices: ["Ruler", "Balance scale", "Clock", "Thermometer"],
    answer: "Balance scale",
  },
  {
    _cat: "tools",
    question: "Which tool would BEST measure how hot the classroom is?",
    choices: ["Thermometer", "Rain gauge", "Meter stick", "Stopwatch"],
    answer: "Thermometer",
  },
];
