


// Score 	Grade
// Anything greater than 1 or less than 0.6 	"F"
// 0.9 or greater 	"A"
// 0.8 or greater 	"B"
// 0.7 or greater 	"C"
// 0.6 or greater 	"D"

// Examples:

// grader(0)   should be "F"
// grader(1.1) should be "F"
// grader(0.9) should be "A"
// grader(0.8) should be "B"
// grader(0.7) should be "C"
// grader(0.6) should be "D"


function grader(score) {
    if(score >=.9){
      return 'A'
    }else if(score < .9 && score >= .8){
      return 'B'
    }else if(score < .8 && score >= .7){
      return 'C'
    }else if(score < .7 && score >= .6){
      return 'D'
    }else if(score < .6){
      return 'F'
    }
   }