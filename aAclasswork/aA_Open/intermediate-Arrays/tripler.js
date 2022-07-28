function tripler(nums) {
    let newArr = []
    
    for (let i = 0; i < nums.length; i++) {
        newArr.push(nums[i] * 3)
    }
    
    return newArr
}


console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]