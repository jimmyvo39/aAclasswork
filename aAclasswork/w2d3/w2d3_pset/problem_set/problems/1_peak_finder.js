/***********************************************************************
Write a function `peakFinder(array)` that takes in an array of numbers.
It should return an array containing the indices of all the peaks. A
peak is an element that is greater than both of its neighbors. If it is
the first or last element, it is a peak if it is greater than its one
neighbor. Assume the array has a length of at least 2.

Hint: this can be solved using a single loop

Examples:

peakFinder([1, 2, 3, 2, 1]); //=> [2]
peakFinder([2, 1, 2, 3, 4, 5]); //=> [0, 5]
peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5]); //=> [2, 6, 8]
***********************************************************************/

function peakFinder(array) {
    let peak = []

    if (array[0] > array[1]) {
        peak.push(0)
    }

    for (let i = 1; i < array.length -2; i +=1) {
        if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
            peak.push(i)
        }

    }

    if (array[array.length -1] > array[array.length -2]) {
        peak.push(array.length - 1)
    }
    
    return peak
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = peakFinder;
