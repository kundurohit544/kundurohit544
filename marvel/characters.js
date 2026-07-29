// Data sourced from marvel.com (official character & team pages). Images are
// hot-linked from Marvel's CDN and every entry links back to its official page.
const CHARACTERS = [
  {
    "name": "Iron Man",
    "alias": "Tony Stark",
    "team": "Avengers",
    "alignment": "hero",
    "power": "Powered armor, genius intellect",
    "debut": 1963,
    "bio": "Genius. Billionaire. Playboy. Philanthropist. Tony Stark's confidence is only matched by his high-flying abilities as the hero called Iron Man.",
    "img": "https://cdn.marvel.com/content/2x/002irm_ons_mas_mob_01_0.webp",
    "url": "https://www.marvel.com/characters/iron-man-tony-stark"
  },
  {
    "name": "Captain America",
    "alias": "Steve Rogers",
    "team": "Avengers",
    "alignment": "hero",
    "power": "Super-soldier, vibranium shield",
    "debut": 1941,
    "bio": "Recipient of the Super Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world’s mightiest heroes and the leader of the Avengers.",
    "img": "https://cdn.marvel.com/content/2x/003cap_ons_mas_mob_01_3.webp",
    "url": "https://www.marvel.com/characters/captain-america-steve-rogers"
  },
  {
    "name": "Thor",
    "alias": "Thor Odinson",
    "team": "Avengers",
    "alignment": "hero",
    "power": "God of Thunder, Mjolnir",
    "debut": 1962,
    "bio": "The son of Odin uses his abilities as the God of Thunder to protect Asgard and planet Earth alike. Learn about Thor on the official site of Marvel!",
    "img": "https://cdn.marvel.com/content/2x/004tho_ons_mas_mob_04.webp",
    "url": "https://www.marvel.com/characters/thor-thor-odinson"
  },
  {
    "name": "Hulk",
    "alias": "Bruce Banner",
    "team": "Avengers",
    "alignment": "hero",
    "power": "Limitless strength, regeneration",
    "debut": 1962,
    "bio": "Hulk of the Avengers.",
    "img": "https://cdn.marvel.com/content/2x/006hbb_ons_mas_mob_01_0.webp",
    "url": "https://www.marvel.com/characters/hulk-bruce-banner"
  },
  {
    "name": "Black Widow",
    "alias": "Natasha Romanoff",
    "team": "Avengers",
    "alignment": "hero",
    "power": "Master spy, martial artist",
    "debut": 1964,
    "bio": "Natasha Romanoff, separated from the now-fractured Avengers, confronts the dark path she took to becoming a spy and assassin, as well as events that followed.",
    "img": "https://cdn.marvel.com/content/2x/011blw_lob_mas_mob_06.webp",
    "url": "https://www.marvel.com/characters/black-widow-natasha-romanoff"
  },
  {
    "name": "Hawkeye",
    "alias": "Clint Barton",
    "team": "Avengers",
    "alignment": "hero",
    "power": "Peerless marksmanship",
    "debut": 1964,
    "bio": "A master marksman and longtime friend of the Black Widow, Clint Barton serves as the Avengers’ amazing archer.",
    "img": "https://cdn.marvel.com/content/2x/hawkeye_ons_mas_mob_01.webp",
    "url": "https://www.marvel.com/characters/hawkeye-clint-barton"
  },
  {
    "name": "Scarlet Witch",
    "alias": "Wanda Maximoff",
    "team": "Avengers",
    "alignment": "hero",
    "power": "Chaos magic, reality warping",
    "debut": 1964,
    "bio": "Scarlet Witch of the Avengers.",
    "img": "https://cdn.marvel.com/content/2x/012scw_ons_mas_mob_01_1.webp",
    "url": "https://www.marvel.com/characters/scarlet-witch-wanda-maximoff"
  },
  {
    "name": "Vision",
    "alias": "Vision",
    "team": "Avengers",
    "alignment": "hero",
    "power": "Density control, Mind Stone",
    "debut": 1968,
    "bio": "The android called Vision defies physics and fights as an Avenger with the power of density manipulation and his flawless computer brain.",
    "img": "https://cdn.marvel.com/content/2x/013vis_ons_mas_mob_01_0.webp",
    "url": "https://www.marvel.com/characters/vision"
  },
  {
    "name": "Ant-Man",
    "alias": "Scott Lang",
    "team": "Avengers",
    "alignment": "hero",
    "power": "Size-shifting Pym particles",
    "debut": 1979,
    "bio": "Ex-con Scott Lang finds a new lease on life, and a chance to redeem himself in the eyes of his daughter, after taking over the mantle of Ant-Man.",
    "img": "https://cdn.marvel.com/content/2x/010ant_ons_mas_mob_04.webp",
    "url": "https://www.marvel.com/characters/ant-man-scott-lang"
  },
  {
    "name": "Wasp",
    "alias": "Janet Van Dyne",
    "team": "Avengers",
    "alignment": "hero",
    "power": "Flight, bio-electric stings",
    "debut": 1963,
    "bio": "Wasp of the Avengers.",
    "img": "https://cdn.marvel.com/content/2x/041wjd_ons_mas_mob_03.webp",
    "url": "https://www.marvel.com/characters/wasp-janet-van-dyne"
  },
  {
    "name": "Falcon",
    "alias": "Sam Wilson",
    "team": "Avengers",
    "alignment": "hero",
    "power": "Flight harness, avian empathy",
    "debut": 1969,
    "bio": "Sam Wilson, formerly the Falcon, takes on the mantle of Captain America as he teams up with his fellow Avengers.",
    "img": "https://cdn.marvel.com/content/2x/cap_lob_mas_mob_02.webp",
    "url": "https://www.marvel.com/characters/sam-wilson"
  },
  {
    "name": "War Machine",
    "alias": "James Rhodes",
    "team": "Avengers",
    "alignment": "hero",
    "power": "Heavy weapons armor",
    "debut": 1979,
    "bio": "Military veteran James Rhodes is ready for combat in his advanced armor, adding a formidable arsenal to Tony Stark-created designs.",
    "img": "https://cdn.marvel.com/content/2x/042wmr_ons_mas_mob_01_0.webp",
    "url": "https://www.marvel.com/characters/war-machine-james-rhodes"
  },
  {
    "name": "Winter Soldier",
    "alias": "Bucky Barnes",
    "team": "Avengers",
    "alignment": "antihero",
    "power": "Bionic arm, elite marksman",
    "debut": 1941,
    "bio": "Bucky Barnes was brought back from his supposed death to be a brainwashed assassin called the Winter Soldier. Reformed by his friends, he now fights alongside the Avengers.",
    "img": "https://cdn.marvel.com/content/2x/015wsb_ons_mas_mob_01_1.webp",
    "url": "https://www.marvel.com/characters/winter-soldier-bucky-barnes"
  },
  {
    "name": "Nick Fury",
    "alias": "Nicholas Fury",
    "team": "S.H.I.E.L.D.",
    "alignment": "hero",
    "power": "Master spymaster, tactician",
    "debut": 1963,
    "bio": "Nick Fury of the S.H.I.E.L.D..",
    "img": "https://cdn.marvel.com/content/2x/284nfy_ons_mas_mob_06_0.webp",
    "url": "https://www.marvel.com/characters/nick-fury"
  },
  {
    "name": "Spider-Man",
    "alias": "Peter Parker",
    "team": "Spider-Verse",
    "alignment": "hero",
    "power": "Wall-crawling, spider-sense",
    "debut": 1962,
    "bio": "Bitten by a radioactive spider, Peter Parker’s arachnid abilities give him powers he uses to help others, while his personal life offers plenty of obstacles.",
    "img": "https://cdn.marvel.com/content/2x/005smp_ons_mas_mob_01_0.webp",
    "url": "https://www.marvel.com/characters/spider-man-peter-parker"
  },
  {
    "name": "Miles Morales",
    "alias": "Miles Morales",
    "team": "Spider-Verse",
    "alignment": "hero",
    "power": "Venom blast, camouflage",
    "debut": 2011,
    "bio": "Emerging from a universe in need of a new Spider-Man, a Brooklyn teen named Miles Morales rose to the challenge. Reluctant at first, he quickly earned the mantle of a Super Hero.",
    "img": "https://cdn.marvel.com/content/2x/037smm_com_mas_mob_04.webp",
    "url": "https://www.marvel.com/characters/spider-man-miles-morales"
  },
  {
    "name": "Spider-Gwen",
    "alias": "Gwen Stacy",
    "team": "Spider-Verse",
    "alignment": "hero",
    "power": "Agility, spider-sense",
    "debut": 2014,
    "bio": "In an alternate universe, Gwen Stacy is bitten by a radioactive spider and becomes a Super Heroine.",
    "img": "https://cdn.marvel.com/content/2x/166gsg_ani_mas_mob_01_0.webp",
    "url": "https://www.marvel.com/characters/spider-woman-gwen-stacy"
  },
  {
    "name": "Venom",
    "alias": "Eddie Brock",
    "team": "Spider-Verse",
    "alignment": "antihero",
    "power": "Symbiote strength, shapeshifting",
    "debut": 1988,
    "bio": "Bonding with an unearthly symbiote, Eddie Brock is given amazing powers and an unstable psyche.",
    "img": "https://cdn.marvel.com/content/2x/103veb_com_mas_mob_03_1.webp",
    "url": "https://www.marvel.com/characters/venom-eddie-brock"
  },
  {
    "name": "Doctor Strange",
    "alias": "Stephen Strange",
    "team": "Defenders",
    "alignment": "hero",
    "power": "Mystic arts, Time Stone",
    "debut": 1963,
    "bio": "Doctor Strange of the Defenders.",
    "img": "https://cdn.marvel.com/content/2x/009drs_ons_mas_mob_04.webp",
    "url": "https://www.marvel.com/characters/doctor-strange-stephen-strange"
  },
  {
    "name": "Daredevil",
    "alias": "Matt Murdock",
    "team": "Defenders",
    "alignment": "hero",
    "power": "Radar sense, acrobatics",
    "debut": 1964,
    "bio": "Daredevil of the Defenders.",
    "img": "https://cdn.marvel.com/content/2x/026ddm_ons_mas_mob_04.webp",
    "url": "https://www.marvel.com/characters/daredevil-matthew-murdock"
  },
  {
    "name": "Luke Cage",
    "alias": "Carl Lucas",
    "team": "Defenders",
    "alignment": "hero",
    "power": "Unbreakable skin, strength",
    "debut": 1972,
    "bio": "Luke Cage of the Defenders.",
    "img": "https://cdn.marvel.com/content/2x/028lcg_ons_mas_mob_01_0.webp",
    "url": "https://www.marvel.com/characters/luke-cage"
  },
  {
    "name": "Jessica Jones",
    "alias": "Jessica Jones",
    "team": "Defenders",
    "alignment": "hero",
    "power": "Super strength, flight",
    "debut": 2001,
    "bio": "Jessica Jones of the Defenders.",
    "img": "https://cdn.marvel.com/content/2x/027jjo_ons_mas_mob_01.webp",
    "url": "https://www.marvel.com/characters/jessica-jones"
  },
  {
    "name": "Punisher",
    "alias": "Frank Castle",
    "team": "Defenders",
    "alignment": "antihero",
    "power": "Combat mastery, weapons",
    "debut": 1974,
    "bio": "Punisher of the Defenders.",
    "img": "https://cdn.marvel.com/content/2x/031pun_ons_mas_mob_02.webp",
    "url": "https://www.marvel.com/characters/punisher-frank-castle"
  },
  {
    "name": "Star-Lord",
    "alias": "Peter Quill",
    "team": "Guardians",
    "alignment": "hero",
    "power": "Piloting, element guns",
    "debut": 1976,
    "bio": "Star-Lord of the Guardians.",
    "img": "https://cdn.marvel.com/content/2x/021slq_ons_mas_mob_04.webp",
    "url": "https://www.marvel.com/characters/star-lord-peter-quill"
  },
  {
    "name": "Gamora",
    "alias": "Gamora",
    "team": "Guardians",
    "alignment": "hero",
    "power": "Deadliest woman in the galaxy",
    "debut": 1975,
    "bio": "Gamora of the Guardians.",
    "img": "https://cdn.marvel.com/content/2x/022gam_ons_mas_mob_04.webp",
    "url": "https://www.marvel.com/characters/gamora"
  },
  {
    "name": "Rocket Raccoon",
    "alias": "Rocket",
    "team": "Guardians",
    "alignment": "hero",
    "power": "Tactics, heavy weaponry",
    "debut": 1976,
    "bio": "Rocket Raccoon of the Guardians.",
    "img": "https://cdn.marvel.com/content/2x/023rra_ons_mas_mob_08.webp",
    "url": "https://www.marvel.com/characters/rocket"
  },
  {
    "name": "Groot",
    "alias": "Groot",
    "team": "Guardians",
    "alignment": "hero",
    "power": "Regenerating flora body",
    "debut": 1960,
    "bio": "Groot of the Guardians.",
    "img": "https://cdn.marvel.com/content/2x/024grt_ons_mas_mob_05.webp",
    "url": "https://www.marvel.com/characters/groot"
  },
  {
    "name": "Drax",
    "alias": "Drax the Destroyer",
    "team": "Guardians",
    "alignment": "hero",
    "power": "Super strength, durability",
    "debut": 1973,
    "bio": "Drax of the Guardians.",
    "img": "https://cdn.marvel.com/content/2x/025drx_ons_mas_mob_04.webp",
    "url": "https://www.marvel.com/characters/drax"
  },
  {
    "name": "Nebula",
    "alias": "Nebula",
    "team": "Guardians",
    "alignment": "antihero",
    "power": "Cybernetic enhancements",
    "debut": 1985,
    "bio": "Nebula of the Guardians.",
    "img": "https://cdn.marvel.com/content/2x/043neb_ons_mas_mob_05.webp",
    "url": "https://www.marvel.com/characters/nebula"
  },
  {
    "name": "Wolverine",
    "alias": "Logan",
    "team": "X-Men",
    "alignment": "antihero",
    "power": "Adamantium claws, healing factor",
    "debut": 1974,
    "bio": "A mutant with healing power, adamantium metal claws and no-nonsense attitude makes the man called Logan, one of the most ferocious heroes in the universe.",
    "img": "https://cdn.marvel.com/content/2x/034wlv_com_mas_mob_03_0.webp",
    "url": "https://www.marvel.com/characters/wolverine-james-howlett"
  },
  {
    "name": "Storm",
    "alias": "Ororo Munroe",
    "team": "X-Men",
    "alignment": "hero",
    "power": "Weather manipulation",
    "debut": 1975,
    "bio": "Mutant Ororo Munroe confounds enemies of the X-Men by using her psionic abilities to manipulate the weather.",
    "img": "https://cdn.marvel.com/content/prod/2x/039stm_com_mas_mob_03.webp",
    "url": "https://www.marvel.com/characters/storm"
  },
  {
    "name": "Cyclops",
    "alias": "Scott Summers",
    "team": "X-Men",
    "alignment": "hero",
    "power": "Optic force blasts",
    "debut": 1963,
    "bio": "Cyclops of the X-Men.",
    "img": "https://cdn.marvel.com/content/2x/191cyc_com_mas_mob_02.webp",
    "url": "https://www.marvel.com/characters/cyclops-scott-summers"
  },
  {
    "name": "Jean Grey",
    "alias": "Jean Grey",
    "team": "X-Men",
    "alignment": "hero",
    "power": "Telepathy, telekinesis, Phoenix Force",
    "debut": 1963,
    "bio": "From Marvel Girl to Dark Phoenix, Jean Grey's telepathic and telekinetic abilities make her one of the most powerful X-Men in history.",
    "img": "https://cdn.marvel.com/content/2x/186jgr-mas_mob_03.webp",
    "url": "https://www.marvel.com/characters/phoenix-jean-grey"
  },
  {
    "name": "Professor X",
    "alias": "Charles Xavier",
    "team": "X-Men",
    "alignment": "hero",
    "power": "World's most powerful telepath",
    "debut": 1963,
    "bio": "Professor X of the X-Men.",
    "img": "https://cdn.marvel.com/content/2x/188pcx_com_mas_mob_02.webp",
    "url": "https://www.marvel.com/characters/professor-x"
  },
  {
    "name": "Beast",
    "alias": "Hank McCoy",
    "team": "X-Men",
    "alignment": "hero",
    "power": "Agility, scientific genius",
    "debut": 1963,
    "bio": "The official Marvel Comics page for Beast (Henry \"Hank\" McCoy). Learn all about Beast both on screen and in comics!",
    "img": "https://cdn.marvel.com/content/2x/190bhm_com_mas_mob_01.webp",
    "url": "https://www.marvel.com/characters/beast-henry-mccoy"
  },
  {
    "name": "Rogue",
    "alias": "Anna Marie",
    "team": "X-Men",
    "alignment": "hero",
    "power": "Power absorption, flight",
    "debut": 1981,
    "bio": "Armed with the ability to temporarily absorb others’ powers and memories, the Mississippi runaway known as Rogue starts out as a villain but joins the X-Men to fight for good.",
    "img": "https://cdn.marvel.com/content/2x/040rog_com_mas_mob_02.webp",
    "url": "https://www.marvel.com/characters/rogue"
  },
  {
    "name": "Gambit",
    "alias": "Remy LeBeau",
    "team": "X-Men",
    "alignment": "antihero",
    "power": "Kinetic charging",
    "debut": 1990,
    "bio": "Gambit of the X-Men.",
    "img": "https://cdn.marvel.com/content/2x/clean_2_44.webp",
    "url": "https://www.marvel.com/characters/gambit"
  },
  {
    "name": "Magneto",
    "alias": "Max Eisenhardt",
    "team": "X-Men",
    "alignment": "villain",
    "power": "Magnetism mastery",
    "debut": 1963,
    "bio": "Using his mighty ability to control magnetic fields, the one called Magneto fights to help mutants replace humans as the world's dominant species.",
    "img": "https://cdn.marvel.com/content/2x/058mgn_com_mas_mob_01_1.webp",
    "url": "https://www.marvel.com/characters/magneto-max-eisenhardt"
  },
  {
    "name": "Mystique",
    "alias": "Raven Darkholme",
    "team": "X-Men",
    "alignment": "villain",
    "power": "Shapeshifting",
    "debut": 1978,
    "bio": "Mystique of the X-Men.",
    "img": "https://cdn.marvel.com/content/2x/189myq_com_mas_mob_01_0.webp",
    "url": "https://www.marvel.com/characters/mystique"
  },
  {
    "name": "Mister Fantastic",
    "alias": "Reed Richards",
    "team": "Fantastic Four",
    "alignment": "hero",
    "power": "Elasticity, super genius",
    "debut": 1961,
    "bio": "Mister Fantastic of the Fantastic Four.",
    "img": "https://cdn.marvel.com/content/2x/212rdr-mas_mob_01_0.webp",
    "url": "https://www.marvel.com/characters/mister-fantastic"
  },
  {
    "name": "Invisible Woman",
    "alias": "Sue Storm",
    "team": "Fantastic Four",
    "alignment": "hero",
    "power": "Invisibility, force fields",
    "debut": 1961,
    "bio": "Invisible Woman of the Fantastic Four.",
    "img": "https://cdn.marvel.com/content/2x/211sus-mas_mob_02.webp",
    "url": "https://www.marvel.com/characters/invisible-woman"
  },
  {
    "name": "Human Torch",
    "alias": "Johnny Storm",
    "team": "Fantastic Four",
    "alignment": "hero",
    "power": "Pyrokinesis, flight",
    "debut": 1961,
    "bio": "Human Torch of the Fantastic Four.",
    "img": "https://cdn.marvel.com/content/2x/213hmt-mas_mob_01_0.webp",
    "url": "https://www.marvel.com/characters/human-torch-johnny-storm"
  },
  {
    "name": "Thing",
    "alias": "Ben Grimm",
    "team": "Fantastic Four",
    "alignment": "hero",
    "power": "Rocky hide, immense strength",
    "debut": 1961,
    "bio": "Thing of the Fantastic Four.",
    "img": "https://cdn.marvel.com/content/2x/214thg-mas_mob_01_0.webp",
    "url": "https://www.marvel.com/characters/the-thing-benjamin-grimm"
  },
  {
    "name": "Black Panther",
    "alias": "T'Challa",
    "team": "Wakanda",
    "alignment": "hero",
    "power": "Enhanced senses, vibranium suit",
    "debut": 1966,
    "bio": "T’Challa is the king of Wakanda, the secretive and highly advanced African nation, as well as the powerful warrior known as the Black Panther.",
    "img": "https://cdn.marvel.com/content/2x/007blp_ons_mas_mob_01_3.webp",
    "url": "https://www.marvel.com/characters/black-panther-t-challa"
  },
  {
    "name": "Shuri",
    "alias": "Shuri",
    "team": "Wakanda",
    "alignment": "hero",
    "power": "Genius inventor, combat training",
    "debut": 2005,
    "bio": "Shuri of the Wakanda.",
    "img": "https://cdn.marvel.com/content/2x/107shr_ons_mas_mob_04.webp",
    "url": "https://www.marvel.com/characters/shuri"
  },
  {
    "name": "Okoye",
    "alias": "Okoye",
    "team": "Wakanda",
    "alignment": "hero",
    "power": "Dora Milaje general, spear master",
    "debut": 2016,
    "bio": "Okoye of the Wakanda.",
    "img": "https://cdn.marvel.com/content/2x/110oky_ons_mas_mob_04.webp",
    "url": "https://www.marvel.com/characters/okoye"
  },
  {
    "name": "Killmonger",
    "alias": "Erik Stevens",
    "team": "Wakanda",
    "alignment": "villain",
    "power": "Black ops training, strategy",
    "debut": 1973,
    "bio": "Raised in America, the man known as Erik Killmonger returns to his father's home of Wakanda determined to overthrow T'Challa and rule the nation himself.",
    "img": "https://cdn.marvel.com/content/2x/108kmg_ons_mas_mob_01_0.webp",
    "url": "https://www.marvel.com/characters/erik-killmonger"
  },
  {
    "name": "Captain Marvel",
    "alias": "Carol Danvers",
    "team": "Cosmic",
    "alignment": "hero",
    "power": "Photon blasts, flight",
    "debut": 1968,
    "bio": "Captain Marvel of the Cosmic.",
    "img": "https://cdn.marvel.com/content/2x/008cmv_ons_mas_mob_06.webp",
    "url": "https://www.marvel.com/characters/captain-marvel-carol-danvers"
  },
  {
    "name": "Silver Surfer",
    "alias": "Norrin Radd",
    "team": "Cosmic",
    "alignment": "hero",
    "power": "Power Cosmic, board flight",
    "debut": 1966,
    "bio": "Silver Surfer of the Cosmic.",
    "img": "https://cdn.marvel.com/content/2x/333svs_com_mas_mob_01.webp",
    "url": "https://www.marvel.com/characters/silver-surfer"
  },
  {
    "name": "Ms. Marvel",
    "alias": "Kamala Khan",
    "team": "Solo",
    "alignment": "hero",
    "power": "Embiggening, polymorph",
    "debut": 2013,
    "bio": "Ms. Marvel of the Solo.",
    "img": "https://cdn.marvel.com/content/2x/038mmk_ons_mas_mob_02.webp",
    "url": "https://www.marvel.com/characters/ms-marvel-kamala-khan"
  },
  {
    "name": "Shang-Chi",
    "alias": "Shang-Chi",
    "team": "Solo",
    "alignment": "hero",
    "power": "Master of kung fu, Ten Rings",
    "debut": 1973,
    "bio": "Shang-Chi of the Solo.",
    "img": "https://cdn.marvel.com/content/2x/242shc_ons_mas_mob_01.webp",
    "url": "https://www.marvel.com/characters/shang-chi"
  },
  {
    "name": "Moon Knight",
    "alias": "Marc Spector",
    "team": "Solo",
    "alignment": "antihero",
    "power": "Lunar strength, avatar of Khonshu",
    "debut": 1975,
    "bio": "A mild-mannered gift-shop employee, becomes plagued with blackouts and memories of another life.",
    "img": "https://cdn.marvel.com/content/2x/moonknight_lob_mas_mob_03.webp",
    "url": "https://www.marvel.com/characters/moon-knight-marc-spector"
  },
  {
    "name": "Deadpool",
    "alias": "Wade Wilson",
    "team": "Solo",
    "alignment": "antihero",
    "power": "Healing factor, fourth-wall breaks",
    "debut": 1991,
    "bio": "Deadpool of the Solo.",
    "img": "https://cdn.marvel.com/content/2x/036dpl_com_mas_mob_02.webp",
    "url": "https://www.marvel.com/characters/deadpool-wade-wilson"
  },
  {
    "name": "Ghost Rider",
    "alias": "Johnny Blaze",
    "team": "Solo",
    "alignment": "antihero",
    "power": "Hellfire, Penance Stare",
    "debut": 1972,
    "bio": "Making a demonic deal to save a loved one, biker Johnny Blaze now finds himself cursed to transform into the embodiment of the Spirit of Vengeance.",
    "img": "https://cdn.marvel.com/content/2x/125grb_com_mas_mob_02_0.webp",
    "url": "https://www.marvel.com/characters/ghost-rider-johnny-blaze"
  },
  {
    "name": "Ironheart",
    "alias": "Riri Williams",
    "team": "Solo",
    "alignment": "hero",
    "power": "Self-built powered armor",
    "debut": 2016,
    "bio": "Ironheart of the Solo.",
    "img": "https://cdn.marvel.com/content/2x/124irh_ons_mas_mob_01.webp",
    "url": "https://www.marvel.com/characters/ironheart-riri-williams"
  },
  {
    "name": "Valkyrie",
    "alias": "Brunnhilde",
    "team": "Asgard",
    "alignment": "hero",
    "power": "Asgardian warrior, Dragonfang",
    "debut": 1970,
    "bio": "Valkyrie of the Asgard.",
    "img": "https://cdn.marvel.com/content/2x/090vsp_ons_mas_mob_04.webp",
    "url": "https://www.marvel.com/characters/valkyrie"
  },
  {
    "name": "Hela",
    "alias": "Hela",
    "team": "Asgard",
    "alignment": "villain",
    "power": "Goddess of Death",
    "debut": 1964,
    "bio": "With family ties to the rulers of Asgard, Hela seeks power (and followers) for herself.",
    "img": "https://cdn.marvel.com/content/2x/113hla_ons_mas_mob_01-v2.webp",
    "url": "https://www.marvel.com/characters/hela"
  },
  {
    "name": "Loki",
    "alias": "Loki Laufeyson",
    "team": "Asgard",
    "alignment": "antihero",
    "power": "Illusion, shapeshifting, sorcery",
    "debut": 1949,
    "bio": "God of Mischief and brother to Thor, Loki’s tricks and schemes wreak havoc across the realms.",
    "img": "https://cdn.marvel.com/content/2x/017lok_ons_mas_mob_04.webp",
    "url": "https://www.marvel.com/characters/loki"
  },
  {
    "name": "Thanos",
    "alias": "Thanos",
    "team": "Villains",
    "alignment": "villain",
    "power": "Cosmic strength, Infinity Gauntlet",
    "debut": 1973,
    "bio": "Thanos, The Mad Titan quests across the universe in search of the Infinity Stones, intending to use their limitless power for shocking purposes.",
    "img": "https://cdn.marvel.com/content/2x/019tha_ons_mas_mob_01_0.webp",
    "url": "https://www.marvel.com/characters/thanos"
  },
  {
    "name": "Doctor Doom",
    "alias": "Victor Von Doom",
    "team": "Villains",
    "alignment": "villain",
    "power": "Sorcery and super-science",
    "debut": 1962,
    "bio": "The egostical and maniacal Dr. Doom uses his brilliant scientific mind to augment his own power and quest for control.",
    "img": "https://cdn.marvel.com/content/2x/057drd_com_mas_mob_03_0.webp",
    "url": "https://www.marvel.com/characters/doctor-doom-victor-von-doom"
  },
  {
    "name": "Ultron",
    "alias": "Ultron",
    "team": "Villains",
    "alignment": "villain",
    "power": "Adamantium body, self-replication",
    "debut": 1968,
    "bio": "The creation gone awry, the sentient robot Ultron hates and seeks to wipe out humanity.",
    "img": "https://cdn.marvel.com/content/2x/061ult_ons_mas_mob_01_0.webp",
    "url": "https://www.marvel.com/characters/ultron"
  },
  {
    "name": "Green Goblin",
    "alias": "Norman Osborn",
    "team": "Villains",
    "alignment": "villain",
    "power": "Goblin serum, pumpkin bombs",
    "debut": 1964,
    "bio": "Green Goblin of the Villains.",
    "img": "https://cdn.marvel.com/content/2x/104gno_ons_mas_mob_01.webp",
    "url": "https://www.marvel.com/characters/green-goblin-norman-osborn"
  },
  {
    "name": "Kang the Conqueror",
    "alias": "Nathaniel Richards",
    "team": "Villains",
    "alignment": "villain",
    "power": "Time travel, future tech",
    "debut": 1964,
    "bio": "Kang the Conqueror of the Villains.",
    "img": "https://cdn.marvel.com/content/2x/301kng_ons_mas_mob_01.webp",
    "url": "https://www.marvel.com/characters/kang"
  },
  {
    "name": "Red Skull",
    "alias": "Johann Shmidt",
    "team": "Villains",
    "alignment": "villain",
    "power": "Hydra mastermind, tactician",
    "debut": 1941,
    "bio": "Red Skull of the Villains.",
    "img": "https://cdn.marvel.com/content/prod/2x/163rsk_com_crd_01.webp",
    "url": "https://www.marvel.com/characters/red-skull-johann-shmidt"
  },
  {
    "name": "Galactus",
    "alias": "Galan",
    "team": "Villains",
    "alignment": "villain",
    "power": "Devourer of Worlds",
    "debut": 1966,
    "bio": "Galactus of the Villains.",
    "img": "https://cdn.marvel.com/content/2x/300glc_com_mas_mob_03.webp",
    "url": "https://www.marvel.com/characters/galactus"
  }
];

