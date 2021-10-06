document.addEventListener("DOMContentLoaded", function() {
	let buttons = document.getElementsByTagName("button");

	for (let button of buttons) {
		button.addEventListener("click", function() {
			if (this.getAttribute("data-type") === "submit") {
				checkAnswer();
			} else {
				let gameType = this.getAttribute("data-type");
				runGame(gameType);
			}
		});
	}

	document.getElementById("answer-box").addEventListener("keydown", function(event) {
		if (event.key === "Enter") {
			checkAnswer();
		}
	});

	runGame("potter");
});

function displayPotterQuestion{
    const questions = [
        {
            question: "How many Harry Potter Movies?",
            A: "6",
            B: "8",
            C: "9",
            D: "12",
            correctAnswer: "B"
        }
        {
            question: "What future Batman actor played Triwizard Tournament entrant Cedric Diggory?",
            A: "Robert Pattinson",
            B: "Christian Bale",
            C: "Ben Affleck",
            D: "Adam West",
            correctAnswer: "A" 
        }
        {
            question: "Who was Hermione's date at the Yule Ball?",
            A: "Harry Potter",
            B: "Lucious Molfoy",
            C: "Ronald Weasly",
            D: "Viktor Krum",
            correctAnswer: "D" 
        }
        {
            question: "What was Harry Potter's mom's real name?",
            A: "Rose",
            B: "Tulip",
            C: "Lily",
            D: "Gertrude",
            correctAnswer: "C" 
        }
        {
            question: "What future Dr Who played Barty Crouch, Jr. in the Goblet of Fire?",
            A: "David Tennant",
            B: "Matt Smith",
            C: "Peter Capaldi",
            D: "Robert Pattinson",
            correctAnswer: "A" 
        }
        {
            question: "Who was the original actor to play Dumbledore?",
            A: "Michael Gambon",
            B: "David Tennant",
            C: "Robert Pattinson",
            D: "Richard Harris",
            correctAnswer: "D"  
        }
        {
            question: "What floor was the forbidden corridor in the Philosopher's Stone?",
            A: "3",
            B: "1",
            C: "4",
            D: "2",
            correctAnswer: "A"  
        }
        {
            question: "What animal represents Hufflepuff house?",
            A: "snake",
            B: "lion",
            C: "badger",
            D: "eagle",
            correctAnswer: "C"  
        }
        {
            question: "Who was the Minister of Magic for the 1st five movies?",
            A: "Barty Crouch, Sr.",
            B: "Cornelius Fudge",
            C: "Barty Crouch, Jr.",
            D: "Rufus Scrimgeour",
            correctAnswer: "B"  
        }
        {
            question: "What class has a different teacher each year?",
            A: "Potions",
            B: "Defence of the Dark Arts",
            C: "Divination",
            D: "Charms",
            correctAnswer: "B"  
        }
    ]
}
function displayMarvelQuestion { 
    const questions = [
        {
            question: "What was the first Marvel movie?",
            A: "The Incredible Hulk",
            B: "Iron Man",
            C: "Thor",
            D: "Captain America: The First Avenger",
            correctAnswer: "B"
        }
        {
            question: "Who had a cameo in every Marvel film up to Avengers:Endgame?",
            A: "Elon Musk",
            B: "Ken Jeong",
            C: "Jenna Coleman",
            D: "Stan Lee",
            correctAnswer: "D"
        }
        {
            question: "What is Captain America's shield made out of?",
            A: "Vibranium",
            B: "Steel",
            C: "Aluminum",
            D: "Iron",
            correctAnswer: "A"
        }
        {
            question: "What is Black Widow's real name?",
            A: "Yeleno Belova",
            B: "Wanda Maximoff",
            C: "Romanoff",
            D: "Agatha Harkness",
            correctAnswer: "C"
        }
        {
            question: "Where was the Soul Stone hidden in Infinity War?",
            A: "Thanos",
            B: "Earth",
            C: "Vormir",
            D: "Titan",
            correctAnswer: "C"
        }
        {
            question: "Who made a cameo as Loki in the Asgardian play in Thor:Ragnorok?",
            A: "Elon Musk",
            B: "Ken Jeong",
            C: "Stan Lee",
            D: "Matt Damon",
            correctAnswer: "D"
        }
        {
            question: "Who was the first actor to play James Rodes(aka War Machine) in the MCU?",
            A: "Terrence Howard",
            B: "Don Cheadle",
            C: "Robert Downey, Jr.",
            D: "None of the Above",
            correctAnswer: "A"
        }
        {
            question: "How many Infinity Stones are there?",
            A: "9",
            B: "5",
            C: "6",
            D: "4",
            correctAnswer: "C"
        }
        {
            question: "Who was Tony Stark's favorite band whose songs feature in the Iron Man movies?",
            A: "Queen",
            B: "AC/DC",
            C: "The Who",
            D: "Iron Maiden",
            correctAnswer: "optionB"
        }
        {
            question: "Which former Batman played a  Spiderman Villain the Vulture",
            A: "Robert Pattinson",
            B: "Michael Keaton",
            C: "Christian Bale",
            D: "Ben Affleck",
            correctAnswer: "optionB"
        }
    ]
}
function displayDisneyQuestion { 
    const questions = [
        {
            question: "What year did Walt Disney World open?",
            A: "1957",
            B: "1969",
            C: "1971",
            D: "1986",
            correctAnswer: "C"
        }
        {
            question: "What planet do guests visit in Star Wars: Galaxy's Edge?",
            A: "Tatoiine",
            B: "Hoth",
            C: "Earth",
            D: "Batuu",
            correctAnswer: "D"
        }
        {
            question: "In Monster's Inc., there's nothing more toxic or deadly than what?",
            A: "a human child",
            B: "a dog",
            C: "a cat",
            D: "a door",
            correctOption: "A"
        }
        {
            question: "What name did Ursula go by when she took human form?",
            A: "Ariel",
            B: "Vanessa",
            C: "Jessica",
            D: "Ursula",
            correctAnswer: "B"
        }
        {
            question: "What grammy winner composed the songs on the Tarzan soundtrack?",
            A: "Beyonce",
            B: "Taylor Swift",
            C: "Phil Collins",
            D: "Lady Gaga",
            correctOption: "C"
        }
        {
            question: "Who was experiment 626?",
            A: "Stitch",
            B: "Lilo",
            C: "Angel",
            D: "Leroy",
            correctOption: "A"
        }
        {
            question: "Walt Disney had how many children?",
            A: "4",
            B: "2",
            C: "3",
            D: "1",
            correctOption: "B"
        }
        {
            question: "Who said: The past can hurt. But the way I see it, you can either run from it or learn from it?",
            A: "Phil",
            B: "Mufasa",
            C: "Grandmother Willow",
            D: "Rifiki",
            correctAnswer: "D"
        }
        {
            question: "How many brother's does Prince Hans of the Southern Isles have in Frozen?",
            A: "12",
            B: "8",
            C: "4",
            D: "0",
            correctAnswer: "A"
        }
        {
            question: "How many fingers does Mickey Mouse have?",
            A: "5",
            B: "4",
            C: "3",
            D: "2",
            correctAnswer: "B"
        }
    ]
}
function displayTrekQuestion { 
    const questions = [
        {
            question: "Who played the original Captain Kirk?",
            optionA: "Patrick Stewart",
            optionB: "William Shatner",
            optionC: "Scott Bakula",
            optionD: "Jeffrey Hunter",
            correctOption: "optionB"
        }
        {
            question: "Who played Christopher Pike in the original pilot of Star Trek?",
            optionA: "Patrick Stewart",
            optionB: "William Shatner",
            optionC: "Scott Bakula",
            optionD: "Jeffrey Hunter",
            correctOption: "optionD"
        }
        {
            question: "Which Star Trek Captain had an artificial heart?",
            optionA: "Jonathon Archer",
            optionB: "Benjamin Sisko",
            optionC: "Katherine Janeway",
            optionD: "Jean Luc Picard",
            correctOption: "optionD"
        }
        {
            question: "Who was the first Vulcan science aboard the Starship Enterprise?",
            optionA: "Tuvok",
            optionB: "Sarek",
            optionC: "Spock",
            optionD: "T'Pol",
            correctOption: "optionD"
        }
        {
            question: "What species was the first to discover warp drive?",
            optionA: "Vulcans",
            optionB: "Klingons",
            optionC: "Humans",
            optionD: "Borg",
            correctOption: "optionA"
        }
        {
            question: "What Star Trek actor originally devised the Klingon language?",
            optionA: "Leonard Nimoy",
            optionB: "James Dohann",
            optionC: "Michael Ansara",
            optionD: "Mark Lenard",
            correctOption: "optionB"
        }
        {
            question: "What character was adopted by the Vulcan Ambassodor Sarek?",
            optionA: "Sylvia Tilly",
            optionB: "Spock",
            optionC: "Michael Burnam",
            optionD: "Sybok",
            correctOption: "optionC"
        }
        {
            question: "What character dies on the series finale of Star Trek Enterprise?",
            optionA: "Trip",
            optionB: "Hoshi",
            optionC: "Phlox",
            optionD: "T'Pol",
            correctOption: "optionA"
        }
        {
            question: "Who created the Bajoran wormhole?",
            optionA: "The Founders",
            optionB: "The Archones",
            optionC: "The Elders",
            optionD: "The Prophets",
            correctAnswer: "optionD"
        }
        {
            question: "Which Star Trek Captain loves baseball?",
            optionA: "Jean Luc Picard",
            optionB: "Benjamin Sisko",
            optionC: "James T. Kirk",
            optionD: "Jonathon Archer",
            correctAnswer: "optionB"
        }
    ]
}



