// Write a function `wordYeller(sentence)` that takes in a sentence string as
// input. It should return the sentence where every word has an exclamation
// point behind it, except words that already have punctuation. Punctuation
// marks are ". , ! ? ; :"
//
// Example 1
// var sent = "Stop it now! Please, wont you stop?";
// var yelledWords = wordYeller(sent);
// yelledWords === "Stop! it! now! Please, wont! you! stop?"; // => true
//
// Example 2
// var words = "Go to the store and grab the following: milk, bread, run, and cake";
// wordYeller(words) === "Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!"; // => true

//split the sentence into words
//loop through each word
//split the words into character
//check indexof last character agaignt array of punctuations
//if it matches then break the loop and push the word to new array
//if the last character is not a punctuation make a new word by concatonating

//make checking for puntuations a helper function

function hasPunctuation(word) {
  
    let punctuation = [".", ",", "!", "?", ":", ";"]
    let char = word.split("")
    
    return punctuation.indexOf(char[(char.length -1)]) > -1 
  }

function wordYeller(sentence) {
    let newArray = []
    let sentenceArray = sentence.split(" ")
    
    for (i = 0; i < sentenceArray.length; i += 1) {
        let word = sentenceArray[i]
        let newWord = word.concat("!")
        
        if (hasPunctuation(word)) {
            newArray.push(word)
        }
        else {
            newArray.push(newWord)
        }
    }
    return newArray.join(" ")
}


console.log(wordYeller("Stop it now! Please, wont you stop?"))
