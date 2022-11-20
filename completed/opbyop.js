// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:(Input1, Input2, Input3 --> Output)

// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5

// Try to do it without using if statements!




function arithmetic(a, b, op){
    // p => 2 number in order and a string name for a mathematical operation
    // r => result of operation performed on order of numbers
    // e => 
    // p =>

    function arithmetic(a, b, op){
    return op === 'add' ? a + b : op === 'subtract' ? a - b : op === 'multiply' ? a * b : a / b
      }
    
}