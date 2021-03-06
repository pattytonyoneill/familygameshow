//**questions */
const potterQuestions = [
    {
        question: "How many Harry Potter Movies?",
        a: "6",
        b: "8",
        c: "9",
        d: "12",
        correctOption: "b"
    },
    {
        question: "What future Batman actor played Triwizard Tournament entrant Cedric Diggory?",
        a: "Robert Pattinson",
        b: "Christian Bale",
        c: "Ben Affleck",
        d: "Adam West",
        correctOption: "a"
    },
    {
        question: "Who was Hermione's date at the Yule Ball?",
        a: "Harry Potter",
        b: "Lucious Molfoy",
        c: "Ronald Weasly",
        d: "Viktor Krum",
        correctOption: "d"
    },
    {
        question: "What was Harry Potter's mom's real name?",
        a: "Rose",
        b: "Tulip",
        c: "Lily",
        d: "Gertrude",
        correctOption: "c"
    },
    {
        question: "What future Dr. Who played Barty Crouch, Jr. in the Goblet of Fire?",
        a: "David Tennant",
        b: "Matt Smith",
        c: "Peter Capaldi",
        d: "Robert Pattinson",
        correctOption: "a"
    },
    {
        question: "Who was the original actor to play Dumbledore?",
        a: "Michael Gambon",
        b: "David Tennant",
        c: "Robert Pattinson",
        d: "Richard Harris",
        correctOption: "d"
    },
    {
        question: "What floor was the forbidden corridor in the Philosopher's Stone?",
        a: "3",
        b: "1",
        c: "4",
        d: "2",
        correctOption: "a"
    },
    {
        question: "What animal represents Hufflepuff house?",
        a: "snake",
        b: "lion",
        c: "badger",
        d: "eagle",
        correctOption: "c"
    },
    {
        question: "Who was the Minister of Magic for the 1st five movies?",
        a: "Barty Crouch, Sr.",
        b: "Cornelius Fudge",
        c: "Barty Crouch, Jr.",
        d: "Rufus Scrimgeour",
        correctOption: "b"
    },
    {
        question: "What class has a different teacher each year?",
        a: "Potions",
        b: "Defence of the Dark Arts",
        c: "Divination",
        d: "Charms",
        correctOption: "b"
    },

];

const marvelQuestions = [
    {
        question: "What was the first Marvel movie?",
        a: "The Incredible Hulk",
        b: "Iron Man",
        c: "Thor",
        d: "Captain America: The First Avenger",
        correctOption: "b"
    },
    {
        question: "Who had a cameo in every Marvel film up to Avengers:Endgame?",
        a: "Elon Musk",
        b: "Ken Jeong",
        c: "Jenna Coleman",
        d: "Stan Lee",
        correctOption: "d"
    },
    {
        question: "What is Captain America's shield made out of?",
        a: "Vibranium",
        b: "Steel",
        c: "Aluminum",
        d: "Iron",
        correctOption: "a"
    },
    {
        question: "What is Black Widow's real name?",
        a: "Yeleno Belova",
        b: "Wanda Maximoff",
        c: "Romanoff",
        d: "Agatha Harkness",
        correctOption: "c"
    },
    {
        question: "Where was the Soul Stone hidden in Infinity War?",
        a: "Thanos",
        b: "Earth",
        c: "Vormir",
        d: "Titan",
        correctOption: "c"
    },
    {
        question: "Who made a cameo as Loki in the Asgardian play in Thor:Ragnorok?",
        a: "Elon Musk",
        b: "Ken Jeong",
        c: "Stan Lee",
        d: "Matt Damon",
        correctOption: "d"
    },
    {
        question: "Who was the first actor to play James Rodes(aka War Machine) in the MCU?",
        a: "Terrence Howard",
        b: "Don Cheadle",
        c: "Robert Downey, Jr.",
        d: "None of the Above",
        correctOption: "a"
    },
    {
        question: "How many Infinity Stones are there?",
        a: "9",
        b: "5",
        c: "6",
        d: "4",
        correctOption: "c"
    },
    {
        question: "Who was Tony Stark's favorite band whose songs feature in the Iron Man movies?",
        a: "Queen",
        b: "AC/DC",
        c: "The Who",
        d: "Iron Maiden",
        correctOption: "b"
    },
    {
        question: "Which former Batman played a  Spiderman Villain the Vulture",
        a: "Robert Pattinson",
        b: "Michael Keaton",
        c: "Christian Bale",
        d: "Ben Affleck",
        correctOption: "b"
    }
];

