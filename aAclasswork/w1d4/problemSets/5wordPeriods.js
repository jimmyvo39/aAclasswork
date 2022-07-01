// Write a function `wordPeriods(sentence)` that takes in a sentence and returns a new
// sentence where every word has period after it.
//
// Examples:
//
// wordPeriods('hello world'); // => 'hello. world.'
// wordPeriods('what is the weather today'); // => 'what. is. the. weather. today.'

function wordPeriods(sentence) {
    
    sentence.split(" ").join(". ")
    console.log(sentence)
}
sentence = 'hello world'
wordPeriods(sentence)