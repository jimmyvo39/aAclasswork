function removeEWords(sentence) {
    let words = sentence.split(" ")
    let newSentence = []
    
    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        
        if( word.includes("e") || word.includes("E") ) {
            continue 
        } else {
            newSentence.push(word)
        }
        
    }
    
    return newSentence.join(" ")
}





console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'