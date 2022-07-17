function threeOrSeven(num) {
    if (num % 3 === 0 || num % 7 === 0) {
        return true
    }
    return false
}

console.log(threeOrSeven(3));   // => true
console.log(threeOrSeven(42));  // => true
console.log(threeOrSeven(8));   // => false