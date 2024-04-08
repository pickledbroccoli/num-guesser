let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// generate secret target number 0-9 to guess
const generateTarget = () => Math.floor(Math.random() * 9);

// compare guesses - return True if human guess is closer (or tied), false if computer
const compareGuesses = (humanGuess, computerGuess, target) => Math.abs(humanGuess - target) <= Math.abs(computerGuess - target) ? true : false;

// increasing the winner's score
function updateScore(winner) {
    (winner === 'human') ? humanScore++ : computerScore++;
}

// update round number
function advanceRound() {
    currentRoundNumber++;
}