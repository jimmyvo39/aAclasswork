/***********************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string
containing several words as input. Remove the last vowel from each word.
`'y'` is not a vowel.

Examples:

hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"
***********************************************************************/

//split into array loop through each word
//scan words backwards at the first vowel unshift to new word
//push new words to new array

function hipsterfy(sentence) {
    let words = sentence.split(" ")
    let newSentence = []
    let vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]
    
    for (i = 0; i < words.length; i++) {
        let word = words[i]
        let char = words[i].split("")
        let newWord = []
        
        for (j = word.length -1; j >= 0; j--) { 

            if (vowels.indexOf(char[j]) > -1) {
                break
            }

            newWord.unshift(char[j])
        }
        for (k = j -1 ; k >= 0; k--) { 
            newWord.unshift(char[k])
        }

        newSentence.push(newWord.join(""))
    }

    return newSentence.join(" ")

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = hipsterfy;
