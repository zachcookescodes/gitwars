// codewars for thursday 04212022

// -- vowels count
// -- disemvowel trolls
// -- square every digit

// ______________________________________________________________

// // Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.



function getCount(str) {
    var vowelsCount = 0;
    const vowels = ['a','e','i','o','u']
    
    for (let char of str){
      if (vowels.includes(char)){
        vowelsCount ++
      }
      
    }
    
    
    // make a loop that searches for vowels and adds to count
    
    return vowelsCount;
  }


// function getCount(str) {
//     return (str.match(/[aeiou]/ig)||[]).length;
//   }

// -------------------------------------------------------------------------------

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


function disemvowel(str) {
    let vowels = ['a', 'e', 'i','o', 'u', 'A', 'E', 'I', 'O', 'U']
    for (let char of vowels){
    str = str.split(char).join('')
    }
    return str;
  }


//   function disemvowel(str) {
//     return str.replace(/[aeiou]/gi, '');
//   }

// ------------------------------------------------------------------------

// square every digit in a number and concatenate back to one number



function fn(num){
    var strArr = num.toString().split('');
    var result = '';
    for(var i = 0; i < strArr.length; i++){
     result += Math.pow(strArr[i], 2) + '';
    }

    return +result;
}

// function squareDigits(num){
//     return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
//   }