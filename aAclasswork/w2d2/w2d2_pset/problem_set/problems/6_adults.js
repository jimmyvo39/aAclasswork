/***********************************************************************
Write a function `adults(people)` that takes in an array of person
objects. The function should return an array containing the names of
those who have an age of 18 or higher.

Example:

var ppl = [
  {name: 'John', age: 20},
  {name: 'Jim', age: 13},
  {name: 'Jane', age: 18},
  {name: 'Bob', age: 7}
];

adults(ppl); // => [ 'John', 'Jane' ]
***********************************************************************/
// loop through ppl array
//
// if 18 or older push name to array

function adults(people) {
  let newArray = []

  for (i = 0; i < people.length; i += 1) {
    if(people[i].age >= 18) {
      let obj = people [i]
      newArray.push(obj.name)
    }
  }
  
  return newArray
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = adults;
