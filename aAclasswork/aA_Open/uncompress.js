function uncompress(str) {
    let ele = str.split("")
    let newArr = []
    
    for (let i = 0; i < str.length - 1; i += 2) {
        for (let j = 0; j < ele[i+1]; j++) {
            newArr.push(ele[i])
        }
    }
    
    return newArr.join("")
}