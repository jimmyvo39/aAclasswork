/***********************************************************************
Write a function `pairsToString(arr)` that takes in an array of pairs.
The function should return a string corresponding to the pairs.

Examples:

var array1 = [
  ['a', 3],
  ['b', 1],
  ['c', 2]
];

pairsToString(array1); // => 'aaabcc'

var array2 = [
  ['f', 1],
  ['o', 2],
  ['d', 1],
  ['!', 1]
];

pairsToString(array2); // => 'food!'
***********************************************************************/
//loop through each array
function pairsToString(arr) {
  let string = []

  for ( let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i][1]; j++) {
      string.push(arr[i][0])
    }
  }

  return string.join("")
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = pairsToString;
