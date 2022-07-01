// Define a function `isFactorOf(number, factor)` that returns `true` if `factor`
// is a factor of `number`. `false` otherwise. A factor is a number that divides
// another number without a leftover remainder.
//
// Examples:
//
// isFactorOf(6,2); // => true
// isFactorOf(-6, 2); // => true
// isFactorOf(5,0); // => false
// isFactorOf(22, 7); // => false

function isFactorOf(number, factor) {
    return (number % factor === 0)
}

console.log(isFactorOf(6,2)); // => true
console.log(isFactorOf(-6, 2)); // => true
console.log(isFactorOf(5,0)); // => false
console.log(isFactorOf(22, 7)); // => false