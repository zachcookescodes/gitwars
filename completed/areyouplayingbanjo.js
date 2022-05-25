// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"

// Names given are always valid strings.

// p => string
// r => new string that is dependent on r is username
// e => see above
// p =>


function areYouPlayingBanjo(name) {
    // split the name to check first position of array is r
    let player = name.split('')
    if (player[0].toLowerCase() === 'r'){
      return `${name} plays banjo`
    }else{
      return `${name} does not play banjo`
    }
  }


//   function areYouPlayingBanjo(name) {
//     return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
//   }


// ---------------------------------------------------------------------------------------------------