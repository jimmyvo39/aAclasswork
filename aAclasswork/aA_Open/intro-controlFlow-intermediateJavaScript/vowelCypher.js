function vowelCipher(string) {
    let vowelSwap = {
        a: "e",
        e: "i",
        i: "o",
        o: "u",
        u: "a" 
    }
    let newStr = []
    
    for (let i = 0; i < string.length; i++) {
        let char = string[i]
        if(vowelSwap[char] !== undefined) {
            newStr.push(vowelSwap[char])
        } else {
            newStr.push(char)
        }
    }
    
    return newStr.join("")
}


console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"