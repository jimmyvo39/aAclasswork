function func1(num) {
    return num + 50;
  }
  
  function func2(num) {
    return num + " bottles of beer on the wall";
  }
  
  function func3(num) {
    var x = func1(num);
    return func2(x);
  }
  
  var result = func3(5);
  console.log(result); // What does this print out?

  /* 

print func2(x)

x = func1(5) = 55

func2(55) = 55 bottles of beer on the wall

PREDICTION WAS CORRECT!
  */