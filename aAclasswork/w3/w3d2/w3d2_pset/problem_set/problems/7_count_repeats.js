/***********************************************************************
Write a function `countRepeats(string)` that takes in a string and
returns the number of letters that appear more than once in the string.
You may assume the string contains only lowercase letters. Count the
number of letters that repeat, not the number of times they repeat in
the string.

Examples:

countRepeats('alvin'); //=> 0
countRepeats('aaaalvin'); //=> 1
countRepeats('pops'); //=> 1
countRepeats('mississippi'); //=> 3
countRepeats('hellobootcampprep'); //=> 4
***********************************************************************/

//split into array
//scan array and create object keys

//scan object for keys with values over 1, add to count
// return the count



function countRepeats(string) {
    let count = 0
    let obj = {}

    for (i = 0; i < string.length; i++) {
        let char = string[i] 

        if (obj[char] === undefined) {
          obj[char] = 1
          } else {
          obj[char] += 1
          }
    }

    for (let key in obj) {
        if (obj[key] > 1) {
            count += 1
        }
    }
    
    return count
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countRepeats;
