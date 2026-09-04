import {
  BadgeCheck,
  Binoculars,
  BrainCircuit,
  Coins,
  Compass,
  CookingPot,
  Flag,
  Handshake,
  HandHeart,
  HeartHandshake,
  Heart,
  Leaf,
  Map,
  Mountain,
  Navigation,
  PersonStanding,
  ShieldCheck,
  Sparkles,
  TentTree,
  Users,
  Waypoints,
} from "lucide-react";

export const SCOUT_IMAGE_COUNT = 50;

export const getScoutImage = (number, extension = "png") =>
  encodeURI(`/Scout Guide pic/ScoutGuide${number}.${extension}`);

export const getScoutImageCandidates = (number) => [
  getScoutImage(number, "png"),
  getScoutImage(number, "jpg"),
  getScoutImage(number, "jpeg"),
  getScoutImage(number, "JPG"),
  getScoutImage(number, "JPEG"),
];

export const galleryImages = Array.from(
  { length: SCOUT_IMAGE_COUNT },
  (_, index) => ({
    id: index + 1,
    candidates: getScoutImageCandidates(index + 1),
    alt: `Scout and Guide learning moment ${index + 1} at Shree Ram Public School`,
  }),
);

export const heroSlides = [
  {
    id: "mountain-campfire",
    candidates: [
      encodeURI("/Scout Guide pic/Scouts Around a Mountain Campfire.png"),
    ],
    alt: "Scouts gathered around a mountain campfire",
  },
  {
    id: "mountain-campfire-one",
    candidates: [
      encodeURI("/Scout Guide pic/Scouts Around a Mountain Campfire1.png"),
    ],
    alt: "Scouts sharing an outdoor campfire experience in the mountains",
  },
  {
    id: "planting-hope-together",
    candidates: [
      encodeURI("/Scout Guide pic/Scouts Planting Hope Together.png"),
    ],
    alt: "Scouts planting hope together through environmental service",
  },
  {
    id: "saluting-beneath-indian-flag",
    candidates: [
      encodeURI("/Scout Guide pic/Scouts Saluting Beneath the Indian Flag.png"),
    ],
    alt: "Scouts saluting beneath the Indian flag during a patriotic ceremony",
  },
  {
    id: "indian-scout-parade-sunrise",
    candidates: [
      encodeURI("/Scout Guide pic/Indian Scout Parade at Sunrise.png"),
    ],
    alt: "Indian Scouts participating in a parade at sunrise",
  },
];

export const aims = [
  {
    title: "Character Building",
    text: "Integrity, discipline and responsibility.",
    icon: ShieldCheck,
    imageId: 14,
  },
  {
    title: "Leadership",
    text: "Learning to lead while respecting and supporting others.",
    icon: Flag,
    imageId: 13,
  },
  {
    title: "Service",
    text: "Building a lifelong habit of helping people and communities.",
    icon: HandHeart,
    imageId: 9,
  },
  {
    title: "Self-Reliance",
    text: "Developing practical skills, confidence and problem-solving ability.",
    icon: Compass,
    imageId: 42,
  },
  {
    title: "Teamwork",
    text: "Working through patrols and learning cooperation.",
    icon: Users,
    imageId: 8,
  },
  {
    title: "Responsible Citizenship",
    text: "Understanding duties towards society, country and environment.",
    icon: BadgeCheck,
    imageId: 49,
  },
];

export const principles = [
  {
    number: "01",
    title: "Duty to God / Dharma",
    text: "Living by personal values, spiritual principles and moral responsibility, with respect for every belief.",
    icon: Sparkles,
    imageId: 12,
  },
  {
    number: "02",
    title: "Duty to Others",
    text: "Serving country and community while promoting peace, cooperation, human dignity and care for nature.",
    icon: HeartHandshake,
    imageId: 15,
  },
  {
    number: "03",
    title: "Duty to Self",
    text: "Taking responsibility for personal growth, discipline, knowledge, wellbeing and good judgement.",
    icon: PersonStanding,
    imageId: 17,
  },
];

