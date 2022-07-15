/***********************************************************************
Write a function favoriteWord(favoriteLetter, sentence) that takes in a
single letter and a sentence string. The function should return the word
in the sentence that contains `favoriteLetter` the most. If there are
ties, return the word that appears first in the sentence.

Examples

favoriteWord('p', 'sinful caesar sipped his snifter') // => 'sipped'
favoriteWord('a', 'sinful caesar sipped his snifter') //=> 'caesar'
favoriteWord('s', 'sinful caesar sipped his snifter') //=> 'sinful'
favoriteWord('x', 'sinful caesar sipped his snifter') //=> ''
***********************************************************************/

// turn each word into an key. value is count of target
// if key doesnt exist create key =
// loop through object, scan for favorite letter  

function countLetter (favoriteLetter, word) {
    let chars = word.split("")
    let char = chars[i]
    let count = 0

    for (let i = 0; i < chars.length; i++) {
        if(char === favoriteLetter) {
            count++
        }
    }

    return count
}

function favoriteWord(favoriteLetter, sentence) {
    let words = sentence.split(" ")
    let fav = ""
    
    for (i = 0; i < words.length; i++) {
        let word = words[i]
        if(countLetter(favoriteLetter, fav) < countLetter(favoriteLetter, word)) {
            fav = word
        }
    }

    return fav
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = favoriteWord;
