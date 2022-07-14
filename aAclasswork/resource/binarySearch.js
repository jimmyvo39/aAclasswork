function binarySearch(arr, target) {
    if (arr.length === 0||(arr.length === 1 && arr[0] !== target)) {
        return -1;
    }

    let mid = arr[Math.floor(arr.length/2)];
    let left = arr.slice[0, mid];
    let right = arr.slice(mid + 1);

    if (arr[mid] === target) {
        return mid
    } else if (target < arr[mid] {
        return 
    })
}