// Write a function sumArray(array) that takes in an array of numbers that returns the
// total sum of them.
//
//
// Examples:
//
// sumArray([5, 6, 4]); // => 15
// sumArray([7, 3, 9, 11]); // => 30

// start a new element at 0 loop through index. add the final element to print

function sumArray(arr) {
    let num = 0
    for (i = 0; i < arr.length; i+= 1) {
        num += arr[i]
    } console.log(num)

}

sumArray([5, 6, 4]); // => 15
sumArray([7, 3, 9, 11]); // => 30