/*******************************************************************************
Write a function highestScore(students) that takes in an array of student objects
as a parameter. It should return a string that corresponds to the student with
the highest score. The string should contain that student's initials
concatenated with their id. Assume the array contains at least 1 student object and
the student with the highest score is unique (there are no ties).
Example:

var students = [
 {name: 'Alvin Zablan', id: 128, score: -42},
 {name: 'Eliot Bradshaw', id: 32, score: 57},
 {name: 'Tommy Duek', id: 2, score: 99},
 {name: 'Fred Sladkey', id: 256, score: 94}
];

highestScore(students); //=> 'TD2'
*******************************************************************************/
function initial(fullname) {
  let parts = fullname.split(" ")

  return parts[0].slice(0, 1) + parts[1].slice(0, 1)
}


function highestScore(students) {
  let highest = students[0].score
  let highestI = 0

  for (let i = 1; i < students.length; i++) {
    let current = students[i].score

    if (highest < current) {
       highest = current
       highestI = i
    }
  }

  return initial(students[highestI].name) + students[highestI].id
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = highestScore;
