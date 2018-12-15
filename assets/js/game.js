//all variables...
var letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var playerGuessed = [];
var playerGuess = null;
var computerGuess = [];


// connect to HTML through id to visualization of guessesLeft for player .  

var GuessesLeft = function () {
    document.querySelector("#guessLeft").innerHTML = "Guesses Left: " + guessesLeft;
};

//computer chooses random letter from its choices in the variable at the top. console log chosen letter.

var playerGuess = function () {
    playerGuess = letter[Math.floor(Math.random() * letter.length)];
    console.log(playerGuess);
};

//display all keys pressed by player and separate by a comma

var GuessesSoFar = function () {
    document.querySelector('#playerGuess').innerHTML = "Your Guesses so far: " + playerGuessed.join(', ');
};

//reset everything after win or lose

var reset = function () {
    guessesLeft = 9;
    guessedLetters = [];

    GuessesLeft();
    playerGuess();
    GuessesSoFar();
}

// When the player presses a key, it will run the following function...

document.onkeyup = function (event) {

//remaining guesses

    guessesLeft--;

    console.log(event.key);
    console.log(playerGuessed);
    
//make player each guess lower case 

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

//push the guessed letter to player Guess, update var functions.

    playerGuessed.push(userGuess);
    GuessesLeft();
    GuessesSoFar();

//when player still has guesses remaining and get letter, they win. if they have no guesses left, they lose.
    
    if (guessesLeft > 0) {
        if (userGuess == playerGuess) {
            wins++;
            document.querySelector('#win').innerHTML = "Wins: " + wins;
            alert("Wow! You are psychic! Try again!");
            reset();
        }
    } else if (guessesLeft == 0) {
            losses++;
            document.querySelector('#loss').innerHTML = "Losses: " + losses;
            alert("Oops, you're not psychic... try again!");
            reset();
    }

};