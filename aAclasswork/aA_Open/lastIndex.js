function lastIndex(str, char) {
    for ( i = str.length -1; i >= 0; i--) {
        if (str[i].includes(char)) {
            return i
        }
    }
    return null
}

console.log(lastIndex("abca", "a"))        // 3
console.log(lastIndex("mississipi", "i"))  // 9
console.log(lastIndex("octagon", "o"))     // 5
console.log(lastIndex("programming", "m")) // 7