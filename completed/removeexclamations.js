// remove exclamation marks from given String




function removeExclamationMarks(s) {
    return s.split('').filter(e => e !== '!').join('');
  }


// function removeExclamationMarks(s) {
//     return s.split('!').join('');
//   }