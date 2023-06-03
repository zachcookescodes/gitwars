// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

// Don't forget to rate this kata! Thanks :)


String.prototype.camelCase = function(){
    //your code here
    if(this.length === 0){
      return ''
    }
    let arr = this.split(' ')
    let xarr = arr.map( x => x.split(''))
    let ans = xarr.map( x => x[0].toUpperCase() + x.join('').slice(1,x.length) ).join('')
    return ans
  }