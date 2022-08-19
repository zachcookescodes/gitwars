// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples

// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"










function toCamelCase(str){ 
    let arr = str.split('');
    for(i = 0; i < arr.length; i++){
      let letter = arr[i];
      if(letter == '_' || letter == '-') {
        arr[i + 1] = arr[i + 1].toUpperCase();
        arr[i] = '';
      } 
    }
    return arr.join('');
  }


//   function toCamelCase(str){
//     return str.replace(/(_|-)./g, m => m.substr(1, 1).toUpperCase());
//   }


//   function toCamelCase(str){
//     return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
//   }