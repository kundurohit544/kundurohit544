const HEROES = [
  { name: "Iron Man", alias: "Tony Stark", team: "Avengers", debut: 1963, color: "#c0392b",
    power: "Powered armor, genius intellect", bio: "A billionaire inventor whose arc-reactor armor turned him into the founding face of the Avengers." },
  { name: "Captain America", alias: "Steve Rogers", team: "Avengers", debut: 1941, color: "#2c5aa0",
    power: "Peak human strength, vibranium shield", bio: "A super-soldier from World War II who became the moral compass of Earth's mightiest heroes." },
  { name: "Thor", alias: "Thor Odinson", team: "Avengers", debut: 1962, color: "#7d5fff",
    power: "God of Thunder, Mjolnir", bio: "Asgardian prince and wielder of storm and lightning, sworn to defend the Nine Realms." },
  { name: "Black Widow", alias: "Natasha Romanoff", team: "Avengers", debut: 1964, color: "#8e1b1b",
    power: "Master spy and martial artist", bio: "A former Red Room operative who traded a ledger of red for a lifetime of redemption." },
  { name: "Hulk", alias: "Bruce Banner", team: "Avengers", debut: 1962, color: "#27ae60",
    power: "Limitless strength, regeneration", bio: "A gamma-scarred scientist whose rage becomes the strongest one there is." },
  { name: "Spider-Man", alias: "Peter Parker", team: "Solo", debut: 1962, color: "#e74c3c",
    power: "Wall-crawling, spider-sense", bio: "A teenager from Queens who learned that with great power comes great responsibility." },
  { name: "Doctor Strange", alias: "Stephen Strange", team: "Defenders", debut: 1963, color: "#e67e22",
    power: "Mystic arts, Time Stone", bio: "A surgeon turned Sorcerer Supreme, guardian of reality against multiversal threats." },
  { name: "Black Panther", alias: "T'Challa", team: "Avengers", debut: 1966, color: "#4b2e83",
    power: "Enhanced senses, vibranium suit", bio: "King of Wakanda and protector of the world's most technologically advanced nation." },
  { name: "Scarlet Witch", alias: "Wanda Maximoff", team: "Avengers", debut: 1964, color: "#b03060",
    power: "Chaos magic, reality warping", bio: "A reality-warping sorceress whose grief reshaped worlds." },
  { name: "Star-Lord", alias: "Peter Quill", team: "Guardians", debut: 1976, color: "#16a085",
    power: "Piloting, element guns", bio: "A half-celestial outlaw who leads a ragtag crew across the galaxy." },
  { name: "Gamora", alias: "Gamora Zen Whoberi", team: "Guardians", debut: 1975, color: "#2e8b57",
    power: "Deadliest woman in the galaxy", bio: "Raised as Thanos' weapon, she chose to fight for the galaxy instead." },
  { name: "Captain Marvel", alias: "Carol Danvers", team: "Solo", debut: 1968, color: "#d4a017",
    power: "Photon blasts, flight, durability", bio: "A pilot infused with cosmic energy, standing between worlds and annihilation." }
];

const TIMELINE = [
  { year: 2008, title: "Iron Man", note: "Phase One begins; the MCU is born." },
  { year: 2012, title: "The Avengers", note: "The team assembles against the Chitauri invasion." },
  { year: 2014, title: "Guardians of the Galaxy", note: "The cosmic side of the universe opens up." },
  { year: 2016, title: "Captain America: Civil War", note: "The Sokovia Accords split the Avengers." },
  { year: 2018, title: "Avengers: Infinity War", note: "Thanos collects the Infinity Stones." },
  { year: 2019, title: "Avengers: Endgame", note: "The Infinity Saga concludes." },
  { year: 2021, title: "Spider-Man: No Way Home", note: "The multiverse cracks wide open." },
  { year: 2023, title: "Guardians of the Galaxy Vol. 3", note: "The Guardians' story comes full circle." }
];

const QUIZ = [
  { q: "What metal is Captain America's shield made of?", options: ["Adamantium", "Vibranium", "Uru", "Titanium"], answer: 1 },
  { q: "Who forged Thor's axe Stormbreaker?", options: ["Eitri", "Odin", "Heimdall", "Shuri"], answer: 0 },
  { q: "Which stone does Doctor Strange guard?", options: ["Soul", "Mind", "Time", "Reality"], answer: 2 },
  { q: "What is the capital of Wakanda's power source?", options: ["Gamma rays", "Vibranium", "Dark matter", "Pym particles"], answer: 1 },
  { q: "Who is the leader of the Guardians of the Galaxy?", options: ["Drax", "Rocket", "Star-Lord", "Nebula"], answer: 2 }
];
