function multiply(num1, num2) {
    if (num1 === 1) {
        return num2
    }
    console.log(num1, num2)

    return num2 + multiply(num1 -1, num2)
}

console.log(multiply(6,5))