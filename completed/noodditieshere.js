// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the g

function noOdds( values ){
    // Return all non-odd values
    return values.filter((x)=> x % 2 === 0 )
  }