const disneyQuestions = [
    {
        question: "What year did Walt Disney World open?",
        a: "1957",
        b: "1969",
        c: "1971",
        d: "1986",
        correctOption: "c"
    },
    {
        question: "What planet do guests visit in Star Wars: Galaxy's Edge?",
        a: "Tatoiine",
        b: "Hoth",
        c: "Earth",
        d: "Batuu",
        correctOption: "d"
    },
    {
        question: "In Monster's Inc., there's nothing more toxic or deadly than what?",
        a: "a human child",
        b: "a dog",
        c: "a cat",
        d: "a door",
        correctOption: "a"
    },
    {
        question: "What name did Ursula go by when she took human form?",
        a: "Ariel",
        b: "Vanessa",
        c: "Jessica",
        d: "Ursula",
        correctOption: "b"
    },
    {
        question: "What grammy winner composed the songs on the Tarzan soundtrack?",
        a: "Beyonce",
        b: "Taylor Swift",
        c: "Phil Collins",
        d: "Lady Gaga",
        correctOption: "c"
    },
    {
        question: "Who was experiment 626?",
        a: "Stitch",
        b: "Lilo",
        c: "Angel",
        d: "Leroy",
        correctOption: "a"
    },
    {
        question: "Walt Disney had how many children?",
        a: "4",
        b: "2",
        c: "3",
        d: "1",
        correctOption: "b"
    },
    {
        question: "Who said: The past can hurt. But the way I see it, you can either run from it or learn from it?",
        a: "Phil",
        b: "Mufasa",
        c: "Grandmother Willow",
        d: "Rifiki",
        correctOption: "d"
    },
    {
        question: "How many brother's does Prince Hans of the Southern Isles have in Frozen?",
        a: "12",
        b: "8",
        c: "4",
        d: "0",
        correctOption: "a"
    },
    {
        question: "How many fingers does Mickey Mouse have?",
        a: "5",
        b: "4",
        c: "3",
        d: "2",
        correctOption: "b"
    }
];

const trekQuestions = [
    {
        question: "Who played the original Captain Kirk?",
        a: "Patrick Stewart",
        b: "William Shatner",
        c: "Scott Bakula",
        d: "Jeffrey Hunter",
        correctOption: "b"
    },
    {
        question: "Who played Christopher Pike in the original pilot of Star Trek?",
        a: "Patrick Stewart",
        b: "William Shatner",
        c: "Scott Bakula",
        d: "Jeffrey Hunter",
        correctOption: "d"
    },
    {
        question: "Which Star Trek Captain had an artificial heart?",
        a: "Jonathon Archer",
        b: "Benjamin Sisko",
        c: "Katherine Janeway",
        d: "Jean Luc Picard",
        correctOption: "d"
    },
    {
        question: "Who was the first Vulcan science aboard the Starship Enterprise?",
        a: "Tuvok",
        b: "Sarek",
        c: "Spock",
        d: "T'Pol",
        correctOption: "d"
    },
    {
        question: "What species was the first to discover warp drive?",
        a: "Vulcans",
        b: "Klingons",
        c: "Humans",
        d: "Borg",
        correctOption: "a"
    },
    {
        question: "What Star Trek actor originally devised the Klingon language?",
        a: "Leonard Nimoy",
        b: "James Dohann",
        c: "Michael Ansara",
        d: "Mark Lenard",
        correctOption: "b"
    },
    {
        question: "What character was adopted by the Vulcan Ambassodor Sarek?",
        a: "Sylvia Tilly",
        b: "Spock",
        c: "Michael Burnam",
        d: "Sybok",
        correctOption: "c"
    },
    {
        question: "What character dies on the series finale of Star Trek Enterprise?",
        a: "Trip",
        b: "Hoshi",
        c: "Phlox",
        d: "T'Pol",
        correctOption: "a"
    },
    {
        question: "Who created the Bajoran wormhole?",
        a: "The Founders",
        b: "The Archones",
        c: "The Elders",
        d: "The Prophets",
        correctOption: "d"
    },
    {
        question: "Which Star Trek Captain loves baseball?",
        a: "Jean Luc Picard",
        b: "Benjamin Sisko",
        c: "James T. Kirk",
        d: "Jonathon Archer",
        correctOption: "b"
    }
];
