/*******************************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string containing
several words as input. Remove the last vowel from each word. 'y' is not a vowel.

Examples:

hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"
*******************************************************************************/

//scan backwards. unshift text
// break loop at first vowel
// start new loop unshift as regular

function hipsterfy(sentence) {
  let vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]
  let newArray = []
  let words = sentence.split(" ")//array of words
  
  for (i = 0; i < words.length; i++) {
    let newWord = []
    let chars = words[i].split("")//array of characters
    
    for (j = chars.length - 1; j >= 0; j--) {
      if (!vowels.includes(chars[j])) {
        newWord.unshift(chars[j])
      } else {
        break
      }
    } 

    for (k = j -1 ; k >=0; k--) {
      newWord.unshift(chars[k])
    }
    
    newArray.push(newWord.join(""))
  }
  
  return newArray.join(" ")
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hipsterfy;
