// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
// assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
// assert.strictEqual(findShort("lets talk about javascript the best language"), 3); 
// assert.strictEqual(findShort("i want to travel the world writing code one day"), 1); 
// assert.strictEqual(findShort("Lets all go on holiday somewhere very cold"), 2); 
// assert.strictEqual(findShort("Test where final word shortest see"), 3); 
// assert.strictEqual(findShort("Let's travel abroad shall we"), 2);

function findShort(s){
    //string
    //return length of shortest word
    // split string
    //return new array of lengths
    //return minimum length
    return Math.min(...s.split(' ').map(e=> e.length))
  }