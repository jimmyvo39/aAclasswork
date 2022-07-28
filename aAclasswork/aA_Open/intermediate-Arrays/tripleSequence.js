// aA solution
// function tripleSequence(start, length) {
//     let seq = [start];
//     for (let i = seq.length; i < length; i++) {
//         seq.push(seq[seq.length - 1] * 3);
//     }
//     return seq;
// }


function tripleSequence(start, length) {
    let newArr = []
    
    for (let i = 0; i < length; i++) {
        newArr.push(Math.pow(3,i) * start)
    }
    
    return newArr
}

console.log(tripleSequence(2, 4)); // [2, 6, 18, 54]
console.log(tripleSequence(4, 5)); // [4, 12, 36, 108, 324]