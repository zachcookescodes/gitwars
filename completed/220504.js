// my refined solution top
// best solution commented out


// --sum of multiples of 3 or 5
// --rps with 2 inputs
// --needle in a haystack
// --jenny loves johnny
// --count positives and sum negatives 
// --count the monkeys

// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------



// If we list all the natural numbers below 10 that are 
// multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these
//  multiples is 23.
// Finish the solution so that it returns the sum of all 
// the multiples of 3 or 5 below the number passed in.
//  Additionally, if the number is negative, return 0 
//  (for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only 
// count it once.

function solution(number){
    let sum = 0
    for (let i=1; i < number; i++){
      if(i % 3 === 0){
        sum += i
      }else if(i % 5 === 0){
        sum += i  
      } 
    }
    return sum
  }
  
  //   var sum = 0;
    
  //   for(var i = 1;i< number; i++){
  //     if(i % 3 == 0 || i % 5 == 0){
  //       sum += i
  //     }
  //   }
  //   return sum;
  // }
// -----------------------------------------------
// -----------------------------------------------

// make a rps game where two use inputs return the result of game of rps


const rps = (p1, p2) => {
  
    if (p1.toLowerCase() === p2.toLowerCase()){
      return 'Draw!'
    }else if( p1.toLowerCase() === "rock" && p2.toLowerCase() === "scissors"){
      return 'Player 1 won!'
    }else if( p1.toLowerCase() === "paper" && p2.toLowerCase() === "rock"){
      return 'Player 1 won!'
    }else if( p1.toLowerCase() === "scissors" && p2.toLowerCase() === "paper"){
      return 'Player 1 won!'
    }else if( p2.toLowerCase() === "rock" && p1.toLowerCase() === "scissors"){
      return 'Player 2 won!'
    }else if( p2.toLowerCase() === "paper" && p1.toLowerCase() === "rock"){
      return 'Player 2 won!'
    }else if( p2.toLowerCase() === "scissors" && p1.toLowerCase() === "paper"){
      return 'Player 2 won!'
    }
    
  };



// const rps = (p1, p2) => {
//     if (p1 === p2) return "Draw!";
//     var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
//     if (p2 === rules[p1]) {
//       return "Player 1 won!";
//     }
//     else {
//       return "Player 2 won!";
//     }
//   };



// -----------------------------------------------------
// -----------------------------------------------------

// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing 
// one "needle"
// After your function finds the needle it should return a message (as a string) 
// that says:
// "found the needle at position " plus the index it found the needle, so: 
// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])

// should return "found the needle at position 5" 
// (in COBOL "found the needle at position 6")

function findNeedle(hays){
    const needle = (e) => e === 'needle'
    return `found the needle at position ${hays.findIndex(needle)}`
}

// function findNeedle(haystack) {
//     return "found the needle at position " + haystack.indexOf("needle");
//   }


// -----------------------------------------------------
// -----------------------------------------------------



// Jenny has written a function that returns a greeting for a user. However, she's
//  in love with Johnny, and would like to greet him slightly different. She added 
// a special case to her function, but she made a mistake.

function greet(name){
    if(name === "Johnny"){
      return "Hello, my love!";
  }else{  return "Hello, " + name + "!";
       }
  }

//   function greet(name){
//     return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
//   }



// -----------------------------------------------
// -----------------------------------------------


// Given an array of integers.

// Return an array, where the first element is the count of positives numbers 
// and the second element is sum of negative numbers. 0 is neither positive nor 
// negative.
// If the input is an empty array or is null, return an empty array.
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should 
// return [10, -65].


function cPSN(input) {
    if (input === null || input.length === 0)
        return []
    
    let count = 0
    let sum = 0

    for (i=0; i < input.length; i++){
    if (input[i] > 0){
      sum += 1
   }else if ( input[i] < 0){
     count += input[i]}  
    }
    return [sum, count]
  }

//   function countPositivesSumNegatives(input) {
//     if (input == null || input.length == 0)
//       return [];
    
//     var positive = 0;
//     var negative = 0;
    
//     for (var i=0, l=input.length; i<l; ++i)
//     {
//       if (input[i] > 0)
//         ++ positive;
//       else
//         negative += input[i];
//     }
    
//     return [positive, negative];
// }


// --------------------------------------------------
// --------------------------------------------------

// You take your son to the forest to see the monkeys. 
// You know that there are a certain number there (n), but your son is too 
// young to just appreciate the full number, he has to start counting them from 1.
// As a good parent, you will sit and count with him. Given the number (n), 
// populate an array with all numbers up to and including that number, 
// but excluding zero.
// For example:
// monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// monkeyCount(1) // --> [1]


function monkeyCount(n) {
    let monkeys = []
    for(i=1; i <= n; i++ ){
    monkeys.push(i)
  
    }
    return monkeys
  }

  
// --------------------------------------------------
// --------------------------------------------------