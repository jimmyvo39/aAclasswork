// Write a function `maxValue(array)` that returns the largest value in `array`.
// Assume `array` is an array of numbers.
//
// Examples:
//
// maxValue([12, 6, 43, 2]); // => 43
// maxValue([]); // => null
// maxValue([-4, -10, 0.43]); // => 0.43
// push array[0] in new array. compare every other array. if it is larger update the new array  
function maxValue(array) {
    let newArray = [null]
    newArray.push(array[0])

    for (i = 0; i < array.length; i += 1) {
        if(newArray[0] < array[i]) {
            newArray[0] = array[i]
        }
    }
    return newArray[0]
}

console.log(maxValue([2,4,7]))