function runGame(gameType) {

	// 

	document.getElementById("answer-box").value = "";
	document.getElementById("answer-box").focus();


	if (gameType === "potter") {
		displayPotterQuestion;
	} else if (gameType === "marvel") {
		displayMarvelQuestion;
	} else if (gameType === "disney") {
		displayTrekQuestion;
	} else if (gameType === "trek") {
        displayTrekQuestion;
    } else {
		alert(`Unknown game type ${gameType}`);
		throw `Unknown game type ${gameType}, aborting!`;
	}

}

function calculateCorrectAnswer() {

	// Compare Answer given to correct answer
    console.log('In here')
	
	if (operator === "potter") {
		return [question, optionA, optionB, optionC, optionD];
	} else if (operator === "marvel") {
		return [question, optionA, optionB, optionC, optionD];
	} else if (operator ==="disney") {
		return [question, optionA, optionB, optionC, optionD];
	} else if (operator === "trek") { 
        return [question, optionA, optionB, optionC, optionD];
    } else {
		alert(`Unimplemented operator ${operator}`);
		throw `Unimplemented operator ${operator}, aborting!`;
	}
}

function incrementScore() {

	// Gets the current score from the DOM and increments it

	let oldScore = parseInt(document.getElementById("score").innerText);
	document.getElementById("score").innerText = ++oldScore;

}

