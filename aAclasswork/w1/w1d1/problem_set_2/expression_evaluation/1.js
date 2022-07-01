// 1
var idx = 'abcde'.indexOf('D');
idx = idx + 11; //10 - idx has been mutalated to 10
console.log(idx); // 10 
idx * 2; // 20 - operation is calculated but it is not printed 
console.log(idx); // 10 - last operation does not affect the current print idx