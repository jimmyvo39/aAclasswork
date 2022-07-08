/***********************************************************************
Write a function `nextTwoPrimes(num)` that takes in a number `num` and
returns the next two prime numbers greater than `num`.

Examples:
nextTwoPrimes(2); // => [ 3, 5 ]
nextTwoPrimes(3); // => [ 5, 7 ]
nextTwoPrimes(7); // => [ 11, 13 ]
nextTwoPrimes(8); // => [ 11, 13 ]
nextTwoPrimes(20); // => [ 23, 29 ]
nextTwoPrimes(97); // => [ 101, 103 ]
***********************************************************************/
// start loop at num, condition based on array length = 2
// use is prime helper



function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    } 
    
    return true;
}

function nextTwoPrimes(num) {
    let arr=[]

    for (let i = num + 1; arr.length < 2; i++ ) {
        if (isPrime(i)) {
            arr.push(i)
        }
    }

    return arr
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = nextTwoPrimes;
