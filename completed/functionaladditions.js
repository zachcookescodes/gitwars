
// We want to create a function that will add numbers together when called in succession.

// add(1)(2); // == 3

// We also want to be able to continue to add numbers to our chain.

// add(1)(2)(3); // == 6
// add(1)(2)(3)(4); //  == 10
// add(1)(2)(3)(4)(5); // == 15

function add(n){
  // Let the currying begin!
  const sum = (y) => add(n+y)
  sum.valueOf=()=>n
  return sum
}


