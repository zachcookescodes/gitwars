// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false

// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

// Note for Go
// For Go: Empty string slice is expected when there are no anagrams found.

// p => string and array of strings
// r => array of strings that are anagrams of original string found in array
// e => see above
// p => 

function anagrams(word, words) {
  let anas = []
//   array to push anagrams to
  let main = word.split('').sort().join()
// sort the word in js alphabetical order
  
  for(i=0; i < words.length;i++){
    //   loop through array to check if main is found in array
    let col = words[i].split('').sort().join()
      if(main.toLowerCase() == col.toLowerCase()){
        anas.push(words[i])
        // push equal value to new array
        
      }
    
  }
return anas
// return new array
}