const TEAMS = [
  {
    "name": "Avengers",
    "slug": "avengers",
    "blurb": "Earth's Mightiest Heroes, assembled to fight the battles no single hero could withstand.",
    "img": "https://cdn.marvel.com/content/2x/theavengers_lob_mas_dsk_03_1.webp",
    "url": "https://www.marvel.com/teams-and-groups/avengers",
    "count": 13
  },
  {
    "name": "X-Men",
    "slug": "x-men",
    "blurb": "Mutants trained at the Xavier Institute to protect a world that fears and hates them.",
    "img": "https://cdn.marvel.com/content/2x/035xmn_com_mas_dsk_02.webp",
    "url": "https://www.marvel.com/teams-and-groups/x-men",
    "count": 10
  },
  {
    "name": "Guardians",
    "slug": "guardians-of-the-galaxy",
    "blurb": "A ragtag crew of outlaws who keep the galaxy in one piece — usually by accident.",
    "img": "https://cdn.marvel.com/content/2x/020gga_ons_mas_dsk_03.webp",
    "url": "https://www.marvel.com/teams-and-groups/guardians-of-the-galaxy",
    "count": 6
  },
  {
    "name": "Fantastic Four",
    "slug": "fantastic-four",
    "blurb": "Marvel's first family: explorers changed forever by cosmic rays.",
    "img": "https://cdn.marvel.com/content/2x/156ffo_com_mas_dsk_01_1.webp",
    "url": "https://www.marvel.com/teams-and-groups/fantastic-four",
    "count": 4
  },
  {
    "name": "Defenders",
    "slug": "defenders",
    "blurb": "Street-level heroes of New York who unite when the city needs them most.",
    "img": "https://cdn.marvel.com/content/2x/defenders_com_mas_dsk_03.webp",
    "url": "https://www.marvel.com/teams-and-groups/defenders",
    "count": 5
  },
  {
    "name": "Spider-Verse",
    "slug": "spider-verse",
    "blurb": "Every reality has a Spider — and sometimes they all swing together.",
    "img": "https://cdn.marvel.com/content/2x/037smm_com_mas_mob_04.webp",
    "url": "https://www.marvel.com/teams-and-groups/spider-verse",
    "count": 4
  },
  {
    "name": "Wakanda",
    "slug": "black-panthers",
    "blurb": "The Black Panther, the Dora Milaje and the most advanced nation on Earth.",
    "img": "https://cdn.marvel.com/content/1x/1484blp_com_crd_01.webp",
    "url": "https://www.marvel.com/teams-and-groups/black-panthers",
    "count": 4
  },
  {
    "name": "Asgard",
    "slug": "asgardians",
    "blurb": "The Nine Realms' gods, warriors and tricksters.",
    "img": "https://cdn.marvel.com/content/1x/1483asg_com_crd_01.webp",
    "url": "https://www.marvel.com/teams-and-groups/asgardians",
    "count": 3
  },
  {
    "name": "Cosmic",
    "slug": "starforce",
    "blurb": "Heroes whose battlefield is the whole universe.",
    "img": "https://cdn.marvel.com/content/1x/260sfc_ons_crd_01.webp",
    "url": "https://www.marvel.com/teams-and-groups/starforce",
    "count": 2
  },
  {
    "name": "S.H.I.E.L.D.",
    "slug": "s-h-i-e-l-d",
    "blurb": "The global intelligence agency that watches the watchmen.",
    "img": "https://cdn.marvel.com/content/2x/059shi_com_mas_dsk_01_1.webp",
    "url": "https://www.marvel.com/teams-and-groups/s-h-i-e-l-d",
    "count": 1
  },
  {
    "name": "Villains",
    "slug": "black-order",
    "blurb": "The threats that force the heroes to assemble in the first place.",
    "img": "https://cdn.marvel.com/content/2x/161bko_com_mas_dsk_02.webp",
    "url": "https://www.marvel.com/teams-and-groups/black-order",
    "count": 7
  },
  {
    "name": "Solo",
    "slug": "champions-of-los-angeles",
    "blurb": "Heroes who mostly go it alone.",
    "img": "https://cdn.marvel.com/content/2x/championsla.webp",
    "url": "https://www.marvel.com/teams-and-groups/champions-of-los-angeles",
    "count": 6
  }
];
