function isFive(n) {
//     if (n = 5) {            //condition is using single = it should be triple =
//       return true;
//     } else {
//       return false;
//     }
//   }

if (n === 5) {            
    return true;
  } else {
    return false;
  }
}

console.log(isFive(-5))
console.log(isFive(5))
console.log(isFive(4))
console.log(isFive("5"))