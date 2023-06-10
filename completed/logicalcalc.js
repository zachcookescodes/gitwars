// Your Task

// Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.
// Examples

//     booleans = [True, True, False], operator = "AND"

//     True AND True -> True
//     True AND False -> False
//     return False

//     booleans = [True, True, False], operator = "OR"

//     True OR True -> True
//     True OR False -> True
//     return True

//     booleans = [True, True, False], operator = "XOR"

//     True XOR True -> False
//     False XOR False -> False
//     return False

// Input

//     an array of Boolean values (1 <= array_length <= 50)
//     a string specifying a logical operator: "AND", "OR", "XOR"

// Output

// A Boolean value (True or False).








function logicalCalc(array, op){
  //your code here
  console.log(array,op)
  if( op === 'AND'){
    const isTrue = x =>  x === true
    return array.every(isTrue)
  }else if( op === 'OR'){
    return array.includes(true)
  }else{
    let ans = array[0]
    for(let i = 1; i <= array.length-1; i++){
      if(ans === array[i]){
        ans = false
      }else{
        ans = true
      }
    }
    return ans
  }
}

const logicalCalc = (arr,op) => !!arr.reduce((a,b)=> op === 'AND' ? a && b : op === 'OR' ? a || b : a ^ b)