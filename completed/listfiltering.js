// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// Example

// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]


// const filter_list = l => l.filter( x=> Number.isNan(x)) first attempt before reverting back to function

function filter_list(l) {
    let nums = []
    for (i=0; i <= l.length; i++)
   if (Number.isInteger(l[i])){
      nums.push(l[i])
   }
   return nums
  }


//   function filter_list(l) {
//     return l.filter(v => typeof v == "number")
//    }

//   const filter_list = l => l.filter(c => typeof c === 'number');

//   function filter_list(l) {
//     return l.filter(function(v) {return typeof v == 'number'})
//   }