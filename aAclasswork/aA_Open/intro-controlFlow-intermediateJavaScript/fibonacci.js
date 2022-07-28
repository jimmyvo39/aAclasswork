function fibonacci(length) {
    if (length === 0) {
        return [];
    } else if (length === 1) {
        return [1];
    }
    
    let sequence = [1,1];
    
    while (sequence.length < length){
    let last = sequence[sequence.length -1];
    let secondToLast = sequence[sequence.length -2];
    let nextEl = last + secondToLast;
    sequence.push(nextEl);
    }
    
    return sequence;
}

console.log(fibonacci(0)); // []
console.log(fibonacci(1)); // [1]
console.log(fibonacci(6)); // [1, 1, 2, 3, 5, 8]
console.log(fibonacci(8)); // [1, 1, 2, 3, 5, 8, 13, 21]