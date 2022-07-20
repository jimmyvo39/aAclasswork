// 3! = 3 * 2 * 1                       // => 6
// 5! = 5 * 4 * 3 * 2 * 1               // => 120
function factorial(n) { //3
    if (n === 0 || n === 1) { //Base Case //1 === 0 || 1
      return 1;
    }
    // console.log('Before factorial call')
    let prev = factorial(n - 1); //Recursive Case factorial(4) = 24
    // console.log('After factorial call ', prev);
    let prod = n * prev; //5 * 24
    return prod; //120
  } 
  
  // console.log(factorial(5));
  // console.log(factorial(0));
  // console.log(factorial(3));