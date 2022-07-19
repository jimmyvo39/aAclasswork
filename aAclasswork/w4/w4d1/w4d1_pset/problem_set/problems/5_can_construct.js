/***********************************************************************
Given an arbitrary ransom note string and another string containing letters 
from all the magazines, write a function that will return true if the ransom note 
can be constructed from the magazines; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Examples:
canConstruct("a", "b");               // => false
canConstruct("a", "aa");              // => true
canConstruct("ababc", "dbaccab");     // => true
canConstruct("aabbc", "aaaabbbdef");  // => false
***********************************************************************/

function canConstruct(ransomNote, magazine) { 
    let obj = {}
    let charsR = ransomNote.split("")
    let charsM = magazine.split("")

    for (let i = 0; i < ransomNote.length; i++) {
        if(obj[charsR[i]] === undefined) {
            obj[charsR[i]] = 1
        } else {
            obj[charsR[i]]++
        }
    }
    for (let i = 0; i < magazine.length; i++) {
        if(obj[charsM[i]] === undefined) {
            obj[charsM[i]] = -1
        } else {
            obj[charsM[i]]--
        }
    }

    for(let key in obj) {
        if(obj[key] > 0) {
            return false
        }
    }

    return true
 }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = canConstruct;
