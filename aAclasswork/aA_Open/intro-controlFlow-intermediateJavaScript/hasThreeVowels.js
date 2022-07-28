function hasThreeVowels (str) {
    let chars = {}
    let vowels = "aeiouAEIOU"
    let vowelCount = {}
    
    for (i = 0; i < str.length; i++) {
        let char = str[i]
        
        if (vowelCount[char] === undefined && vowels.includes(char)) {
            vowelCount[char] = 1
        } 
            
    }
   return (Object.keys(vowelCount).length > 2)
}


console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false