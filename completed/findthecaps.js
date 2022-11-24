// Instructions

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
// Example

// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

var capitals = function (word) {
	// Write your code here
  let words = word.split('')
  let arr = []
  for(i=0; i < words.length;i++){
    if (words[i] === words[i].toUpperCase()){
      arr.push(i)
    }
  }
  return arr
};