/*******************************************************************************
Write a function valueReplace(array, object) that takes in an array and an object.
The function should return a new array where each element of the original array
is replaced with it's corresponding value from the object.

Examples:

valueReplace(['a', 'b', 'c', 'd'], {a: 1, b: 2, d: 4})
=> [ 1, 2, 'c', 4 ]

valueReplace(['danny', 'kurstie', 'tommy'], {kurstie: 'operations', danny: 'placements'})
=> [ 'placements', 'operations', 'tommy' ]
*******************************************************************************/
//loop through array. check if ele is a key of object
//if true push value of obj
//if false push element
function valueReplace(array, obj){
  let newArray = []
  
  for (i = 0; i < array.length; i++) {
    let ele = array[i]

    if (obj[ele] !== undefined) {
      newArray.push(obj[ele])
    } else {
      newArray.push(ele)
    }
  }

  return newArray
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = valueReplace;
