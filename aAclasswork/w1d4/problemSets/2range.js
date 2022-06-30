// Write a function range(start, end) that returns an array that contains all
// numbers between 'start' and 'end' in sequential order.
//
// Examples:
//
// range(1,4) => [1,2,3,4]
// range(4,2) => []

//start an empty array push numbers into it with loop. 


function range(start, end) {
    var newArr = []
    for (i = start; i < end + 1; i+=1) {
        newArr.push(i)
    } console.log(newArr)
} 

range(1,4) // => [1,2,3,4]
range(4,2) // => []
