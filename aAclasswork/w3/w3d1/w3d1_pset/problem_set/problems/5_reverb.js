/***********************************************************************
Write a function `reverb(word)` that takes in a word string and returns
the word with all characters after the last vowel repeated.

Examples:

reverb('running'); // => 'runninging'
reverb('wild'); // => 'wildild'
reverb('debugged'); // => 'debuggeded'
reverb('my'); // => 'my'
***********************************************************************/

function reverb(word) {
    let vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]
    let chars = word.split("")

    for (i = chars.length - 1; i >= 0; i--) {
        if (vowels.includes(chars[i])){
            return word + word.slice(i)
        }
    }

    return word
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = reverb;
