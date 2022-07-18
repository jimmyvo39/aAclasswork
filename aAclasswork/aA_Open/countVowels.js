function countVowels(word) {
    let count = 0
    let vowels = "aeiouAEIOU".split("")
    
    for (let i = 0; i < word.length; i++) {
        let char = word[i]
        
        if (vowels.includes(char)) {
            count ++
        }
    }
    
    return count
};

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2