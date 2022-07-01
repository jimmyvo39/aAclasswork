/******************************************************************************
Write a function reverseSentence(sentence) that returns a string where all the
words in the input sentence are reversed. Don't use Array#reverse.

Examples:

reverseSentence("Go to the store") => "store the to Go"
reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*******************************************************************************/
// split sentence , interating in order, unshift each element into new array, join array into new sentence
function reverseSentence(sentence) {
  let sentenceArray = sentence.split(" ")
  let newArray = []
  for (i = 0; i < sentenceArray.length; i += 1) {
    newArray.unshift(sentenceArray[i])
  }
  return newArray.join(" ") 
}
console.log(reverseSentence("Go to the store"))


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseSentence;
