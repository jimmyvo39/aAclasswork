function bubbleSort(arr) {
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < arr.length - 1; i++) {
            [arr[i + 1], arr[i]] =  [arr[i], arr[i + 1]];
            sorted = false
        }
    }
    return arr
}