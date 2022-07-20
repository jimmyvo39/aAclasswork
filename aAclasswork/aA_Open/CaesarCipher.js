function caesarCipher(string, num) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newStr = []
    
    for (let i = 0; i < string.length; i++) {
        let index = alphabet.indexOf(string[i])
        
        
        newStr.push(alphabet[(index + num) % 26])
        
    }
    return newStr.join("")
}

console.log(caesarCipher("apple", 1)); // "bqqmf"
console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 4)); // "difve"