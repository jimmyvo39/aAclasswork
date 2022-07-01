// Write a function `yell` that takes in a string and returns a "yelled" version
// of that string.
//
// Examples:
// yell("I want to go to the store"); // => "I WANT TO GO TO THE STORE!!!"
// yell("Time to program"); // => "TIME TO PROGRAM!!!"
//
function yell(string) {
   console.log( string.toUpperCase());//method does not mutate 
  }

yell("I want to go to the store"); // => "I WANT TO GO TO THE STORE!!!"
yell("Time to program"); // => "TIME TO PROGRAM!!!"