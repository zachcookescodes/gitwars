// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


function XO(str) {
    //string
  return str.split('').filter(e => e.toLowerCase() == 'x').length ===
  str.split('').filter(e => e.toLowerCase() == 'o').length
    //search for x and o
    // compare x count and o count using length
    // if === return true 
//   return exes === ohs
}








// function XO(str) {
//     var sum = 0;
//     for(var i=0; i<str.length; i++){
//       if(str[i].toLowerCase() == 'x') sum++;
//       if(str[i].toLowerCase() == 'o') sum--;
//     }
//     return sum == 0;
//   }