function incrementWrongAnswer() {

	// Gets the current tally of incorrect answers from the DOM and increments it

	let oldScore = parseInt(document.getElementById("incorrect").innerText);
	document.getElementById("incorrect").innerText = ++oldScore;

}

function displayPottertQuestion() {

	document.getElementById("question").textContent ="question:";
    document.getElementById("optionA").textContent = optionA;
    document.getElementById("optionB").textContent = optionB;
    document.getElementById("optionC").textContent = optionC;
    document.getElementById("optionD").textContent = optionD;

}

function displayMarvelQuestion(operand1, operand2) {

	document.getElementById("question").textContent ="question:";
    document.getElementById("optionA").textContent = optionA;
    document.getElementById("optionB").textContent = optionB;
    document.getElementById("optionC").textContent = optionC;
    document.getElementById("optionD").textContent = optionD;
}

function displayDisneyQuestion() {

	document.getElementById("question").textContent ="question:";
    document.getElementById("optionA").textContent = optionA;
    document.getElementById("optionB").textContent = optionB;
    document.getElementById("optionC").textContent = optionC;
    document.getElementById("optionD").textContent = optionD;

}

function displayTrekQuestion() {
    
    document.getElementById("question").textContent ="question:";
    document.getElementById("optionA").textContent = optionA;
    document.getElementById("optionB").textContent = optionB;
    document.getElementById("optionC").textContent = optionC;
    document.getElementById("optionD").textContent = optionD;
    