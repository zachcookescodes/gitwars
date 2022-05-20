// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case


// p = > number
// r = > number that represents number of times '1' occurs in its binary sequence
// e = > 1234 (10011010010) should return 5
// p = >


var countBits = function(n) {
    // convert n to a binary string
    // split said string into an array
    // filter the array for all values == 1
    // return length of filtered array
         return n.toString(2).split('').filter(x => x == 1).length
    };


// countBits = n => n.toString(2).split('0').join('').length;