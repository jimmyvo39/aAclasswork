/*******************************************************************************
** Write a function tripler(array) that takes in an array and returns a new array
** containing 3 times every element of the original array.
**
** Examples:
**
** tripler([1,2,3]); // => [ 3, 6, 9 ]
** tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*/
// create new array multiple elements of old array and push it
function tripler(array) {
  let newArray= []
  for (i = 0; i < array.length; i += 1) {
    newArray.push(3 * array[i])
  }
  return newArray
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = tripler;
