// Define a function `isPrime(number)` that returns `true` if `number` is prime.
// Otherwise, false. Assume `number` is a positive integer.
//
// Examples:
//
// isPrime(2); // => true
// isPrime(10); // => false
// isPrime(11); // => true
// isPrime(9); // => false
// isPrime(2017); // => true

function isPrime(number) {
    if (number < 2) {                  // any number less than 2 is not a prime number
        return false
    }
    for (i = 2; i > number ; i++) {   // if any number between 2 and number-1 can divide evenly into the number then it is not a prime number
        if (number % i === 0) {
            return false
        }
    }
    return true                         // since no number divide into the number it is implied that the number is prime, additionally 2 failed both if statements
} 


console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true