// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
// Example:

// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13


function mxdiflg(a1, a2) {
    let lA1 = a1.map(x=>x.length)
    let maxA1 = Math.max(...lA1)
    let minA1 = Math.min(...lA1)
    
    let lA2 = a2.map(x=>x.length)
    let maxA2 = Math.max(...lA2)
    let minA2 = Math.min(...lA2)
    
    let diff1 = Math.abs(maxA1 - minA2)
    let diff2 = Math.abs(minA1 - maxA2)
    
    
    // !a1 || !a2 ? -1 : 
    
    return  a1.length === 0 || a2.length === 0 ? -1 :diff1 > diff2 ? diff1 : diff2
    }