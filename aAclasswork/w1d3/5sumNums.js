// Write a function `sumNums(max)` that returns the sum of all positive numbers less
// than or equal to max.
//
// Examples:
//
// sumNums(4); // => 10
// sumNums(10); // => 55
// sumNums(365); // => 66795

function sumNums(max) {
    let sum = 0
    for (i=1; i<=max; i++) {
        sum += i
    }
    return sum
}

console.log(sumNums(365))