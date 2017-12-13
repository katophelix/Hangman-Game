// //make music play at open - 
// get song - 

// want music to play with relation 
// to word need to find - cats is answer soen gfrom cats plays???
// need to figure how to connect somgs to words






function play(){
    
    var audio = document.getElementById("audio");  
    audio.play();
}



// make Array of Word Options (all lowercase)
var words = ["cats", "wicked", "rent", "oklahoma", "phantom", "matilda", "aladdin",
    "evita", "cabaret", "tommy", "annie", "dreamgirls", "chicago", "fiddler", "pippin", "hair"];
var guesses;
var wordArr = [];
var dashes;
var dashWordArr = [ ];
var wrgArr = [];
var guessArray = [];
var numberOfGuesses = 10;
var numWins = 0;
var numLosses = 0;
var wordPick = "";




// starts adn restarts game.
// 
function startGame() {

    firstMove = true;
    // guesses back to 0.
    guesses = 0;

    // chosen word is chosen randomly from words. 
    var index = Math.floor((Math.random() * words.length));
    wordPick = words[index];
    



    // word becomes list of letters
    for (var i = 0; i < wordPick.length; i++) {
        wordArr.push(wordPick[i]);
    }

    // count the number of letters in the word
    dashes = wordPick.length;
   

    // Fill up the blanksAndSuccesses list with appropriate number of blanks.
    // This is based on number of letters in solution.
    for (var i = 0; i < dashes; i++) {
        // make a list of `_`
        // ex dog = ['d', 'o','g'] and generate a new array like ['_', '_', '_']
        dashWordArr.push("_");
    }

    
}

function reset(){
    wordPick = "";
    wordArr = [];

    // reset the guess and success array at each round. Array of letters (first array, for succesful guesses)
    dashWordArr = [];
    guessArray = [];
    // reset the wrong guesses from the previous round. Array of letters (second arrays, one for fails)
    wrgArr = [];


// update html on the page
    // set #guesses-left to numberOfGuesses
    var guessesLeft = document.getElementById("guesses-left");
    guessesLeft.innerHTML = "";

    // set #word-blanks to the blanks at the beginning of each round in the HTML
    var wordBlanks = document.getElementById("word-blanks");
    wordBlanks.innerHTML = dashWordArr.join("");

    // set #wrong-guesses to empty / clears the wrong guesses from the previous round by
    var wrongGuesses = document.getElementById("wrong-guesses");
    wrongGuesses.innerHTML = "";



}

// checkLetters() function
// It's where we will do all of the comparisons for matches.
//  not being called here. It's just being made for future use.
function checkLetters(letter) {

    //If the letter is in wrgArr, indexOf will return something
    //other than -1
    if (wrgArr.indexOf(letter) != -1){
        return;  //Exit the function
    }


    var letterInWord = false;
    // Check if a letter exists inside the array at all. (by looping thru the word as an array)
    for (var i = 0; i < dashes; i++) {
        if (letter === wordArr[i]) {
            // If the letter exists then toggle this boolean to true. This will be used in the next step.
            letterInWord = true;
        }
    }

    // If `letterInWord`, then figure out exactly where .
    if (letterInWord === true) {
        // Loop through the word, one letter at a time
        // add to blanksAndSuccesses with every instance of the letter.
        for (var i = 0; i < wordArr.length; i++){
            // if wordPick letter is the same as letter
            if (wordArr[i] === letter) {
                // Here we set the specific space in blanks and letter equal to the letter when there is a match.
                dashWordArr[i] = letter;

            }
        }

    } else {// If the letter doesn't exist at all...
        // ..then we add the letter to the list of wrong letters, and we subtract one of the guesses.
        wrgArr.push(letter);
        guesses++;
    }
}

// roundComplete() function

// Here we will have all of the code that needs to be run after each guess is made
function roundComplete() {

    // First, log an initial status update in the console telling us how many wins, losses, and guesses are left.
    console.log(numWins);
    console.log(numLosses);
    console.log(numberOfGuesses);

    // Update the HTML to reflect the new number of guesses. Also update the correct guesses.
    var guessesLeft = document.getElementById("guesses-left");
    guessesLeft.innerHTML = "<p>Number of Guesses = " + guesses + "</p><p>Guesses remaining = " + (numberOfGuesses - guesses) + "</p>";
    // Update #word-blanks to show any correct guesses
    var wordBlanks = document.getElementById("word-blanks");
    wordBlanks.innerHTML = dashWordArr.join(" ");

    // Update #wrong-guesses to show the wrong guesses
    var wrongGuesses = document.getElementById("wrong-guesses");
    wrongGuesses.innerHTML = wrgArr.join(", ");

    // If we have gotten all the letters to match the solution...
    var word = dashWordArr.join("");
    var secretWord = wordPick;
    if (word === secretWord){
        // ..add to the win counter & give the user an alert. - need to add prunt last letter
        numWins++;
        alert("And the Tony goes to .... ")

        // Update the win counter in the HTML & restart the game.
        reset();
        startGame();

        var wins = document.getElementById("wins");
        wins.innerHTML = numWins;
    } else if (numberOfGuesses - guesses === 0){ // If we've run out of guesses..
        numLosses++; // Add to the loss counter.
        alert("We decided to go in another direction, but we will definetly keep you in mind for future projects!"); // Give the user an alert.
        reset(); // Update the loss counter in the HTML.
        startGame(); // Restart the game.

        var losses = document.getElementById("losses");
        losses.innerHTML = numLosses;

    }
}

// on initial page load Starts the Game by running the startGame() function
startGame();
var firstMove = true;

// Then initiate the function for capturing key clicks.
document.onkeyup = function(event) {
    if (firstMove){
        firstMove = false;
        roundComplete();
    } else {
        // Converts all key clicks to lowercase letters.
        var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
        // check for correct letters.
        checkLetters(letterGuessed);
        // Runs the code after each round is done.
        roundComplete();
    }
};


