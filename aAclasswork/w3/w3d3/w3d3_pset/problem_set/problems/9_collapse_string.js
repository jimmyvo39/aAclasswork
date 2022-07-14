/***********************************************************************
Write a function `collapseString(str)` that takes in a string as an
argument. The function should return the string where 'streaks' of
consecutive characters are collapsed to a single character.

Examples:

collapseString('apple'); //=> 'aple'
collapseString('AAAaalviiiiin!!!'); //=> 'Aalvin!'
collapseString('hello   app academy'); //=> 'helo ap academy'
***********************************************************************/

function collapseString(str) {
    let strArray = str.split("")
    let newStrArr = []

    for (i = 0; i < str.length; i++) {
        let char = strArray[i]
        let nextChar = strArray[i + 1]

        if(char === nextChar) {
            continue
        } else {
            newStrArr.push(char)
        }
    }

    return newStrArr.join("")

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = collapseString;
