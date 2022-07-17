function isSubstring(searchString, subString) {
    if (searchString.toLowerCase().indexOf(subString) >= 0) {
        return true
    }
    return false
  }
  
  console.log(isSubstring("The cat went to the store", "he cat went")); // => true
  console.log(isSubstring("Time to program", "time")); // => true
  console.log(isSubstring("Jump for joy", "joys")); // => false