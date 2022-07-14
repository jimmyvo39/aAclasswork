// // Choose the appropiate data structure to model the following item(s):
// // 1. Student                 // => { "name": "Wayne", "id": 2, "grades": [100, 88, 92] }
// // 2. Class of students       // => { "paul": {...}, "jacky": {..} }
// // => [ {..}, {...}, {...} ]
// // 3. Car                     // => { "model": "mercedes", "year": 2019, "mileage": 5 }
// // 4. Parking lot             // => [ car1, car2, car3 ], where each `car` is an object

// //************************************ */

// // 1. Grocery list of items: lettuce, tomato, berries
// const grocery1 = ['lettuce', 'tomato', 'berries'];

// // 2. Grocery list of items: 1 lettuce, 2 tomatoes, 3 berries;
// const grocery2 = { lettuce: 1, tomatoes: 2, berries: 3 };

// // 3. What if i want to keep track of the price for each item?
// const grocery3 = ['lettuce', 'tomatoes', 'berries'];
// const lettuce = { quantity: 1, price: 2 };
// const tomato = { quantity: 1, price: 3 };

// //*************************************** */

// // Data Model Examples

// // ~~~~~~ 1

// // 1. Grocery list of items: lettuce, tomato, berries
// const grocery1 = ['lettuce', 'tomato', 'berries'];

// // 2. Grocery list of items: 1 lettuce, 2 tomatoes, 3 berries;
// const grocery2 = { lettuce: 1, tomatoes: 2, berries: 3 };

// // 3. What if i want to keep track of the price for each item?
// const grocery3 = ['lettuce', 'tomatoes', 'berries'];
// const lettuce = { quantity: 1, price: 2 };
// const tomato = { quantity: 1, price: 3 };

// // item: [price, quantity]
// const grocery4 = { lettuce: [1, 2], tomatoes: [2, 4], berries: [3, 0.25] };

// // find the cost
// const cost4 = grocery4['lettuce'][0] * grocery4['lettuce'][1];

// // what if we store the as keys with the values consisting of a object with quantity and price
// const grocery5 = {
//   lettuce: { quantity: 1, price: 2 },
//   tomatoes: { quantity: 2, price: 4 },
//   berries: { quantity: 3, price: 0.25 },
// };
// const cost5 = grocery5['lettuce']['price'] * grocery5['lettuce'].quantity;

// // we can even do better by storing everything in an array, each item being an object with name, price and quantity properties
// const grocery6 = [
//   { name: 'tomato', price: 2, quantity: 10 },
//   { name: 'lettuce', price: 4, quantity: 20 },
//   { name: 'berries', price: 5, quantity: 30 },
// ];

// ~~~~~~ 2
// const students1 = [
//   { name: 'Anthony' },
//   { name: 'Winnie' },
//   { name: 'Pikachu' },
// ];

// function printNames(student) {
//     for (i = 0; i < students1.length; i++) {
//         console.log(student[i].name)
//     }
// }

// printNames(students1)
// // ********************************************

// // Write a function that will print the name of all the students
// // Example:
// //
// // printNames(students1)
// // Anthony
// // Winnie
// // Pikachu

// printNames(students1);

////////////////////////////////////////////////////////////////////////////////
// Data Modeling Practice - Part 1
////////////////////////////////////////////////////////////////////////////////
const students3 = [
    {
      name: 'Anthony',
      id: 0,
      grades: [
        { id: 0, score: 84 },
        { id: 1, score: 20 },
        { id: 2, score: 80 },
      ],
    },
    {
      name: 'Winnie',
      id: 1,
      grades: [
        { id: 0, score: 62 },
        { id: 1, score: 56 },
        { id: 2, score: 100 },
      ],
    },
    {
      name: 'Pikachu',
      id: 2,
      grades: [
        { id: 0, score: 79 },
        { id: 1, score: 92 },
        { id: 2, score: 49 },
      ],
    },
  ];
  
  // Write a function that will print the name of the student and their highest test score
  // Example:
  //
  // printBestGrade(students3)
  // Anthony 84
  // Winnie 100
  // Pikachu 92
  
  // write a helper function to get the highest score for 1 student
function highScore(scores) {
    for

}


  function printBestScore(student) {
    for (i = 0; i < student.length; i++) {
        console.log(student[i].name, highScore(student[i].grades))
    }

  }