// Write a function `printFives(max)` that prints out the multiples of 5 that are
// less than max.
//
// Try to solve this in two ways, using a conditional (if) and without using a
// conditional
//
// Example:
//
// printFives(20) // prints
// 0
// 5
// 10
// 15

function printFives(max) {
    for ( i =0; i <= max; i++){
        if (i % 5 === 0) {
            console.log(i)
        }
    }
}

printFives(46)