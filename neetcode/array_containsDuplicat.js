/*
https://leetcode.com/problems/contains-duplicate/
Given an integer array nums, return true if any value appears 
at least twice in the array, and return false if every element is distinct.

 
Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

//if we remove duplicates the length of the array will be less than the original array
//when producing new array do not include numbers already in new array



var newArray = []

function containDuplicate(arr) {
    
    for (var i = 0; i < arr.length; i += 1) {
        if (!newArray.includes(arr[i])) {
            newArray.push(arr[i])
        } 
    } return (arr.length !== newArray.length)  
}


let nums = [1,2,3,4,5,7,1,1]
console.log(containDuplicate(nums))

// console.log(nums.length)
// console.log(newArray.length)