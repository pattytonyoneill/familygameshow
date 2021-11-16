/* jshint esversion: 8 */

// get the correct option of the current question
let correctAnswer = "";
let gameQuestions = [];


//shuffle array of questions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// Get the button elements and add event listeners to them
document.addEventListener('DOMContentLoaded', function () {
    // get all buttons
    const options = document.querySelectorAll('.option');
    // for each button
    options.forEach(option => {
        // add an event listener of click - pass in the click event
        option.addEventListener('click', event => {
            // get the id of the clicked option
            let id = event.target.id;
            // check if correct
            if (id == correctAnswer) {
                // its correct
                alert('Hey! You got it right! :D');
                incrementScore();
                if (gameQuestions.length > 0) {
                } else {
                    window.location.href = 'index.html';
                }
                getNextQuestion();
            } else {
                //its incorrect
                alert('Awwww...You got it wrong!');
                incrementWrongAnswer();
                if (gameQuestions.length > 0) {
                    getNextQuestion();
                } else {
                    window.location.href = 'index.html';
                }
            }
        });
    });

    runGame();
});

//run game based on game type chosen
function runGame() {

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    let gameType = params.category;

    document.getElementById("potterQuestions");
    document.getElementById("marvelQuestions");
    document.getElementById("disneyQuestions");
    document.getElementById("trekQuestions");

    if (gameType === "potter") {
        gameQuestions = shuffleArray(potterQuestions);
        getNextQuestion();
    } else if (gameType === "marvel") {
        gameQuestions = shuffleArray(marvelQuestions);
        getNextQuestion();
    } else if (gameType === "disney") {
        gameQuestions = shuffleArray(disneyQuestions);
        getNextQuestion();
    } else if (gameType === "trek") {
        gameQuestions = shuffleArray(trekQuestions);
        getNextQuestion();
    } else {
        alert(`Unknown game type ${gameType}`);
        throw `Unknown game type ${gameType}, aborting!`;
    }

}

function incrementScore() {
    // Gets the current score from the DOM and increase it
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

function incrementWrongAnswer() {
    // Gets the current tally of incorrect answers from the DOM and increase it
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

//gets a random questin and removes a question from list
function get_random(list) {
    let list_index = Math.floor(Math.random() * list.length);
    let current_question = list[list_index];
    gameQuestions.splice(list_index, 1);

    return current_question;
}

//**get quiz questions */
function getNextQuestion() {
    let rand = get_random(gameQuestions);

    correctAnswer = rand.correctOption;
    document.getElementById("question").textContent = rand.question;
    document.getElementById("a").textContent = rand.a;
    document.getElementById("b").textContent = rand.b;
    document.getElementById("c").textContent = rand.c;
    document.getElementById("d").textContent = rand.d;
}

