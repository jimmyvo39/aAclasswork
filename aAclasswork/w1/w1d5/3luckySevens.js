// Write a function `luckySevens(max)` that returns an array of all numbers up
// to max (inclusive) that are divisible by 7.
//
// Examples:
//
// luckySevens(25); // => [ 7, 14, 21 ]
// luckySevens(42); // => [ 7, 14, 21, 28, 35, 42 ]

//push new array only if i % 7

function luckySevens(max) {
    let newArray = []
    for (i = 7; i <= max; i += 1) { // start from 7 instead of zero because 0 % by any number is 0
        if (i % 7 === 0) {           
            newArray.push(i)
        }
    }
    return newArray
}

console.log(luckySevens(25))
console.log(luckySevens(42))