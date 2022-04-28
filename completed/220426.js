// codewars
// my solutions are live, best are commented out
// ------------------------------------------------------
// 
// ---find the maximum value and minimum value of a list
// ---string cleaning
// ---Create Phone Number
// 
// 
// 
// 
// ---------------------------------------------------------
// Your task is to make two functions (max and min, or maximum and minimum, etc., 
// depending on the language) that receive a list of integers as input and return, respectively, 
// the largest and lowest number in that list.
// Examples (Input -> Output)

// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5

// Notes

//     You mls
ay consider that there will not be any empty arrays/vectors.

var min = function(list){
    return Math.min(...list)
}

var max = function(list){
    return Math.max(...list)
}

// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);

// -----------------------------------------------------------------------------------
// Your boss decided to save money by purchasing some cut-rate optical character recognition 
// software for scanning in the text of old novels to your database. At first it seems to capture 
// words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.
// Examples (input -> output)

// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'

// // Your harried co-workers are looking to you for a solution to take this garbled text and 
// remove all of the numbers. Your program will take in a string and clean out all numeric characters, 
// and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

// function stringClean(s){
//     // Function will return the cleaned string
//   var result = '';
//   for(var i=0;i<s.length;i++) {
//     if(isNaN(s[i])||s[i]==' ') result+=s[i]; 
//     }
//   return result;
//   }

//   function stringClean(s){
//     return s.split('').filter((n) => n != parseInt(n)).join('');
//   }

//   function stringClean(s){
//     const nums = "1234567890"
//     let cleanStr = ""
  
//     for (let i = 0; i < s.length; i++) {
//       if (nums.includes(s[i])) continue
//       else cleanStr += s[i]
//     }
    
//     return cleanStr
//   }

// ----------------------------------------------------------------------------
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// Example

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!



function createPhoneNumber(numbers){
    const numbs = numbers.join('')
    const areaC = numbs.slice(0,3)
    const firsT = numbs.slice(3,6)
    const lastF = numbs.slice(6,10)
    
    return `(${areaC}) ${firsT}-${lastF}`
  }
  