// Write a function `isOdd` that takes in a number as an argument and returns `true`
// if the number is odd and returns `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
// Examples:
// isOdd(2);    // => false
// isOdd(5);    // => true
// isOdd(-17);  // => true

// function isOdd(num) {
//     if (num % 2 === 0) {
//         console.log(false);
//     } else {
//         console.log(true);
//         }
//     }
  
function isOdd(number) {
    return (number % 2 !== 0);
}
console.log(isOdd(2))
console.log(isOdd(2));    // => false
console.log(isOdd(-17));  // => true