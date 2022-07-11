
function leastCommonMultiple(num1, num2) {
    
    for (i = 1; i <= num1 * num2; i++) {
        if(i % num1 === 0 && i % num2 === 0) {
            
            return i
        }
    }
}
console.log(leastCommonMultiple(2, 3)) // => 6
console.log(leastCommonMultiple(6, 10)) //=> 30
console.log(leastCommonMultiple(24, 26)) //=> 312
