function printBackwards(array) {
    for (var i = array.length - 1; i >= 0; i--) {
      var ele = array[i];
      console.log(ele);
    }
  }
  
  var names = ['kurstie', 'mike', 'alex', 'meagan'];
  printBackwards(names);

  function printBackwards (array) {
    for ( var i = array.length -1; i >= 0; i -= 1) {
      var ele = array[i]
      console.log(ele)
    }
  }

  var names = ["kurstie", "mike", "alex", "meagan"]
  printBackwards(names)//1

  function printBackwards(array) {
    for ( var i =array.length -1; i >= 0; i -=1) {
      var ele =array[i]
      console.log(ele)
    }
  }

  names = ["kurstie", "mike", "alex", "meagan"]
printBackwards(names)//2

function printBackwards(array) {
  for (var i = array.length-1; i >= 0; i-= 1) {
    var ele = array[i]
    console.log(ele)
  }
}
names = ["kurstie", "mike", "alex", "meagan"]
printBackwards(names)//3

function printBackwards(array) {
  for (var i = array.length -1; i >= 0; i -= 1) {
    var ele = array[i]
    console.log(ele)
  }
}

names = ["kurstie", "mike", "alex", "meagan"]
printBackwards(names)//4