export const historyEvents = [
  {
    year: "1907",
    title: "The movement begins",
    text: "Lord Robert Baden-Powell conducted an experimental camp on Brownsea Island in England, helping begin the modern Scout Movement.",
  },
  {
    year: "1909",
    title: "Scouting comes to India",
    text: "Captain T. H. Baker established an early Scout troop in Bangalore, marking the organised beginning of Scouting in India.",
  },
  {
    year: "1910",
    title: "Guiding takes shape",
    text: "The movement for girls developed as Scouting grew, supported by Agnes Baden-Powell.",
  },
  {
    year: "1911",
    title: "An early Guide Company",
    text: "One of India's first Guide Companies was established at Jabalpur.",
  },
  {
    year: "Indian movement",
    title: "A movement for Indian youth",
    text: "Leaders including Pandit Madan Mohan Malaviya, Dr. H. N. Kunzru, Pandit Sri Ram Bajpai, Dr. Tara Chand and Maulana Abul Kalam Azad helped broaden and unify the movement.",
  },
  {
    year: "7 Nov 1950",
    title: "The Bharat Scouts and Guides",
    text: "Different Scout associations were unified under the name The Bharat Scouts and Guides.",
  },
  {
    year: "15 Aug 1951",
    title: "Guides join the unified organisation",
    text: "The Girl Guides Association formally joined The Bharat Scouts and Guides.",
  },
  {
    year: "Today",
    title: "Prepared for tomorrow",
    text: "BSG continues as India's national Scout and Guide movement, fostering character, citizenship, leadership, service and youth development.",
  },
];

export const ageGroups = [
  {
    step: "01",
    title: "Bunnies",
    age: "3–5 years",
    motto: "Keep Smiling",
    text: "Joy, social development, basic habits and group participation.",
    icon: Sparkles,
    imageId: 30,
  },
  {
    step: "02",
    title: "Cubs & Bulbuls",
    age: "5+–10 years",
    motto: "Do Your Best",
    text: "Good habits, teamwork, creativity, outdoor learning and responsibility.",
    icon: Users,
    imageId: 29,
  },
  {
    step: "03",
    title: "Scouts & Guides",
    age: "10+–17 years",
    motto: "Be Prepared",
    text: "Leadership, outdoor activities, service, practical skills, discipline and self-reliance.",
    icon: Compass,
    imageId: 31,
  },
  {
    step: "04",
    title: "Rovers & Rangers",
    age: "15+–25 years",
    motto: "Service",
    text: "Leadership, advanced community service, responsibility and active citizenship.",
    icon: HandHeart,
    imageId: 32,
  },
];

export const methods = [
  ["Promise & Law", ShieldCheck],
  ["Learning by Doing", BrainCircuit],
  ["Patrol System", Users],
  ["Adult Guidance", HandHeart],
  ["Progressive Responsibility", Waypoints],
  ["Outdoor Experiences", TentTree],
  ["Community Service", HeartHandshake],
  ["Personal Development", Sparkles],
];

export const lawValues = [
  "Trustworthiness",
  "Loyalty",
  "Friendship",
  "Courtesy",
  "Love for nature",
  "Discipline",
  "Courage",
  "Thrift",
  "Purity of thought, word and deed",
];

export const scoutValues = [
  {
    number: "01",
    title: "Trustworthiness",
    description: "Being honest, reliable and dependable in every situation.",
    image: "/Scout Guide pic/01_Trustworthiness.jpg",
    alt: "Scout demonstrating trustworthiness and responsibility",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Loyalty",
    description:
      "Being loyal to family, friends, school, society and the nation.",
    image: "/Scout Guide pic/02_Loyalty.jpg",
    alt: "Scouts learning teamwork and loyalty",
    icon: Handshake,
  },
  {
    number: "03",
    title: "Friendship",
    description:
      "Building genuine friendship, cooperation and care for others.",
    image: "/Scout Guide pic/03_Friendship.jpg",
    alt: "Scouts sharing friendship and cooperation",
    icon: Users,
  },
  {
    number: "04",
    title: "Courtesy",
    description: "Being polite, respectful and considerate towards everyone.",
    image: "/Scout Guide pic/04_Courtesy.jpg",
    alt: "Scout showing courtesy and respect",
    icon: Heart,
  },
  {
    number: "05",
    title: "Love for Nature",
    description: "Respecting, protecting and caring for the natural world.",
    image: "/Scout Guide pic/05_LoveForNature.jpg",
    alt: "Students participating in environmental care activity",
    icon: Leaf,
  },
  {
    number: "06",
    title: "Discipline",
    description:
      "Following rules, maintaining self-control and doing what is right.",
    image: "/Scout Guide pic/06_Discipline.jpg",
    alt: "Scouts practising discipline and responsibility",
    icon: BadgeCheck,
  },
  {
    number: "07",
    title: "Courage",
    description:
      "Facing challenges with confidence, determination and responsibility.",
    image: "/Scout Guide pic/07_Courage.jpg",
    alt: "Scout facing a challenge with courage",
    icon: Mountain,
  },
  {
    number: "08",
    title: "Thrift",
    description: "Using time, money and resources wisely while avoiding waste.",
    image: "/Scout Guide pic/08_Thrift.jpg",
    alt: "Scout learning to use resources wisely",
    icon: Coins,
  },
  {
    number: "09",
    title: "Purity of Thought, Word and Deed",
    description:
      "Keeping thoughts, words and actions kind, clean and positive.",
    image: "/Scout Guide pic/09_PurityOfThoughtWordAndDeed.jpg",
    alt: "Scout values represented through kind and positive actions",
    icon: Sparkles,
  },
];

