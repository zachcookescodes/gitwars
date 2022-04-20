// codewars for wednesday 04202022
// ______________________________________________________________

// my refined solution top
// best solution commented out

// --- DNAtoRNA
// --- opposites attract
// --- you only need one


// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]



const reverseSeq = n => {
    let arr = []
    for (i = 1; i <= n; i++){
      arr.push(i)
    }
    return arr.reverse();
  };

//   const reverseSeq = n => {
//     let arr = [];
//       for (let i=n; i>0; i--) {
//         arr.push(i);
//         } return arr;
//     };


// -------------------------------------------------------------


// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"

// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.




function DNAtoRNA(dna) {
  
    return dna.split("T").join('U')
    
    // create a function which returns an RNA sequence from the given DNA sequence
  }

// function DNAtoRNA(dna){
//     return dna.replace(/T/g, 'U');
//   }


// ----------------------------------------------------------------


// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.



function lovefunc(flower1, flower2){
    if (flower1 % 2 === 0 && flower2 % 2 !== 0 || flower1 % 2 !== 0 && flower2 % 2 === 0){
      return true
    }else{
      return false
    }  
    // moment of truth
  }



// function lovefunc(flower1, flower2){
//   return flower1 % 2 !== flower2 % 2;
// }

// __________________________________________________________________________




// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.



function check(a,x){
    return a.includes(x);
  };


//   ------------------------------------------------------------------------------


// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"

// Names given are always valid strings.


function areYouPlayingBanjo(name) {
    // Implement me
    let player = name.split('')
    if (player[0].toLowerCase() === 'r'){
      return `${name} plays banjo`
    }else{
      return `${name} does not play banjo`
    }
  }


//   function areYouPlayingBanjo(name) {
//     return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
//   }


// ---------------------------------------------------------------------------------------------------