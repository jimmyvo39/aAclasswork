function countDown(n) { //n = 0
    if (n === 0) { //Base Case //0 === 0
      console.log('Lift Off'); //Lift Off
      return;
    }
  
    console.log(n); //5 4 3 2 1
    countDown(n - 1); //Recursive Case //countDown(0)
  }
  //What is countDown doing?
  
  // countDown(5);