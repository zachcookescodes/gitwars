// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.
// Example

// text before = "abc"
// character   = "z"
// text after  = "zzz"

p => String
r => string with the goods replaced
e => see above
p =>


function contamination(text, char){
    return text.split('').map(x => char).join('')
    // converts string to array that is then mapped out into new array of char and then rejoined into a string
  }





  //   function contamination(text, char){
//      return char.repeat(text.length)
//   }