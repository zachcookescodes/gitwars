

// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

//     At least one character ("" is not valid)
//     Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
//     No whitespaces / underscore


function alphanumeric(string){
  //your code here
    
  let rx = /[A-Z0-9]/gi 
  let lts = string.match(rx) 
  console.log(lts)
  return lts === null ? false : string.length === lts.length
}