export const skills = [
  [
    "First Aid",
    "Emergency preparedness and responsible response.",
    HandHeart,
    18,
  ],
  [
    "Knots",
    "Rope work, practical technique and problem solving.",
    Waypoints,
    19,
  ],
  [
    "Pioneering",
    "Structures, engineering skills and team activity.",
    Waypoints,
    20,
  ],
  [
    "Map Reading",
    "Direction, observation, map reading and route planning.",
    Map,
    21,
  ],
  [
    "Hiking",
    "Endurance, exploration and appreciation of nature.",
    Mountain,
    22,
  ],
  ["Trekking", "Adventure, resilience and outdoor education.", Mountain, 23],
  [
    "Camp Cooking",
    "Basic camp cooking and independent living skills.",
    CookingPot,
    24,
  ],
  [
    "Shelter Making",
    "Resourcefulness and outdoor survival fundamentals.",
    TentTree,
    25,
  ],
  ["Signalling", "Clear communication and coordination skills.", Flag, 26],
  [
    "Life Skills / Compass",
    "Navigation, observation and self-reliance.",
    Compass,
    42,
  ],
  [
    "Rescue",
    "Emergency response, awareness and community support.",
    ShieldCheck,
    43,
  ],
];

export const activities = [
  ["Flag Ceremony", 37],
  ["March Past", 3],
  ["Drill", 27],
  ["Camping", 6],
  ["Campfire", 7],
  ["Team Games", 40],
  ["Cultural Programme", 38],
  ["National Integration", 39],
  ["Patrol System", 28],
  ["Indoor Training", 41],
];

export const outcomes = [
  ["Confidence", "Trusting one's preparation and judgement.", BadgeCheck],
  ["Discipline", "Turning good habits into dependable action.", ShieldCheck],
  ["Leadership", "Guiding a team with empathy and purpose.", Flag],
  ["Courage", "Meeting uncertainty with calm and resilience.", Mountain],
  [
    "Social Responsibility",
    "Seeing service as part of citizenship.",
    HeartHandshake,
  ],
  ["Team Spirit", "Achieving more through cooperation.", Users],
  ["Problem Solving", "Thinking practically in real situations.", BrainCircuit],
  ["Self-Reliance", "Taking initiative with confidence.", Navigation],
];

export const valueCounters = [
  "Discipline",
  "Service",
  "Leadership",
  "Adventure",
];

export const storyImageIds = [2, 5, 7, 13, 18, 20, 23, 34, 37, 39, 45, 46];

export const serviceStories = [
  [
    "Community Service",
    "Putting care into action for people and places we share.",
    15,
  ],
  [
    "Tree Plantation",
    "Growing a practical sense of responsibility for nature.",
    16,
  ],
  [
    "Environment",
    "Choosing habits that protect a cleaner, greener future.",
    17,
  ],
  [
    "Social Awareness",
    "Speaking up for thoughtful, responsible citizenship.",
    44,
  ],
  [
    "Cleanliness Drive",
    "Working together to make shared spaces healthier.",
    45,
  ],
  [
    "Community Outreach",
    "Meeting service with respect, presence and kindness.",
    46,
  ],
  [
    "Empathy & Care",
    "Learning that service begins with noticing another person.",
    47,
  ],
];

export const adventureImageIds = [10, 22, 23, 33, 34, 35, 36];
