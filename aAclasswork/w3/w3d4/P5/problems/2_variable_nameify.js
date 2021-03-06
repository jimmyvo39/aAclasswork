/*******************************************************************************
Write a function variableNameify(words) that takes in an array of words. The function
should return a string representing the variable name obtained by combining the
words and captitalizing them in mixCased style.

Examples:

variableNameify(['is', 'prime']) => 'isPrime'
variableNameify(['remove', 'last', 'vowel']) => 'removeLastVowel'
variableNameify(['MaX', 'VALUE']) => 'maxValue'
*******************************************************************************/

function variableNameify(words) {
  let newWords = []
  

  newWords.push(words[0].toLowerCase())

  for (let i = 1; i < words.length; i++) {
    let word = words[i]

    newWords.push(word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
  }

  return newWords.join("")
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = variableNameify;
