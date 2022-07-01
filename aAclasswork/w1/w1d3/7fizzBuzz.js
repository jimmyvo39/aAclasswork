// Define a function `fizzBuzz(max)` that takes a number and prints  every number
// from 0 to `max` that is divisible by either 3 or 5, but not both.
//
// Examples:
//
// fizzBuzz(20); // prints
// 3
// 5
// 6
// 9
// 10
// 12
// 18

function fizzBuzz(max) {
    for (i = 0; i < max; i++){
        if((i % 3 === 0 || i % 5 === 0)&&!(i % 3 === 0 && i % 5 === 0)) {
            console.log(i)
        }
    }
}

fizzBuzz(20)