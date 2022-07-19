/*******************************************************************************
Write a function isPalindrome(sentence) that returns true if the characters of the
sentence string form a palindrome, false otherwise. A palindrome is a word or
phrase that is that is the same forwards and backwards.

Examples:

isPalindrome('rats live on no evil star'); // => true
isPalindrome('stella won no wallets'); // => true
isPalindrome('racecar'); // => true
isPalindrome('hello world'); // => false
*******************************************************************************/

function isPalindrome(sentence) { 
  let string = sentence.split(" ").join("").split("") 
  //string to array of words to single string to array of chars
  let reverse = []

  for (let i = string.length -1; i >= 0; i--) {
    reverse.push(string[i])
  }

  for (let i = 0; i < string.length; i ++) {
    if (string[i] !== reverse[i]) {
      return false
    }
  }

  return true
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = isPalindrome;
