function printBackwards(array) {
    for (var i = array.length - 1; i >= 0; i--) {
      var ele = array[i];
      console.log(ele);
    }
  }
  
  var names = ['kurstie', 'mike', 'alex', 'meagan'];
  printBackwards(names);