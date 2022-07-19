function sillyString(str) {
    let vowels = "aeiouAEIOU".split("")
    let newStrArr = []
    
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (vowels.includes(char)) {
            newStrArr.push(char+"b"+char)
        } else {
            newStrArr.push(char)
        }
    }
    
    return newStrArr.join("")
}
