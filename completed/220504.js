// my refined solution top
// best solution commented out
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