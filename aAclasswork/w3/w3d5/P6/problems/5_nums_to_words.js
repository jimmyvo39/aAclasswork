/*******************************************************************************
Write a function numsToWords(numString) that takes in a string representing a number.
The function should return a new string where each digit character is replaced with
it's "word" respresentation. Assume the input string only contains numeric characters.

Examples:

numsToWords('42') => 'FourTwo'
numsToWords('123') => 'OneTwoThree'
numsToWords('159598') => 'OneFiveNineFiveNineEight'
*******************************************************************************/

function numsToWords(numString) {
  let nums = {1: "One",
              2: "Two",
              3: "Three",
              4: "Four",
              5: "Five",
              6: "Six",
              7: "Seven",
              8: "Eight",
              9: "Nine" 
}
let stringArr = []
let digit = numString.split("")

for (i = 0; i < digit.length; i++) {
  if (nums[digit[i]] !== undefined) {
    stringArr.push(nums[digit[i]])
  }
}

return stringArr.join("")

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = numsToWords;
