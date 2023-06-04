// Write a function that will check whether ANY permutation of the characters of the input string is a palindrome. Bonus points for a solution that is efficient and/or that uses only built-in language functions. Deem yourself brilliant if you can come up with a version that does not use any function whatsoever.

// For this kata assume that all characters are lowercase.
// Example

// madam -> True
// adamm -> True
// junk -> False
// Hint

// The brute force approach would be to generate all the permutations of the string and check each one of them whether it is a palindrome. However, an optimized approach will not require this at all.



function permuteAPalindrome(input){
    let counts = {}
     
    for(let char of input){
     if(counts[char]){
        counts[char] += 1
      }else{
       counts[char] = 1
      }
     }
    let arr = []
      for(key in counts){
        arr.push(counts[key])
      }
    let ans = arr.filter(x=> x%2 !== 0)
     
    if(input.length <= 1){
        return true
      }else if(input.length % 2 !== 0 && ans.length === 1){
      return true
      }else if(input.length % 2 === 0 && ans.length === 0){
       return true
      }else{
      return false
     }
  
  
  }