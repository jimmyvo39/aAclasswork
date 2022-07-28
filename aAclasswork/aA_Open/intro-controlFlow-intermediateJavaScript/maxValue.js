function maxValue(nums) {
    let max = null
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        
        if(num === null|| num > max) {
            max = num
        }
    }
    
    return max
}