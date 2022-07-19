/*******************************************************************************
Write a function disemvowel(string) that takes in a string and returns the
string with all vowels removed.

Examples:

disemvowel('bootcamp'); // => 'btcmp'
disemvowel('PREP'); // => 'PRP'
disemvowel('hello world'); // => 'hll wrld'
*******************************************************************************/

function disemvowel(string) {
  let vowels = "aeiouAEIOU".split("")
  let newStrArr = []
  let chars = string.split("")

  for (i = 0; i <string.length; i++) {
    if (!vowels.includes(chars[i])) {
      newStrArr.push(chars[i])
    }
  }

  return newStrArr.join("")
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = disemvowel;
