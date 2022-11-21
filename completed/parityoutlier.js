// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
// Examples

// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

// P => an array of integers
// r => a single integer
// e => [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)
// p => inside =>





function findOutlier(integers){
    let evens = integers.filter(x=> x % 2 === 0) 
    let odds = integers.filter(x=> x % 2 !== 0)
  //    filter two arrays into odds and evens 
        if (evens.length === 1){
  //         find and return the array whose length is 1
              return evens[0]
          }else{
              return odds[0]
          }
  }