/***********************************************************************
Write a function isUniqueAnagram(word1, word2) that takes in two strings.
The function should return true if the strings are anagrams of each
other, false otherwise. Anagrams are strings that contain the same
characters, but not necessarily in the same order. Assume there will be
no repeated characters in each input string.

Examples:

isUniqueAnagram('iceman', 'cinema'); // => true
isUniqueAnagram('abcd', 'adcb'); // => true
isUniqueAnagram('abcd', 'adxb'); // => false
isUniqueAnagram('abcd', 'abcdx'); // => false
***********************************************************************/

function isUniqueAnagram(word1, word2) {
    if (word1.length !== word2.length) {
        return false 
    }

    let chars = {}

    for (i = 0; i < word1.length; i++) {
        let char1 = word1[i]
        let char2 = word2[i]

        if (chars[char1] === undefined) {
            chars[char1] = 1
        } else chars[char1]++

        if (chars[char2] === undefined) {
            chars[char2] = -1
        } else chars[char2]--
    }

    for (let key in chars) {
        
        if (chars[key] !== 0) {
            return false
        }
    }
    return true
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = isUniqueAnagram;
