/***********************************************************************
Write a function `doesKeyExist(obj, key)` that takes in an object and a
key and returns true if the key is inside the object and false if the
key is not inside the object.

Examples:

var obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}
doesKeyExist(obj1, 'course'); // => true
doesKeyExist(obj1, 'name'); // => false
***********************************************************************/
var obj1 = {
    bootcamp: 'App Academy', 
    course: 'Bootcamp Prep'
}

function doesKeyExist(obj, key) {
    return obj[key] !== undefined
}

console.log(doesKeyExist(obj1, "course"))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = doesKeyExist;
