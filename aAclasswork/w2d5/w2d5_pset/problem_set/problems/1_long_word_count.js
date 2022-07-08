/***********************************************************************
Write a function `longWordCount(string)` that takes in a string and
returns the number of words longer than 7 characters.

Examples:

longWordCount(""); // => 0
longWordCount("short words only"); // => 0
longWordCount("one reallylong word"); // => 1
longWordCount("two reallylong words inthisstring"); // => 2
longWordCount("allwordword longwordword wordswordword"); // => 3
longWordCount("seventy schfifty five"); // => 1
***********************************************************************/
// split into array. loop array count words with more than 7 characters

function longWordCount(sentence) {
    let wordArray = sentence.split(" ")
    let count = 0

    for (i =0; i < wordArray.length; i++) {
        let word = wordArray[i]

        if (word.length > 7) {
            count += 1
        }
    }

    return count
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = longWordCount;
