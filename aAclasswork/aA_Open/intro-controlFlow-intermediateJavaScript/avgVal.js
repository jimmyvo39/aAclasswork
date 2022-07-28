let avgVal = function(arr) {
    if (arr.length === 0) {
        return null;
    }
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        sum += el;
    }

    return sum / arr.length;
};
