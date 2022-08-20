// n this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.

// More examples in the test cases.

// Good luck!


function solve(s){
    //..
     let a = s.split('').filter(x => x === x.toUpperCase() 
                      && x !== x.toLowerCase()).length
   
     let b = s.split('').filter(x => x === x.toLowerCase()
                      && x !== x.toUpperCase()).length
     
     let c = s.split('').filter(x => x == 0 || parseFloat(x)).length
     
     let d = s.split('').filter(x => x === x.toUpperCase() &&
                             x === x.toLowerCase()).length - c
   
     return [a,b,c,d]
     
   }



