// Write a function `everyOtherWord(sentence)` that takes in a sentence and returns
// an array containing every other word in that sentence.
//
// Examples:
//
// everyOtherWord('hello how are you doing on this lovely day?'); // => [ 'hello', 'are', 'doing', 'this', 'day?' ]
// everyOtherWord('the weather is wonderful'); // => [ 'the', 'is' ]

// loop with a 2 stepper. push to new array. 

function everyOtherWord(sentence) {
    let newArray = []
    let sentenceArray = sentence.split(" ")

    for (i = 0; i < sentenceArray.length; i += 2) {
        newArray.push(sentenceArray[i])

    }
    return newArray
}

console.log(everyOtherWord('hello how are you doing on this lovely day?'))
console.log(everyOtherWord('the weather is wonderful'))