function divLength(num) {
    let divArr = []
    
    for (let i = 1; i <= num; i++){
        if (num % i === 0) {
            divArr.push(i)
        }
    }
    return divArr.length
}

function isAntiPrime(num) {
    for (let i = 1; i < num; i++) {
        if (divLength(num) < divLength(i)) {
            return false
        }
    }
    return true
}


console.log(isAntiPrime(24))   // true
console.log(isAntiPrime(36))   // true
console.log(isAntiPrime(48))   // true
console.log(isAntiPrime(360))  // true
console.log(isAntiPrime(1260)) // true
console.log(isAntiPrime(27))   // false
console.log(isAntiPrime(5))    // false
console.log(isAntiPrime(100))  // false
console.log(isAntiPrime(136))  // false
console.log(isAntiPrime(1024)) // false