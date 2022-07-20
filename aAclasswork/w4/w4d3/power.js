function power(base, exp) { //power()
    if(exp === 0) {
      return 1;
    }
  
    let prev = 1 / base * power(base, exp - 1) ;
    return prev                                    
  }
  console.log(power(2, 3));
//   console.log(power(2, 3)); 
//   console.log(power(2, 0));
//   console.log(power(100, 0));