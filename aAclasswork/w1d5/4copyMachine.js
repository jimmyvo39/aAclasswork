// Write a function `copyMachine(element, num)` that takes in an element and a number
// it should return an array of length `num` that is filled with `element`.
//
// Examples:
//
// copyMachine('candy', 0); // => []
// copyMachine('candy', 2); // => [ 'candy', 'candy' ]
// copyMachine('bread', 4); // => [ 'bread', 'bread', 'bread', 'bread' ]
// copyMachine(11, 6); // => [ 11, 11, 11, 11, 11, 11 ]

// loop num times, push element to new array

function copyMachine(element, num) {
    let newArray = []
    for (i = 0; i < num; i += 1) {
        newArray.push(element)
    }
    return newArray
}

console.log(copyMachine('candy', 0)); // => []
console.log(copyMachine('candy', 2)); // => [ 'candy', 'candy' ]
console.log(copyMachine('bread', 4)); // => [ 'bread', 'bread', 'bread', 'bread' ]
console.log(copyMachine(11, 6)); // => [ 11, 11, 11, 11, 11, 11 ]