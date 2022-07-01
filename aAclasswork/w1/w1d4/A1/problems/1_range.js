/*******************************************************************************
Write a function range(start, end) that returns an array that contains all
numbers between 'start' and 'end' in sequential order.

Examples:

range(1,4) => [1,2,3,4]
range(4,2) => []
*******************************************************************************/

//start a new blank array push numbers into it

function range(start, end) {
  let newArray = []
  for (i = start; i <= end; i += 1) {
    newArray.push(i)
  } 
  return newArray;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = range;
