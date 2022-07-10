/***********************************************************************
Write a function `abbreviate(sentence)` that takes in a sentence string
and returns a new sentence where words longer than 4 characters have
their vowels removed. Assume the sentence has all lowercase characters.
Feel free to use the array below in your solution:

var vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:

abbreviate('bootcamp prep is fun'); // => 'btcmp prep is fun'
abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
abbreviate('hello world'); // => 'hll wrld'
abbreviate('how are you'); // => 'how are you'
***********************************************************************/

// function removeVowels(word) {
//     let vowels = ['a', 'e', 'i', 'o', 'u']
//     let newWord = ""

//     for (i = 0; i < word.length; i += 1) {
//         let char = word
//         if(vowels.indexOf(char))

//     }

// }

// function abbreviate(sent) {
//     let newArray = []
//     let sentArray = sent.split(" ")

//     for (i = 0; i < sentArray.length; i += 1) {
//         let word = sentArray[i]
//         let newWord = ""
        
//         if (word.length > 5) {
//             removeVowel(word);
//             newArray.push(newWord)
//         } else {
//             newArray.push(word)
//         }
//     }
// }

//create a helper function
//receives an element of the original sentences
//removes vowels and returns a new word(str)
//create function to replace certain words
//split sentence
//loop through words
//push word or new word based on if statement

function removeVowel(word) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let charArray = word.split("");
    let newWordArray = [];
    
    for (i = 0; i < charArray.length; i += 1) {
        if (vowels.indexOf(charArray[i]) === -1) {
            newWordArray.push(charArray[i])
        }
    }

    return newWordArray.join("");
}


function abbreviate(sentence) {
    const words = sentence.split(" ");
    const newWords = [];
    for (let  i = 0; i < words.length; i += 1) {
        let word = words[i];
    
        if (word.length >= 5) {
            newWords.push(removeVowel(word));
        } else {
            newWords.push(word);
        }
    }

    return newWords.join(" ");
};

console.log(abbreviate('bootcamp prep is funootcamp prep is fun'))



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = abbreviate;


