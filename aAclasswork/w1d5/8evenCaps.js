// Write a function evenCaps(sentence) that takes in a sentence as an
// argument and returns the same string with each even index being
// capitalized. Index 0 counts as even.
//
// Examples:
//
// evenCaps("Tom got a small piece of pie")
// => "ToM GoT A SmAlL PiEcE Of pIe"
// evenCaps("the book is in front of the table")
// => "ThE BoOk iS In fRoNt oF ThE TaBlE"

//split sentence. push toUpperCase if index is even, else push toLowerCase

function evenCaps(str) {
    let newArray =[]
    let strArray = str.split("")

    for (i = 0; i < str.length; i += 1) {
        if (i % 2 === 0) {
            newArray.push(strArray[i].toUpperCase())
        }
        else {
            newArray.push(strArray[i].toLowerCase())
        }
    }

    return newArray.join("")
}

console.log(evenCaps("the book is in front of the table"))
