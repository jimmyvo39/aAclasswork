/***********************************************************************
Write a function alternateCase(str) that takes in a word and returns the
word where the characters alternate between uppercase and lowercase.

Examples:

alternateCase('BOOTCAMPPREP'); // => 'BoOtCaMpPrEp'
alternateCase('bOotCamPpREP'); // => 'BoOtCaMpPrEp'
alternateCase('hello'); // => 'HeLlO'
***********************************************************************/

function alternateCase(str) {
    let strArr = [str[0].toUpperCase()]

    for (let i = 1; i < str.length; i++) {
        let char = str[i]

        if (i % 2 === 0) {
            strArr.push(char.toUpperCase())
        } else {
            strArr.push(char.toLowerCase())
        }   
    }

    return strArr.join("")
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = alternateCase;
