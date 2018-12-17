//Array of computerchoices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// this variable should be defined at html
var playerGuessSoFar = [];
//variables to see the number of win,loss and guesses on screen
var win = 0;
var loss = 0;
var guesses= 9;
//linking variables with HTML part through id
var numGuesses = document.getElementById("guesses-left");
var guessesSoFar = document.getElementById("guessed-letter");
var wins = document.getElementById("win");
var losses = document.getElementById("loss");

//while the player presses any key, game will start 
//function starts running 
document.onkeyup = function(event) {
//while the player presses any key is going to be shown as he guess so far
var playerGuess = event.key;
playerGuessSoFar.push(playerGuess);

//see which keys are pressed on screen as both are served for the same
guessesSoFar = playerGuessSoFar;

// computer chooses random letter from computer choices
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//when player guess and computer guess matches till remaining guesses, the player win. 
    if (playerGuess === computerGuess) {
        win++;
        alert("Wow! You are psychic!")
        guesses = 9;
        playerGuessSoFar.length = 0;
    }
//when player guess and computer guess doesnot match till remaining guesses, the player lose.
    else if (guesses == 0){
        loss++;
        alert('You lost. Try again!');
        guesses = 9;
        playerGuessSoFar.length = 0;
    }
 //decrementing the guesses    
    else if (playerGuess !== computerGuess){
        guesses--; 
    }  

//variable created for exactly what screen is gonna showing...
//linking innerbody of html 
var html = 
"<p>Wins: " + win + "</p>" +
"<p>Losses: " + loss + "</p>" +
"<p>Guesses Left: " + guesses + "</p>" +
"<p>Your Guesses so far: " + playerGuessSoFar.join(", ") + "</p>";

document.querySelector("#game").innerHTML = html;
}
