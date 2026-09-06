import {
  BadgeCheck,
  BrainCircuit,
  Coins,
  Compass,
  CookingPot,
  Flag,
  Handshake,
  HandHeart,
  Heart,
  HeartHandshake,
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

const hsgaImages = [
  "HSGA_Hero_FlagCeremony.png",
  "HSGA_Hero_AwardStage.png",
  "HSGA_Community_TreePlantation.png",
  "HSGA_Drill_ParadeFormation.png",
  "HSGA_FirstAid_RescueTraining.png",
  "HSGA_CubBulbul_Certificates.png",
  "HSGA_PatrolSystem_MapPlanning.png",
  "HSGA_RoverRanger_LeadershipAward.png",
  "HSGA_Promise_PatrioticPledge.png",
  "HSGA_Award_GroupPortrait.png",
];

export const SCOUT_IMAGE_COUNT = hsgaImages.length;
export const getScoutImage = (number) =>
  encodeURI(`/Scout Guide pic/${hsgaImages[(number - 1) % hsgaImages.length]}`);
export const getScoutImageCandidates = (number) => [getScoutImage(number)];
export const galleryImages = hsgaImages.map((_, index) => ({
  id: index + 1,
  candidates: getScoutImageCandidates(index + 1),
  alt: `Hindustan Scouts and Guides activity ${index + 1} at Shree Ram Public School`,
}));

export const heroSlides = [
  {
    id: "flag-ceremony",
    candidates: [getScoutImage(1)],
    alt: "Hindustan Scouts and Guides taking part in a flag ceremony",
  },
  {
    id: "award-stage",
    candidates: [getScoutImage(2)],
    alt: "Hindustan Scouts and Guides receiving awards on stage",
  },
  {
    id: "tree-plantation",
    candidates: [getScoutImage(3)],
    alt: "Hindustan Scouts and Guides participating in tree plantation",
  },
  {
    id: "drill-parade",
    candidates: [getScoutImage(4)],
    alt: "Hindustan Scouts and Guides in drill and parade formation",
  },
  {
    id: "promise-pledge",
    candidates: [getScoutImage(9)],
    alt: "Hindustan Scouts and Guides observing the promise and patriotic pledge",
  },
];

export const aims = [
  [
    "Character Building",
    "Integrity, discipline and responsibility through progressive training.",
    ShieldCheck,
    9,
  ],
  [
    "Leadership",
    "Learning to lead through patrol work, service and cooperation.",
    Flag,
    8,
  ],
  [
    "Service",
    "Building a habit of good turns, social service and community development.",
    HandHeart,
    3,
  ],
  [
    "Self-Reliance",
    "Developing practical, vocational and outdoor skills with confidence.",
    Compass,
    7,
  ],
  [
    "Teamwork",
    "Working through patrols, teams and shared responsibilities.",
    Users,
    7,
  ],
  [
    "Responsible Citizenship",
    "Understanding duty to country, society, nature and fellow citizens.",
    BadgeCheck,
    10,
  ],
].map(([title, text, icon, imageId]) => ({ title, text, icon, imageId }));

export const principles = [
  {
    number: "01",
    title: "Duty to God / Dharma",
    text: "Respecting God or Dharma, personal conviction and all-faith understanding.",
    icon: Sparkles,
    imageId: 9,
  },
  {
    number: "02",
    title: "Duty to Others",
    text: "Helping other people, serving the country and caring for the community and nature.",
    icon: HeartHandshake,
    imageId: 3,
  },
  {
    number: "03",
    title: "Duty to Self",
    text: "Building discipline, wellbeing, knowledge, self-reliance and good judgement.",
    icon: PersonStanding,
    imageId: 7,
  },
];

export const historyEvents = [
  {
    year: "1907",
    title: "The movement begins",
    text: "Lord Robert Baden-Powell's 1907 experimental camp at Brownsea Island helped begin the modern Scout Movement.",
  },
  {
    year: "1909",
    title: "Scouting reaches India",
    text: "Scouting came to India in 1909 and Guiding followed in 1913; early organisations did not initially open their doors equally to Indian children.",
  },
  {
    year: "1910",
    title: "Guiding begins",
    text: "Girl Scouting began in 1910 under Agnes Baden-Powell; it later developed as Girl Guiding under Olave Baden-Powell.",
  },
  {
    year: "1928",
    title: "Hindustan Scout Association",
    text: "Indian groups came together under the Hindustan Scout Association, with Pt. Shri Ram Bajpai as its first National Organising Commissioner.",
  },
  {
    year: "Indian movement",
    title: "A distinctly Indian movement",
    text: "The Association's history records the contribution of leaders including Pt. Madan Mohan Malaviya, Dr. H. N. Kunzru and Pt. Shri Ram Bajpai to Indian Scouting.",
  },
  {
    year: "Present structure",
    title: "Hindustan Scouts & Guides Association",
    text: "The Association operates across India as a registered, non-political, non-sectarian, non-communal and non-profit educational organisation.",
  },
  {
    year: "Membership",
    title: "Open to people and institutions",
    text: "Membership includes Cubs/Bulbuls, Scouts/Guides, Rovers/Rangers, adult members and institutional members such as schools and colleges.",
  },
  {
    year: "Today",
    title: "Training, service and citizenship",
    text: "Hindustan Scouts & Guides continues to promote community development, social service, adventure, conservation, national integration, discipline and leadership.",
  },
];

export const ageGroups = [
  {
    step: "01",
    title: "Cubs & Bulbuls",
    age: "+5 to 11 years",
    motto: "Do Your Best",
    text: "Good habits, teamwork, creativity, outdoor learning and a first experience of the Scout/Guide Promise and Law.",
    icon: Sparkles,
    imageId: 6,
  },
  {
    step: "02",
    title: "Scouts & Guides",
    age: "+11 to 16 years",
    motto: "Be Prepared",
    text: "Progressive training in patrol work, first aid, knots, pioneering, camping, service, yoga and responsible citizenship.",
    icon: Users,
    imageId: 4,
  },
  {
    step: "03",
    title: "Rovers & Rangers",
    age: "+16 to 25 years",
    motto: "Service",
    text: "Advanced leadership, community service, vocational interests, responsibility and active citizenship.",
    icon: Compass,
    imageId: 8,
  },
  {
    step: "04",
    title: "Adult leadership",
    age: "Unit and association service",
    motto: "Guide by service",
    text: "Scouters, Guiders and trainers support units, camps, test-card progression and the Association's service programme.",
    icon: HandHeart,
    imageId: 2,
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

const valueDefinitions = [
  [
    "Trustworthiness",
    "Being honest, reliable and dependable in every situation.",
    9,
    ShieldCheck,
  ],
  [
    "Loyalty",
    "Being loyal to family, friends, school, society and the nation.",
    7,
    Handshake,
  ],
  [
    "Friendship",
    "Building genuine friendship, cooperation and care for others.",
    7,
    Users,
  ],
  [
    "Courtesy",
    "Being polite, respectful and considerate towards everyone.",
    3,
    Heart,
  ],
  [
    "Love for Nature",
    "Respecting, protecting and caring for the natural world.",
    3,
    Leaf,
  ],
  [
    "Discipline",
    "Following rules, maintaining self-control and doing what is right.",
    4,
    BadgeCheck,
  ],
  [
    "Courage",
    "Facing challenges with confidence, determination and responsibility.",
    4,
    Mountain,
  ],
  [
    "Thrift",
    "Using time, money and resources wisely while avoiding waste.",
    7,
    Coins,
  ],
  [
    "Purity of Thought, Word and Deed",
    "Keeping thoughts, words and actions kind, clean and positive.",
    8,
    Sparkles,
  ],
];

const scoutValueImages = [
  "ScoutValue01_Trustworthiness.png",
  "ScoutValue02_Loyalty.png",
  "ScoutValue03_Friendship.png",
  "ScoutValue04_Courtesy.png",
  "ScoutValue05_LoveForNature.png",
  "ScoutValue06_Discipline.png",
  "ScoutValue07_Courage.png",
  "ScoutValue08_Thrift.png",
  "ScoutValue09_PurityThoughtWordDeed.png",
];

export const scoutValues = valueDefinitions.map(
  ([title, description, , icon], index) => ({
    number: String(index + 1).padStart(2, "0"),
    title,
    description,
    image: encodeURI(`/Scout Guide pic/${scoutValueImages[index]}`),
    alt: `${title} in Hindustan Scouts and Guides`,
    icon,
  }),
);

export const skills = [
  [
    "First Aid",
    "Emergency preparedness and responsible response.",
    HandHeart,
    "/Scout Guide pic/ScoutSkill01_FirstAid.png",
  ],
  [
    "Knots",
    "Rope work, practical technique and problem solving.",
    Waypoints,
    "/Scout Guide pic/ScoutSkill02_Knots.png",
  ],
  [
    "Pioneering",
    "Structures, engineering skills and team activity.",
    Waypoints,
    "/Scout Guide pic/ScoutSkill03_Pioneering.png",
  ],
  [
    "Map Reading",
    "Direction, observation, map reading and route planning.",
    Map,
    "/Scout Guide pic/ScoutSkill04_MapReading.png",
  ],
  [
    "Hiking",
    "Endurance, exploration and appreciation of nature.",
    Mountain,
    "/Scout Guide pic/ScoutSkill05_Hiking.png",
  ],
  [
    "Trekking",
    "Adventure, resilience and outdoor education.",
    Mountain,
    "/Scout Guide pic/ScoutSkill06_Trekking.png",
  ],
  [
    "Camp Cooking",
    "Basic camp cooking and independent living skills.",
    CookingPot,
    "/Scout Guide pic/ScoutSkill07_CampCooking.png",
  ],
  [
    "Shelter Making",
    "Resourcefulness and outdoor survival fundamentals.",
    TentTree,
    "/Scout Guide pic/ScoutSkill08_ShelterMaking.png",
  ],
  [
    "Signalling",
    "Clear communication and coordination skills.",
    Flag,
    "/Scout Guide pic/ScoutSkill09_Signalling.png",
  ],
  [
    "Life Skills / Compass",
    "Navigation, observation and self-reliance.",
    Compass,
    "/Scout Guide pic/ScoutSkill10_LifeSkills_Compass.png",
  ],
];

export const activities = [
  ["Flag Ceremony", 1],
  ["March Past", 4],
  ["Drill", 4],
  ["Camping", 4],
  ["Campfire", 2],
  ["Team Games", 7],
  ["Cultural Programme", 10],
  ["National Integration", 9],
  ["Patrol System", 7],
  ["Indoor Training", 4],
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
export const storyImageIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const serviceStories = [
  [
    "Community Service",
    "Putting care into action for people and places we share.",
    3,
  ],
  [
    "Tree Plantation",
    "Growing a practical sense of responsibility for nature.",
    3,
  ],
  ["Environment", "Choosing habits that protect a cleaner, greener future.", 3],
  [
    "Social Awareness",
    "Speaking up for thoughtful, responsible citizenship.",
    10,
  ],
  ["Cleanliness Drive", "Working together to make shared spaces healthier.", 3],
  [
    "Community Outreach",
    "Meeting service with respect, presence and kindness.",
    10,
  ],
  [
    "Empathy & Care",
    "Learning that service begins with noticing another person.",
    8,
  ],
];
export const adventureImageIds = [4, 7, 3, 8];
