function yeller(words) {
    let newArr = []
    
    for (let i = 0; i <words.length; i++) {
        newArr.push(words[i].toUpperCase() + "!")
    }
    
    return newArr
}

console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]