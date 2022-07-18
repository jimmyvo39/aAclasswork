function abbreviate(word) {
    let vowels = "aeiouAEIOU".split("")
    let newWord =[]
    
    for (i = 0; i < word.length; i++) {
        let char = word[i]
        
        if (!vowels.includes(char)) {
            newWord.push(char)
        }
    }
    
    return newWord.join("")
}







console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'