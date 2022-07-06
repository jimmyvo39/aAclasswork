// console.log([0,1,2,"something"][3])

// let multi = [
//     ["a", "b", "c"],
//     ["d", "e", "f"],
//     ["g", "h"]
// ]

// function printMulti(arrays) {

//     for (let i = 0; i < arrays.length; i +=1) {
//         for (let j = 0; j < arrays[i].length; j += 1 ) {
//             console.log(arrays[i][j])
//         }
//     }

// }
// printMulti(multi)  

names = ["Wei", "Justin", "Jimmy"]

function pairs(ppl) {
  
    let pair = []

    for (i = 0; i < ppl.length; i += 1) {
        for (j = 0; j < ppl.length; j += 1) {
            pair.push([ppl[i],ppl[j]])
            
        }
    }
    return pair
}
console.log(pairs(names))
