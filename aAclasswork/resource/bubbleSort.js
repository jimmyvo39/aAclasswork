function bubbleSort(arr) {
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i +1]) {
                [arr[i + 1], arr[i]] =  [arr[i], arr[i + 1]];
                sorted = false
            }
        }
    }
    return arr
}

console.log(bubbleSort([7, 6, 9, 1 ,8,1, 5, 4, 3, 1, 2]))