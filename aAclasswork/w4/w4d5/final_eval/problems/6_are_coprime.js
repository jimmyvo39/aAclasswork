/**************************************************************************************
Write a function `areCoprime(num1, num2)` that takes in two numbers and returns a boolean
indicating whether or not the given numbers are coprime. Two numbers are said to be coprime
if the only common factor between them is the number 1.

For example,
  16 and 25 are coprime because 1 is the only number that divides both of them
  14 and 21 are not coprime because 7 divides both of them

Examples:

areCoprime(16, 25); // => true
areCoprime(15, 14); // => true
areCoprime(14, 21); // => false
areCoprime(15, 6);  // => false
areCoprime(15, 5);  // => false

Difficulty: Medium
*************************************************************************************/

// function isPrime(num) {
//   if (num < 2) {
//     return false
//   }

//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return
//     }
//   }
// }

function areCoprime(num1, num2) {

  for (let i = 2; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      return false;
    }
  }

  return true;
}
  // let obj = {}

  //   for (let i = 2; i < num1; i++) {
  //     if (num1 % i === 0) {
  //       if (obj[i] === undefined) {
  //         obj[i] = 1
  //       } else {
  //         obj[i]++
  //       }
  //   }
  // }
  // console.log(obj,"after num 1")

  //   for (let i = 2; i < num2; i++) {
  //     if (num2 % i === 0) {
  //       if (obj[i] === undefined) {
  //         obj[i] = 1
  //       } else {
  //         obj[i]++
  //       }
  //     }
  // }
  // console.log(obj,"after num 2")


  // for (let key in obj) {
  //   console.log(obj[key])
  //   if (obj[key] > 1) {
  //     // return false
  //     return console.log(false)
  //   }
  // }

  // // return true
  // return console.log(true)
  // }

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = areCoprime;
