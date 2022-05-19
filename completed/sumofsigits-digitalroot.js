// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
// Examples

//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// parameters: n => number
// returns : => a single digit of all individual numbers of split number
// examples: => see above
// psuedo => 


function digital_root(n) {
    // check to see if it already fits
    if(n <10){
      return n
    //   if so return number
    }else{  
        // if not call this function until true
        // convert to string, split into characters, convert to numbs and reduce(sum)
      return digital_root(n.toString().split('').reduce((x,y)=>(+x)+(+y),0))
    }
  }




// function digital_root(n) {
//     // check if number is already digital root
//     if (n < 10) return n;
//     // 
//     return digital_root(
//       n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
//   }

//   function digital_root(n) {
//     return (n - 1) % 9 + 1;
//   }