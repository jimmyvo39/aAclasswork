function removeLastVowel(str) {
    let vowels = "aeiou"
    
    for (let i = str.length -1; i >= 0; i--) {
        let char = str[i]
        
        if(vowels.includes(char)) {
            return str.slice(0,i) + str.slice(i + 1)
        }
    }
    
    return str
}


console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'