/***********************************************************************
Write a function vowelShift(sentence) that takes in a sentence string.
The function should return a new sentence, where every vowel is replaced
with the next vowel in the alphabet.

var vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:

vowelShift('bootcamp'); // => 'buutcemp'
vowelShift('hello world'); // => 'hillu wurld'
vowelShift('on the hunt'); // => 'un thi hant'
***********************************************************************/

function vowelShift(sentence) {
    let chars = sentence.split("") 
    let vowelShift = {a: "e", e: "i", i: "o", o: "u", u: "a"}
    let newSentence = []

    for (let i = 0; i < chars.length; i++) {
        let char = chars[i]

        if (vowelShift[char] !== undefined) {
            newSentence.push(vowelShift[char])
        } else {
            newSentence.push(char)
        }
    }

    return newSentence.join("")
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = vowelShift;
