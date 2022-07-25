function sumArray(arr) {
    let sum = 0
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

function allElseEqual(arr) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === (sumArray(arr)/2)) {
            return arr[i]
        }
    } 
    return null
}

console.log(allElseEqual([2, 4, 3, 10, 1])); // 10
console.log(allElseEqual([6, 3, 5, -9, 1])); // 3
console.log(allElseEqual([1, 2, 3, 4]));     // null