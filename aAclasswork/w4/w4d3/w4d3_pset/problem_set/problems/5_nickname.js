/***********************************************************************
Write a function nickname(name) that takes in a name string and returns
a string representing their nickname. A nickname is the name up to the
second vowel repeated twice. See the examples.

Examples:

nickname('manuel'); // => 'MANU-MANU'
nickname('pikachu'); // => 'PIKA-PIKA'
nickname('bootcamp'); // => 'BOO-BOO'
nickname('bob'); // => 'BOB-BOB'
***********************************************************************/

function nickname(name) {
    let vowels = "aeiou"
    let vowelCount = 0
    let index = 0

    for (let i = 0; i < name.length; i++) {
        let char = name[i]
      
        if(vowels.includes(char)){
            vowelCount++
        }

        if (vowelCount === 2) {
            index = i
            let shortName = name.slice(0,index + 1)
            return `${shortName.toUpperCase()}-${shortName.toUpperCase()}`
        } 
    }
    
  return `${name.toUpperCase()}-${name.toUpperCase()}`
  


}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = nickname;
