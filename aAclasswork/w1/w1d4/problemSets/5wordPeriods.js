// Write a function `wordPeriods(sentence)` that takes in a sentence and returns a new
// sentence where every word has period after it.
//
// Examples:
//
// wordPeriods('hello world'); // => 'hello. world.'
// wordPeriods('what is the weather today'); // => 'what. is. the. weather. today.'

//split sentence to new array
// join new array with periods

function wordPeriods(sentence) {
    let sentenceArray = sentence.split(" ")
    return sentenceArray.join(". ") + '.'
}

console.log(wordPeriods("what is the weather today"))