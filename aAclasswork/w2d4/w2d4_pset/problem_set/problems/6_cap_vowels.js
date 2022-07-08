/***********************************************************************
Write a function called capVowels(string) that takes in a string and
returns the string where every vowel is capitalized. All other letters
should be lowercased.

Hint: Don't forget that strings are immutable!

Examples:

capVowels('hello world'); // => 'hEllO wOrld'
capVowels('HELLO WORLD'); // => 'hEllO wOrld'
capVowels('boOtCamP PreP'); // => 'bOOtcAmp prEp'
***********************************************************************/

function capVowels(string) {
    let charArr = string.split("")
    let newStrArr = []
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    
    for (i = 0; i < charArr.length; i++) {
        let char = charArr[i]

        if (vowels.indexOf(char) > -1) {
            newStrArr.push(char.toUpperCase())
        } else {
            newStrArr.push(char.toLowerCase())
        }
    }
    
    return newStrArr.join("")
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = capVowels;
