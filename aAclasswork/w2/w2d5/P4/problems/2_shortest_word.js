/*******************************************************************************
Write a function shortestWord(sentence) that returns the shortest word of a sentence.
You can assume that the words of the sentence all have different lengths.

Examples:

shortestWord('app academy is cool') => 'is'
shortestWord('bootcamp prep') => 'prep'
*******************************************************************************/

//split into array 
//set shortWord to first word
//loop through each word comparing lengths

function shortestWord(sentence) {
  let words = sentence.split(" ")
  let obj = {}
  obj["short"] = words[0]

  for (i = 1; i < words.length; i++) {
    if (obj["short"].length > words[i].length) {
      obj["short"] = words[i]
    }
  }

  return obj["short"]
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = shortestWord;
