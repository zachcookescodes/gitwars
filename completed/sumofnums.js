
// Instructions
// Output

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// p => two integers that can be positive or negative
// r => one number that is either the sum of all the number in between the two
//         or the number if it is given twice as param
// e => see above
// p => found an equation for the sum of digits between 2 numbers called arithmetic progression



function getSum( a,b ){
    if(a === b){
        // equal values show one of the values
        return a
    }else if( a > b ){
        // when a is larger number
        return ((a-b)+1) * (b + a) / 2
    }else if( a < b){
        // when b is larger number
        return ((b-a)+1) * (b + a) / 2
    }
 }