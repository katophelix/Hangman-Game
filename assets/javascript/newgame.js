// select a random word from a list
var words = ["cats", "wicked", "rent", "oklahoma", "phantom", "matilda", "aladdin",
    "evita", "cabaret", "tommy", "annie", "dreamgirls", "chicago", "fiddler", "pippin", "hair"];

    

    var chosenWord = words[Math.floor(Math.random() * words.length)];

    console.log(chosenWord);


// user picks a letter

// compare user letter to letters in word

// word turns into array of letters
var letters = chosenWord;
for (var i = 0; i < letters.length; i++) {
    console.log(letters.charAt(i));
    
}
// set up dashes = to number of letters in word
var dashesPrint = [];
dashes = letters.length;
console.log(dashes);


for( var i = 0; i < dashes.length; i++);{

    dashesPrint.push("_");
    console.log(dashesPrint);
}


