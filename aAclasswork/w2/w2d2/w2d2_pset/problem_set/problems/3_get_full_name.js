/***********************************************************************
Write a function `getFullName(person)` that takes in an person object
and returns a string containing their full name.

Examples:

var p1 = {firstName: 'John', lastName: 'Doe'};
getFullName(p1); // => 'John Doe'

var p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
getFullName(p2); // => 'Charlie Brown'
***********************************************************************/
var p1 = {
    firstName: "John", 
    lastName: "Doe"
};

var p2 = {
    firstName: 'Charlie', 
    lastName: 'Brown', 
    age: 9
};

function getFullName(person) {
    return(person.firstName + " " + person.lastName)

}

getFullName(p1)

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = getFullName;
