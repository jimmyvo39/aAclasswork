/*******************************************************************************
Write a function `minMaxProduct(array)` that return the product between the
largest value and the smallest value in the array. Assume `array` is an array of
numbers. Assume an array of at least two numbers.

Examples:

minMaxProduct([6, 3, 7, 2]) => 14
minMaxProduct([0, 1, -5, 3, 6]) => -30
*******************************************************************************/

function minMaxProduct(array) {
  let obj = {}
  obj["min"] = array[0]
  obj["max"] = array[0]
    
    for (i = 0; i <array.length; i++) {
      let num = array[i]
  
      if (num < obj.min) {
        obj.min = num
      }
      if (num > obj.max) {
        obj.max =num
      }
  
    }
    return obj.min * obj.max
  }


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = minMaxProduct;
