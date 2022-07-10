/*******************************************************************************
Write a function royalWe(sentence) that returns an string where every word
'I' is replaced with 'we', every word 'mine' is replaced with 'ours', every
word 'my' is replaced with 'our', and every word 'me' is replaced with "us"

Examples:

royalWe("I want to go to the store") => "we want to go to the store"
royalWe("This is my house and you will respect me") => "This is our house and you will respect us"
royalWe("This is mine") => "This is ours"
royalWe("Jump for my love") => "Jump for our love"
*******************************************************************************/

// function royalWe(sentence) {
//   let senArray = sentence.split(" ")
//   let newArray = []

//   for (i = 0; i < senArray.length; i += 1){
//     let word = senArray[i]

//     if (word === "I") {
//       newArray.push("we")
//     } else if (word === "my") {
//       newArray.push("our")
//     } else if (word === "me") {
//       newArray.push("us")
//     } else if (word === "mine") {
//       newArray.push("ours")
//     } else {
//       newArray.push(word)
//     }
//   }

//   return newArray.join(" ")
// }

function royalWe(sentence) {
  let obj = {
      "I":"we",
      "my":"our",
      "me":"us",
      "mine":"ours",
  }

  return sentence.split(" ").map(word => {
    if (obj[word]) {
      return obj[word]
    } else {
      return word
    }
  }).join(" ");
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = royalWe;
