/***********************************************************************
Write a function `hasAllVowels(str)` that takes in a string and returns
true if the string contains every vowel (a, e, i, o, u) and false
otherwise.

Examples:

hasAllVowels('have you gone biking?'); // => true
hasAllVowels('get out of the way, silly'); // => true
hasAllVowels('bootcamp prep'); // => false
hasAllVowels('hello world'); // => false
***********************************************************************/

function hasAllVowels(str) {
    let strArray= str.split("")
    let vowels = {a: 0,
                e: 0,
                i: 0,
                o: 0,
                u: 0
                }

    for (let i = 0; i < strArray.length; i++) {
        
        if(vowels[strArray[i]]!== undefined) {
            vowels[strArray[i]]++
        }
    }

    for (let key in vowels) {
        if (vowels[key] < 1) {
            return false
        }
    }

    return true
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = hasAllVowels;
