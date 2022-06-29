// Write a function `echo` that takes in a string and returns that string "echo-ized".
//
// Examples:
// echo("Mom!"); // => "MOM! ... Mom! ... mom!"
// echo("hey"); // => "HEY ... hey ... hey"
// echo("JUMp"); // => "JUMP ... JUMp ... jump"
//
function echo(string) {
    console.log(string.toUpperCase() + " ... " + string + " ... " + string.toLowerCase())
  }
echo("Mom!"); // => "MOM! ... Mom! ... mom!"
echo("hey"); // => "HEY ... hey ... hey"
echo("JUMp"); // => "JUMP ... JUMp ... jump"