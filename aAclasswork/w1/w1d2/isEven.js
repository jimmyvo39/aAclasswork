// Write a function `isEven` that takes in a number and returns `true` if the number
// is even, `false` otherwise. Write `isEven` by using the `isOdd` function you
// made previously. HINT: you can call `isOdd` from within `isEven`.
//
// Examples:
// isEven(2); // => true
// isEven(5); // => false

function isOdd(num) {
    return (num % 2 !== 0);
}

function isEven(num) {
    if (isOdd(num)) {
        return false;
    } else { 
        return true;
    }
  }

console.log(isEven(2)); // => true
console.log(isEven(5)); // => false