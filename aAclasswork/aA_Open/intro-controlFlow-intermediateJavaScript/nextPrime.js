
let isPrime = function(number) {
    if (number < 2) {
        return false
    }
    
    for (let i = 2; i < number; i++) {
        if ( number % i === 0) {
            return false
        }
    }
    
    return true
}

function nextPrime(num) {
    for (i = num + 1; true; i++ ) {
        if( isPrime(i)) {
            return i
        }
    }
    
}



console.log(nextPrime(2)); // 3
console.log(nextPrime(3)); // 5
console.log(nextPrime(7)); // 11
console.log(nextPrime(8)); // 11
console.log(nextPrime(20)); // 23
console.log(nextPrime(97)); // 101