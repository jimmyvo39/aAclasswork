function pitPat(max){
    let newArr = [] 
    
    for (let i = 1 ; i <= max; i++) {
        let divBy4 = i % 4 === 0
        let divBy6 = i % 6 === 0
        
        if((divBy4 || divBy6) && !(divBy4 && divBy6)) {
            newArr.push(i)
        }
    }
    
    return newArr
}

console.log(pitPat(18)); // [ 4, 6, 8, 16, 18 ]
console.log(pitPat(30)); // [ 4, 6, 8, 16, 18, 20, 28, 30 ]