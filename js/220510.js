// codewars for 05102022
// my solutions are live, commented out are best solution to me

// -- 
// -- if you can't sleep, just count sheep!
// -- where my anagram's at?


// ---------------------------------------------------------------

/*Our football team finished the championship. The result of each match look like "x:y". 
Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. 
Rules for counting points for each match:

    if x > y: 3 points
    if x < y: 0 point
    if x = y: 1 point

Notes:

    there are 10 matches in the championship
    0 <= x <= 4
    0 <= y <= 4
*/

const points = games => games.reduce((output,current)=>{
    return output += current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0;},0)
// ------------------------------------------------------------------------------------


    // If you can't sleep, just count sheep!!
    // Task:
    
    // Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
   
    
    var countSheep = function (num){
        let sheep = ''
        for (i=1;i<=num;i++){
          sheep += `${i} sheep...`
        }
          return sheep
        

}

// var countSheep = function (num){
//     let str = '';
//     for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
//     return str;
//   }

// -------------------------------------------------------------------------------------


/*What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false

Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

Note for Go
For Go: Empty string slice is expected when there are no anagrams found.
*/

function anagrams(word, words) {
    let anas = []
    let main = word.split('').sort().join()
    
    for(i=0; i < words.length;i++){
      let col = words[i].split('').sort().join()
        if(main.toLowerCase() == col.toLowerCase()){
          anas.push(words[i]) 
        }
    }
  return anas
  }

//   let anagrams = (word, words) => words.filter(w => w.split('').sort().join('') === word.split('').sort().join(''));