// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

var greet = function(name) {
    let right = name.toLowerCase()
    return `Hello ${right[0].toUpperCase()}${right.slice(1)}!`
  };