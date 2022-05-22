// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)


function isIsogram(str){
    //... string
    // return true or false
    // compare length of 2 arrays of strings using array.from new set to filter duplicate entries from str array
     str = str.toLowerCase().split('')    
     const arr = Array.from( new Set(str))
     return str.length === arr.length                                              
  }


//   function isIsogram (str) {
//     return !str || (str.length === new Set(str.toLowerCase()).size);
//   }

//   .size returns number of unique elements in a set

