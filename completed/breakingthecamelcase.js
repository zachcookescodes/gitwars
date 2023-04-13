// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    let spacedString = ''
    for(i=0; i<string.length; i++){
      if(string[i] === string[i].toUpperCase()){
        spacedString += ' ' + string[i]
      }else{
        spacedString += string[i]
    }
  }
      return spacedString
  }