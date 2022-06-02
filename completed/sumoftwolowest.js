// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// p => array of numbers 
// r => number that is the sum of the two smallest integers in the array
// e => see above
// p =>


function sumTwoSmallestNumbers(numbers) {  
    let arr = numbers.sort((a,b) => a - b);
    // sort array in ascending order, return lowest 2 values summed
    return arr[0] + arr[1];
  };




//   function sumTwoSmallestNumbers(numbers) {  
//     var [ a, b ] = numbers.sort((a, b) => a - b)
//     return a + b
//   }