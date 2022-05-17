// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// Examples (Input -> Output):

// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

// Good Luck!



function doubleChar(str) {
    // input = string => split string into array
    let arr = str.split('')
    // repeat each character in the string once
    let args = arr.map(x => x + x)
    // return repeat each character in the string
    return args.join('')
    // return = string
  }


//   const doubleChar = (str) => str.split("").map(c => c + c).join("");

//   function doubleChar(str) {
//     var word = '';
//     for (var i = 0; i < str.length; i++){
//       word = word + str[i] + str[i];
//     };
//     return word;
//   };