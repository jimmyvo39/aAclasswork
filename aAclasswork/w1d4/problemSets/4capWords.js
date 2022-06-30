// Write a function `capWords(words)` that takes in an array of words and
// returns a new array where every word is capitalized.
//
// Example:
//
// capWords(['hello', 'boOtCaMp', 'PREP!']); // => ['HELLO', 'BOOTCAMP', 'PREP!']

// start new array. iterate though each element, and push toUpperCase element into new array

function capWords(arr) {
    let newArray = []
    for (i = 0; i < arr.length; i += 1) {
        newArray.push(arr[i].toUpperCase())
    } console.log(newArray)
}

capWords(['hello', 'boOtCaMp', 'PREP!'])