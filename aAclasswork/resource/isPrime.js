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

console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true

/*
starting at 2 since 1 is not prime, 2 produce a false condition end loop and returns true


if any between 2 & number-1  can divide into number evenenly it is not a prime number 

each number is tested with the loop( does not work for 2) when the if condition is met return the false statement

when the loop end based on condition of the loop it moves on to the rest of the function returning the true statement and ending the function

*/