/*******************************************************************************
Write a function hipsterfyWord(word) that takes takes in a string and returns
the string with the last vowel removed. 'y' is not a vowel.

Examples:

hipsterfyWord('proper') => 'propr'
hipsterfyWord('tonic') => 'tonc'
hipsterfyWord('PANTHER') => 'PANTHR'
hipsterfyWord('BACKWARDS') => 'BACKWRDS'
*******************************************************************************/

function hipsterfyWord(word) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
  let chars = word.split("")
  newWord = []

  for (i = chars.length -1; i >= 0 ; i--) { // going through words backwards
    if (vowels.indexOf(chars[i]) > -1) {
      break
    } 
      newWord.unshift(chars[i])
  }
  for (j = i - 1; j >= 0 ; j--) { // going through words backwards starting from the first vowel break
     newWord.unshift(chars[j])
  }

  return newWord.join("")
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hipsterfyWord;
