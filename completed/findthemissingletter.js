// Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'

// (Use the English alphabet with 26 letters!)


function findMissingLetter(array){
  let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
                 'n','o','p','q','r','s','t','u','v','w','x','y','z']

const first = array[0]

if(first === first.toUpperCase()){
  letters = letters.join('').toUpperCase().split('')
}

const aFirst = letters.indexOf(first)

letters = letters.splice(aFirst,array.length+1)
  
for(i=0;i<letters.length;i++){
  if(array.indexOf(letters[i])=== -1){
    return letters[i]
  }
}
  }