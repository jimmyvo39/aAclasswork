/***********************************************************************
Write a function oddWordsOut(sentence) that takes in a sentence string
and returns the sentence where words with an odd number of characters
are removed.

Examples:

oddWordsOut('go to the store and buy milk'); // => 'go to milk'
oddWordsOut('what is the answer'); // => 'what is answer'
***********************************************************************/
function oddWord(word) {
    return (word.length % 2 === 1)
}

function oddWordsOut(sentence) {
    let words = sentence.split(" ")
    let newArray =[]

    for (i = 0; i < words.length; i++){
        let word = words[i]

        if (oddWord(word)) {
            continue
        }
        
        newArray.push(word)

    }

    return newArray.join(" ")
}
// O(n) 
//linear function

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = oddWordsOut;
