/***********************************************************************
Write a function `firstLastCap(sentence)` that takes in a sentence and
returns a new sentence where the first and last letters of each word is
uppercase. All other characters should be lowercase.

Examples:

firstLastCap('hello BOOTCAMP PrEp'); // =>'HellO BootcamP PreP'
firstLastCap('what is on the radio'); // =>'WhaT IS ON ThE RadiO'
***********************************************************************/

function changeFL(word) {
    let charArray = word.split("")
    let newWordArray = []
    let first = charArray[0].toUpperCase()
    let last = charArray[charArray.length -1].toUpperCase()

    newWordArray.push(first)

    for (i = 1; i < charArray.length -1; i += 1) { // only loop inside index
        let char = charArray[i]
        newWordArray.push(char.toLowerCase())
    }

    newWordArray.push(last)
    return newWordArray.join("");
}

function firstLastCap(sentence) {
    const words = sentence.split(" ");
    const newWords = [];

    for ( let i = 0; i < words.length; i += 1) {
        let word = words[i]
        newWords.push(changeFL(word))
    }

    return newWords.join(" ");
}

console.log(firstLastCap("hello BOOTCAMP PrEp"))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = firstLastCap;
