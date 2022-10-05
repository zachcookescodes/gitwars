// <!-- In the following 6 digit number:

// 283910

// 91 is the greatest sequence of 2 consecutive digits.

// In the following 10 digit number:

// 1234567890

// 67890 is the greatest sequence of 5 consecutive digits.

// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.  -->



function solution(digits){
    return digits.split('').reduce((pre, _, ind) => Math.max(pre, digits.slice(ind , ind+5)), 0)
  }
  
  function solution(digits){
    let answer = 0;
    
    for (let i=0; i<digits.length; i++){
      let number = digits.substr(i, 5);  
      if( +number > answer){     
        answer = +number
      }
    }
    return answer;
  }
  
  function solution(digits){
    return +digits.split('').map((v,i,arr)=>arr.slice(i,i+5).join('')).sort((a,b)=>+b-+a)[0]
  }
  
  