function isPrime(num) {
    if (num < 2) {
        return false
    }
    
    for (let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false
        }
    }
    
    return true
}

function prevPrime(number) {
    if (number < 3) {
        return null
    } 
    
    for (i = number - 1; i > 2; i--) {
        if (isPrime(i)) {
            return i
        }
    }
}


console.log(prevPrime(32)); // 31
console.log(prevPrime(33)); // 31
console.log(prevPrime(14)); // 13
console.log(prevPrime(7));  // 5
console.log(prevPrime(4));  // 3
console.log(prevPrime(2));  // null
console.log(prevPrime(1));  // null