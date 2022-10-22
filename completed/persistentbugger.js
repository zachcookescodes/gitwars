// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
    // number to string and split
    var arr = num.toString().split('');

    // count for number of times we mult
    let count = 0

    // variable for numbers that are still longer than 1
    let notOne
  
    // length must be greater than 1 to need mult
    while (arr.length > 1) {
        notOne = arr.reduce(function (sum, currentValue) {
            return sum * currentValue
        })

        // add to the count because we performed operation
        count++

        //split the new number and reset the function.
        arr = notOne.toString().split('')
    }

    // If the new number is no longer greater than 1,
    // then that means we reached the end.
    // Return the count.
    return count
}