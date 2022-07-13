// function higherOrder(cb) {
//     cb();
// }

// function sayHello() {
//     console.log('hello!');
// }

// function sayGoodBye() {
//     console.log('goodbye');
// }

// // higherOrder(sayHello);

// // higherOrder(sayGoodBye);

// // sayHello();

// function addAndCall(num1, num2, cb) { 
//     var sum = num1 + num2; 
//     return cb(sum);  
// }

// function yellAnswer(answer) { 
//     console.log(answer + ' IS THE ANSWER!');
// }

// function double(num) { 
//     return num * 2; 
// }

// // addAndCall(40, 2, yellAnswer); //42 IS THE ANSWER!
// // addAndCall(1, 1, console.log); //2
// // console.log(addAndCall(10, 2, double)); //24    
// // console.log(addAndCall(30, 6, Math.sqrt));  //6 

//First argument => element
//Second argument => index
//Third argument => entire array

let nums = [0,1,2,3,4,5,6,7,8,9,10];

// //<array>.forEach() - Similar to for loop, iterate over the array

// nums.forEach((element, index, array) => {
//     console.log( index + ' : ' + element);           
// });

//<array>.map() - Returns a new array where each element of the array is modified by an anonymous call back function

// let doubledArray = nums.map((ele) => {
//     return ele * 2;
// })
// console.log(doubledArray);
// console.log(nums);

//<array>.every() - Returns the boolean 'true' if all element within the array returns true when passed into an anonymous call back function
//Returns false if any element within the array returns false


let notNegative = nums.every((ele) => {
    if(ele > 3) {
        return true;
    }
    return false;
})
// console.log(notNegative);

//<array>.some() - Returns the boolean 'true' if any element within the array returns true when passed into an anonymous call back function
//Returns false if all elements withtin the array returns false

let nums2 = [5,20,100];
let containsNegative = nums2.some((ele) => {
    if(ele > 10) {
        return true;
    }
    return false;
})
console.log(containsNegative);