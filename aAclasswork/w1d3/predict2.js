var foo = function(name) {
    return "Dance " + name + ", dance! "
  }
  
  var bar = function() {
    var str = "";
  
    for (var i = 0; i < 3; i += 1) {
      str += foo("Anthony");
      str += foo("Haseeb");
      str += foo("Winnie");
      str += " | ";
    }
  
    return str;
  }
  
  var result = bar();
  console.log(result); // What does this print out?

/*
bar starts as an empty string

foo  is a helper function that adds onto the string

 loop that repaeats the 3 times

Dance Anthony, dance! Dance Haseeb, dance! Dance Winnie, dance! | Dance Anthony, dance! Dance Haseeb, dance! Dance Winnie, dance! | Dance Anthony, dance! Dance Haseeb, dance! Dance Winnie, dance! | 

PREDICTION WAS CORRECT!

*/