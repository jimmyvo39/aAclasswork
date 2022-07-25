/***********************************************************************
Write a function `reverseString(string)` that takes in a string as a parameter
and returns the string reversed. Do this recursively. You should not use
the array.reverse method.

Examples

reverseString('bootcamp'); // => 'pmactoob'
reverseString('app academy'); // => 'ymedaca ppa'
reverseString(''); // => ''
***********************************************************************/

function reverseString(string) {
    if (string === "") {
        return ""
    }

    let first = string[0]
    let rest = string.slice(1)
    let reverse = reverseString(rest) + first
    return reverse
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = reverseString;
