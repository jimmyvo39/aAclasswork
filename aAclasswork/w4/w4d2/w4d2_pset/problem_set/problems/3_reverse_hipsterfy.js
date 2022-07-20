/***********************************************************************
Write a function `reverseHipsterfy(sentence)` that takes in a sentence
and removes all vowels, except the last vowels of every word.

Examples:

reverseHipsterfy("proper"); // => 'prper'
reverseHipsterfy("proper tonic panther"); // => 'prper tnic pnther'
reverseHipsterfy("bootcamp prep"); // => 'btcamp prep'
reverseHipsterfy("towel flicker banana"); // => 'twel flcker bnna'
reverseHipsterfy("runner anaconda"); // => 'rnner ncnda'
reverseHipsterfy("turtle cheeseburger fries"); // => 'trtle chsbrger fres'
***********************************************************************/
function removeVow(word){
    let vowels = 'aeiou'
    let newWord =''
    let test = 0

    for (let i = word.length - 1; i >= 0; i--) {
        let char = word[i]
        
        if (!vowels.includes(char)) {
            newWord = char + newWord
        } else if (vowels.includes(char) && test === 0) {
            newWord = char + newWord
            test = 1
        }
    }
    return newWord;

}

function reverseHipsterfy(sentence) {
    let words = sentence.split(" ")
    let newSentence = []

    for (let i = 0; i < words.length; i++) {
        newSentence.push(removeVow(words[i]))
    }
    return newSentence.join(" ")
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = reverseHipsterfy;
