function longWords(words) {
    let newArr = []
    
    for (let i = 0; i < words.length; i++) {
        if(words[i].length > 5) {
            newArr.push(words[i])
        }
    }
    
    return newArr
}


console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]