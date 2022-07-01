// Write a function `factorArray(array, number)` that takes in an array of
// numbers and a number and returns an array of all the factors.
//
// Examples:
//
// factorArray([2,3,4,5,6],20) => [2,4,5]
// factorArray([2,3,4,5,6],35) => [5]
// factorArray([10,15,20,25],5) => []

function factorArray(array, number) {
    newArray=[]
    for (i = 0; i < array.length; i += 1) {
        ele = array[i]
        if (number % ele === 0) {
            newArray.push(ele)
         }
    }
    return newArray
}

console.log(factorArray([2,3,4,5,6],20)) //=> [2,4,5]
console.log(factorArray([2,3,4,5,6],35)) // => [5]
console.log(factorArray([10,15,20,25],5)) //=> []