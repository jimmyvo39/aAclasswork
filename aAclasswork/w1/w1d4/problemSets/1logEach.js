// Write a function `logEach(array)` that prints every element of the array and its
// index to the console.
//
// Example:
//
// logEach(["Anthony", "John", "Carson"]); // prints
// 0: Anthony
// 1: John
// 2: Carson

//iterate each index followed by string followed by element at that index

function logEach(arr){
    for (i = 0; i < arr.length; i+=1) {
        console.log(i + ": " + arr[i])
    }
}

logEach(["Anthony", "John", "Carson"])

