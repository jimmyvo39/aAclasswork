// Write a function `reverseStr(str)` that takes in a string as a parameter and
// returns the string but with the characters in reverse.
//
// Examples:
//
// reverseStr('bootcamp'); //=> 'pmactoob'
// reverseStr('App Academy'); //=> 'ymedacA ppA'

//split string, push element backwards to new array, join new array

function reverseStr(str) {
    newArray = []
    strArray = str.split("")

    for ( var i = 0; i < strArray.length; i += 1) {
        newArray.unshift(strArray[i])
    }
    return newArray.join("")
}

console.log(reverseStr('bootcamp'))
console.log(reverseStr('App Academy'))