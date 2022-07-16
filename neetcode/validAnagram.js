/* https://leetcode.com/problems/valid-anagram/
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 */
//make one that works with “I Am Lord Voldemort”. account for space-character and case
// split strings to arrays. test for of indexOf both ways and equal lengths

// function validAnagram(str1, str2){
//     let arr1 = str1.split("")
//     let arr2 = str2.split("")

//     if (arr1.length !== arr2.length) {
//         return false;
//     }

//     for (i = 0; i < arr2.length; i += 1) {
//        if (arr1.indexOf(arr2[i]) === -1) {
//         return false
//        } 
//     }

//     for (i = 0; i < arr1.length; i += 1) {
//         if (arr2.indexOf(arr1[i]) === -1) {
//          return false
//         } 
//      }

//     return true
// }



function validAnagram(word1,word2) {
   
    if (word1.length !== word2.length) {
        return false
    }

    let chars = {}
    let chars1 = word1.split("")
    let chars2 = word2.split("")

    for (let i = 0; i < chars1.length; i++){
        let char1 = chars1[i]
        let char2 = chars2[i]

        if (chars[char1] === undefined) {
            chars[char1] = 1
        } else {
            chars[char1]++
        }
        if (chars[char2] === undefined) {
            chars[char2] = -1
        } else {
            chars[char2]--
        }
    }

    for (let key in chars) {
        if (chars[key] !== 0) {
            return false
        }
    }

    return true
} 

console.log(validAnagram("rat","tar"))
console.log(validAnagram("ccac", "ccaa"))