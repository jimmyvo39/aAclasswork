/******************************************************************************
Write a function intersect(arr1, arr2) that takes in two arrays and returns a
new array containing the elements common to both arr1 and arr2.

Hint: use indexOf

Examples:

intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']) => [ 'b', 'd' ]
intersect(['a', 'b', 'c'], ['x', 'y', 'z']) => []
*******************************************************************************/
//loop through array check index of. if it is > -1 add element to new array

function intersect(arr1, arr2) {
  let newArray = []

  for (i = 0; i < arr2.length; i += 1) {
    if (arr1.indexOf(arr2[i]) > -1) {
      newArray.push(arr2[i])
    }
  }
  return newArray
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = intersect;
