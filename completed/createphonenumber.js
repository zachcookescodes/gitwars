// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// Example

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"



function createPhoneNumber(numbers){
    const numbs = numbers.join('')
    const areaC = numbs.slice(0,3)
    const firsT = numbs.slice(3,6)
    const lastF = numbs.slice(6,10)
    
    return `(${areaC}) ${firsT}-${lastF}`
  }

//   function createPhoneNumber(numbers){
//     var format = "(xxx) xxx-xxxx";
    
//     for(var i = 0; i < numbers.length; i++)
//     {
//       format = format.replace('x', numbers[i]);
//     }
    
//     return format;
//   }