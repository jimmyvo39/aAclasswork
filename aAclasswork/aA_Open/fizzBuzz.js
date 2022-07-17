function fizzBuzz(max) {
    for (i = 0; i < max; i++) {
        if ((i % 5 === 0 || i % 3 === 0) && !(i % 5 === 0 && i % 3 === 0)) {
            console.log(i)
        }
    }
}

fizzBuzz(20); // prints out:
// 3
// 5
// 6
// 9
// 10
// 12
// 18
