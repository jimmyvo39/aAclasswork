function rotateRight(array,num) {
    let copy = array.slice()
    
    for (let i = 0; i < num; i++) {
        let ele = copy.pop()
        
        copy.unshift(ele)
    }
    
    return copy
}


let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]