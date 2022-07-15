/*******************************************************************************
Write a function reverse2D(array) that takes in a 2D array of strings. The function
should return a string representing the elements of the array in reverse order.

Examples:

var arr1 = [
  ['a', 'b', 'c', 'd'],
  ['e', 'f'],
  ['g', 'h', 'i']
];

reverse2D(arr1) => 'ihgfedcba'


var arr2 = [
  ['Julian', 'Matt', 'Mike'],
  ['Oscar', 'Patrick']
];
reverse2D(arr2) => 'PatrickOscarMikeMattJulian'\\

*******************************************************************************/

function reverse2D(array) {
  let arr = []

  for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array[i].length; j++) {
      arr.unshift(array[i][j])
    }
  }

  return arr.join("")
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverse2D;
