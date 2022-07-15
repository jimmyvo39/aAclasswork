/***********************************************************************
Write a function threeUniqueVowels(string) that takes in a string and
returns true if the string contains at least three different vowels.

Vowels are a, e, i, o, u

Examples:

threeUniqueVowels('delicious'); // => true
threeUniqueVowels('bootcamp prep'); // => true
threeUniqueVowels('bootcamp'); // => false
threeUniqueVowels('dog'); // => false
threeUniqueVowels('go home'); // => false
***********************************************************************/

function threeUniqueVowels(string) {
    let strArray= string.split("")
    let uniqCount = 0
    let vowels = {a: 0,
                e: 0,
                i: 0,
                o: 0,
                u: 0
                }

    for (let i = 0; i < strArray.length; i++) {
        
        if(vowels[strArray[i]]!== undefined) {
            vowels[strArray[i]]++
        }
    }

    for (let key in vowels) {
        if (vowels[key] > 0) {
            uniqCount++
        }
    }

    return (uniqCount > 2) 
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = threeUniqueVowels;
