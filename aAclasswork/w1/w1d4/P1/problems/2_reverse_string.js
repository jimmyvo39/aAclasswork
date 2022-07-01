/******************************************************************************
Write a function reverseString(string) that takes in a hyphenated string and
returns a the hyphenated string reversed.

Examples:

reverseString("Go-to-the-store") => "store-the-to-Go"
reverseString("Jump,-jump-for-joy") => "joy-for-jump-Jump,"
*******************************************************************************/
//split on hyphen, loop forward. unshift to new array. join with hypen


function reverseString(string) {
  let strArray = string.split("-")
  let newArray = []
  for (i = 0; i < strArray.length; i += 1) {
    newArray.unshift(strArray[i])
  }
  return newArray.join("-")

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseString;
