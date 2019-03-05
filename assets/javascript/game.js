var letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
];

var computersLetterIndex;
var computersLetter;
var usersLetter;
var guessesRemaining = 0;
var guessedLetters = [];
var totalWins = 0;
var totalLosses = 0;

const maxGuesses = 10;

function startGame () {
    //reset number of remaining tries
    guessesRemaining = maxGuesses;
    document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guessesRemaining;
    //set wins and losses
    document.getElementById("wins").innerHTML = "Wins: " + totalWins;
    document.getElementById("losses").innerHTML = "Losses: " + totalLosses;
    //reset guessed letters to empty
    guessedLetters = [];
    document.getElementById("guessesSoFar").innerHTML = "Your guesses so far: " + guessedLetters;
    //computer generates a random letter
    computersLetterIndex = Math.floor(Math.random() * 27);
    //stores it as a variable
    computersLetter = letters[computersLetterIndex];
}
startGame();

//listen for keystroke and make lower case
document.onkeyup = function (event) {
    usersLetter = event.key.toLowerCase();
    if (letters.indexOf(usersLetter) !== -1) {
    compareLetters();
    }
    checkLoss();
};

//compare guess to computer's letter
//if a match, wins up by 1
//if not a match, put letter in array of guesses so far and decrease guesses left
function compareLetters () {
    if (usersLetter === computersLetter) {
        totalWins++;
        startGame();
    } else {
        guessedLetters.push(usersLetter);
        document.getElementById("guessesSoFar").innerHTML = "Your guesses so far: " + guessedLetters;
        guessesRemaining--;
        document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guessesRemaining;
    }
};

//if guesses left equals 0, losses up by 1
//start over
function checkLoss () {
    if (guessesRemaining <= 0) {
        totalLosses++;
        startGame();
    }
};


