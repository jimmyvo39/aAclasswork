// Write a function `myIndexOf(array, target)` that takes in an array of
// numbers and a target number as arguments. It should return the index value
// of the target if it is present in the array or -1 if it is not present.
//
// CONSTRAINT: Do not use the indexOf method.
//
// Examples:
//
// myIndexOf([1,2,3,4],4) => 3
// myIndexOf([5,6,7,8],2) => -1

//iterate through the arrays if element match return the index, other wise return -1
function myIndexOf(array, target) {
    for ( i = 0; i < array.length; i += 1){
        if (target === array[i]) {
            return i
        }   
    }
    return -1
}

console.log(myIndexOf([5,6,7,8],2))