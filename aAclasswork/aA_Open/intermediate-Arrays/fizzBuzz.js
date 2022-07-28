function fizzBuzz(max){
    let newArr = [] 
    
    for (let i = 1 ; i < max; i++) {
        let divBy3 = i % 3 === 0
        let divBy5 = i % 5 === 0
        
        if((divBy3 || divBy5) && !(divBy3 && divBy5)) {
            newArr.push(i)
        }
    }
    
    return newArr
}
console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]