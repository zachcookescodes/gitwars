// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

// Don't forget to rate this kata! Thanks :)
// Fundamentals
// Algorithms
// Strings



String.prototype.camelCase=function(){
  //your code here
  return this.split(' ').map( function(x){
    return x.charAt(0).toUpperCase() + x.slice(1)
  } ).join('')
}