function reverb (str) {
    let vowels = "AEIOUaeiou"
    
    if (typeof str !== "string") {
        return null
    }
    
    for (let i = str.length - 1; i >= 0; i--) {
        if (vowels.includes(str[i])) {
            return str+str.slice(i)
        }
    }
}



console.log(reverb('running')); // runninging
console.log(reverb('FAMILY'));  // FAMILYILY
console.log(reverb('trash'));   // trashash
console.log(reverb('DISH'));    // DISHISH
console.log(reverb(197393));    // null