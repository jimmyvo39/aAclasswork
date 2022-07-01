// Write a function `arraySubstring(words, str)` that takes in an array of
// strings and a string as arguments and returns an array where each element is
// replaced with true if the string is a substring of the element and false if
// it is not.
//
// Examples:
//
// arraySubstring(["hello", "history", "helix", "hellos"],"hel")
// => [true, false, true, true]
// arraySubstring(["prefix", "problems", "pragmatic", "prefer"], "pre")
// => [true, false, false, true]

//make new array push true or false base on condition

function arraySubstring(words, str) {
    let newArray = []
    for (i = 0; i < words.length; i += 1) {
        if (words[i].indexOf(str) > -1) {
            newArray.push(true)
        }
        else {
            newArray.push(false)
        }
    }
    return newArray
}

console.log(arraySubstring(["hello", "history", "helix", "hellos"],"hel"))
console.log(arraySubstring(["prefix", "problems", "pragmatic", "prefer"], "pre"))