/***********************************************************************
Write a function `smallestPrime(array)` that takes in an array of
numbers and returns the smallest prime number in the array.

HINTS:
- start by creating an `isPrime` helper function
- the smallest prime number is 2

Examples:

var arr1 = [ 6, 7, 12, 11, 5, 4 ];
smallestPrime(arr1); // => 5

var arr2 = [11, -7, 7, 8, 6, 10];
smallestPrime(arr2); // => 7

var arr3 = [];
smallestPrime(arr3); // => null

var arr4 = [4, 6, 8, 10];
smallestPrime(arr4); // => null
***********************************************************************/
// make a new array by looping through og array and pushing prime numbers
// loop through prime array and updating lowest number

function isPrime(num) {
    if (num < 2) {
        return false
    }

    for (let i = 0; i < num; i ++) {
        if(num % i === 0) {
            return false
        }
    }

    return true

}

function lowest(num) {
    let low =num[0]

    for (let i = 1; i < num; i++) {
        if (num[i] < lowest) {
            lowest = num [i]
        }
    }

    return low
}

function smallestPrime(array) {
    let primeArr =[] 

    if (array.length < 1) {
        return null
    }

    for ( let i = 0; i < array.length; i++) {
        if (isPrime(array[i])) {
            primeArr.push(array[i])
        } else {
            return null
        }
    }

    return lowest(primeArr)
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = smallestPrime;
