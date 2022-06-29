function printForwards(start, end) {
    for (var counter = start; counter <= end; counter++) {
      console.log(counter);
    }
  }
  
  printForwards(4, 11); // feel free to change the numbers being passed

  function printBackwards(start, end) {
    var i = end;
    while (i >= start) {
      console.log(i);
      i--;
    }
  }
  
  printBackwards(-5, 6); // feel free to change the numbers being passed 