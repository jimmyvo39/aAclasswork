function vowelCount(str){
    let count = 0
    let vowels = "aeiou".split("")
    
    for (let i = 0; i < str.length -1; i++) {
        let char = str[i]
        
        if (vowels.includes(char)) {
            count++
        }
    }
    return count
}


function mostVowels(sentence) {
    let words = sentence.split(" ")
    let longest = words[0]
    
    for (let i = 1; i < words.length - 1; i++) {
        let word = words[i]
        
        if (vowelCount(word) > vowelCount(longest)) {
            longest = word
        }
    }
    return longest
}

console.log(mostVowels("what a wonderful life")); // "wonderful"