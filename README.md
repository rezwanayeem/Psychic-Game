# Psychic Game

Overview
In this assignment, you'll create one of two possible computer games: Word Guess or Psychic. These apps will run in the browser, and feature dynamically updated HTML and CSS powered by your JavaScript code.


Task:

1.Create a new GitHub repo called Psychic-Game, in accordance with the assignment you choose to complete. Then, clone it to your computer.

2.Inside your local git repository, create an index.html.

3.While still in your local git repo, create a directory called assets.

4.cd your way into the assets folder, then make three additional folders: javascript, css and images.

5.In the javascript folder, make a file called game.js. Use the src attribute of the script tag to link to this file, rather than embedding the code directly in your HTML document.
In the css folder, make a file called style.css.
Also in the css folder, make a file called reset.css. Paste into it the code from the Meyerweb reset stylesheet. If you opt to use Bootstrap instead of writing your own CSS, skip this step, and simply include a link to Bootstrap via CDN.
In the images folder, save whatever images you plan on using.
├── assets
|  ├── css
|  |  └── style.css
|  ├── images
|  └── javascript
|     └── game.js
└── index.html
Push the above changes to GitHub.



Put the following text on your page:


Guess what letter I'm thinking of

Wins: (# of times the user has guessed the letter correctly)

Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

Guesses Left: (# of guesses left. This will update)

Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).