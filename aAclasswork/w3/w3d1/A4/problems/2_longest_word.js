/*******************************************************************************
Write a function longestWord(sentence) that returns the longest word of a sentence.
If there are ties, the function should return the later word.

Examples:

longestWord('app academy is cool'); // => 'academy'
longestWord('hate having hungry hippos'); // => 'hippos'
longestWord('bootcamp'); // => 'bootcamp'
longestWord(''); // => ''
*******************************************************************************/

function longestWord(sentence) {
  let obj = {}
  let words = sentence.split(" ")
  obj["long"] = words[0]

    for (i = 1; i < words.length; i++) {
      if (words[i].length >= obj["long"].length) {
        obj["long"] = words[i]
      }
    }

  return obj["long"]
}

console.log()

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestWord;
