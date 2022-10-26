
// Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples: (Input --> output)

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)


function sumCubes(n){
    // ...
    let i = 0
    let arr = []
    while(i<=n){
      arr.push(i)
      i++
    }
    return arr.map((x)=>x**3).reduce((a,b)=>a+b,0)
  }
