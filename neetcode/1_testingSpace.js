//insert string return string without punctuation
function removePunctuation(word) {
    let punctuation = [";", "!", ".", "?", ",", "-"]
    let lastChar = word.slice(-1)

        if (punctuation.indexOf(lastChar) === -1) {
            return word
        } else {
            return word.slice(0, -1)
        }
}

function hasPunctuation(word) {
    let punctuation = [";", "!", ".", "?", ",", "-"]
    let lastChar = word.slice(-1)
  
  return (punctuation.indexOf(lastChar) > -1)
}

//insert string and array, test for stopword return boolean
function isStopWord(word, stopWords) {
    return (stopWords.indexOf(word) > -1)
} 

// if the word is a stopword with a punctuation push word lower case
// if it is a stop word push it lower case
// if the word is not a stop word, return first letter as uppercase]

//insert string and array return string
function titleize(title, stopWords) {
    let newArray = []
    let words = title.split(" ")
    
    for (i = 0; i < words.length; i++) {
        let word = words[i]
      
        if (hasPunctuation(word)) {
          let pWord = removePunctuation(word)

          if (isStopWord(pWord.toLowerCase(), stopWords)) {
            newArray.push(word.toLowerCase())
          } else {
            newArray.push(word[0].toUpperCase() + word.slice(1).toLowerCase())
          }
        } 
        else if (isStopWord(word, stopWords)) {
          newArray.push(word.toLowerCase()) 
        } else {
          newArray.push(word[0].toUpperCase() + word.slice(1).toLowerCase())
        }
    }

    return newArray.join(" ")
}

console.log(titleize("forest gump, the runner", ["the"]))
// "Forest Gump, the Runner"

console.log(titleize("MASTER AND COMMANDER", ["and"]))
//"Master and Commander"

console.log(titleize("i LOVE; lover of mine", ["love", "of"]))
//"I love; Lover of Mine"

console.log(titleize("shall we dance?", ["dance"]))
//"Shall We dance?"