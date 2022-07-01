/******************************************************************************
Write a function unique(array) that returns an array where all the duplicates
of the input array have been removed; in other words, every element remaining
is unique.

Hint: use indexOf

Example:
unique([1, 1, 2, 3, 3]) => [1, 2, 3]
*******************************************************************************/
// if new array does not return indexOf push i
function unique(array) {
  let newArray = []
  
  for (i = 0; i < array.length; i += 1) {
    if (newArray.indexOf(array[i]) === -1) {
      newArray.push(array[i])
    }
  }
  return newArray
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = unique;
