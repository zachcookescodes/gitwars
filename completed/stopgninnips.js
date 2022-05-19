// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"


// p: string
// r: same string with words > 4 letters reversed
// e: see above
// p: see below

//  this is the one that passed
function spinWords(string){
    //   take in a string
      // split into array
      let words = string.split(' ')
      let str = ''
        for(i=0; i < words.length;i++){
      if (words[i].length >= 5){
          words[i] = words[i].split('').reverse().join('')
      }
    }
  return words.join(' ')
}


// best codewars solutions

// function spinWords(words){
//     return words.split(' ').map(function (word) {
//       return (word.length > 4) ? word.split('').reverse().join('') : word;
//     }).join(' ');
//   }


//   function spinWords(str){
//     return str.split(' ').map( w => w.length<5 ? w : w.split('').reverse().join('') ).join(' ');
//   }

















//***********  */other steps in the process 
// function spinWords(string){
//     //   take in a string
//       // split into array
//       let words = string.split(' ')
//       let str = ''
//         for(i=0; i < words.length;i++){
//       if (words[i].length < 5){
//           str += array[i].split('').reverse().join('')
//       }
//       str += array[i]
//     }
// }
    // return a string with
   
    
    // return string.split(' ').forEach((x) => x > 5 ? x.split('').reverse().join('')).join(' ')