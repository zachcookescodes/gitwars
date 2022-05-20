// This time no story, no theory. The examples below show you how to write function accum:
// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.


// p: string
// r: same string with each letter the index number of times separated by -
// e: see above
// p:


function accum(s) {
    // convert entire string to uppercase
    // split string into array by character
    // map a new array that takes each elemenet and add the same element lower case repeated index amount of times
    // rejoin array into string by -
    return s.toUpperCase().split('').map((x,y) => x += x.toLowerCase().repeat(y)).join('-')
    
  }
  
  

//   function accum(s) {
//     return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
//   }

// function accum(s) {
//     return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
//   }