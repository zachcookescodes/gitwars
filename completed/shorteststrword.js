

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.




function findShort(s){
    //string
    //return length of shortest word
    // split string
    //check e if length is same as next element
    return Math.min(...s.split(' ').map(e=> e.length))
  }