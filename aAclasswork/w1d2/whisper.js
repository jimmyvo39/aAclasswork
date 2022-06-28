// Write a function `whisper` that takes in a string and returns a "whispered" version
// of that string.
//
// Examples:
// whisper("Hey Anthony"); // => "...hey anthony..."
// whisper("YEA! that was fun"); // => "...yea! that was fun..."
function whisper(string) {
    console.log("..."+string.toLowerCase()+"...")
  }
whisper("Hey Anthony"); // => "...hey anthony..."
whisper("YEA! that was fun"); // => "...yea! that was fun..."