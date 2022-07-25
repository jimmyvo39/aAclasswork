function productWithReduce (arr) {
    product = arr[0]
    
    for (let i = 1; i < arr.length; i++) {
        product *= arr[i]
    }
    return product
}




console.log(productWithReduce([10, 3, 5, 2])); // 300
console.log(productWithReduce([4, 3])); // 12