// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']


function solution(str){
    //   p =>str
    //   r =>arr of string split in 2 characters pairs
    //   e =>see above
    //   p =>
      
        arr = [];
    //   create variable for empty array to push to
        for(var i = 0; i < str.length; i += 2){
    //       loop through array over string length by 
    //       increments of 2
          second = str[i+1] || '_';
    //       assign variable for second character
    //       that will return the next character if 
    //       true or append the filler
          arr.push(str[i] + second);
    //       pushes newly formed pair to new array
        }
        return arr;
      }
    


//   function solution(s){
//     return (s+"_").match(/.{2}/g)||[]
//  }

//  function solution(str){
//     var i = 0;
//     var result = new Array();
//     if (str.length % 2 !== 0) {
//       str = str + '_';
//     }
//     while (i < str.length) {
//         result.push(str[i] + str[i+1]);
//         i += 2;
//       }
//     return result;
//   }