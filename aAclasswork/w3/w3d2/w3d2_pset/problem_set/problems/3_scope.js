// Predict what this code will print out.
// Check your prediction by running the code in your command line
// with `node problems/3_scope.js`

var foo = "Happy";

for (var foo = 0; foo <= 5; foo += 1) {
  console.log(foo); //What will foo be on each iteration?
}

console.log(foo); //What will foo be on this line? - Happy

// got prediction wrong, foo is mutated by the for loop since it is not a function.
// print from 0 to 6 (iteration to breaking the loop)