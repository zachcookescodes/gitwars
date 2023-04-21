// Snail Sort

// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]

// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]



const snail = (array) =>{
    let finalArray = []
    // establish new array
    while(array.length){
        console.log('function begins')
        console.log(array)
        console.log('loop begins extracts arr[0]')
    // while array has length
      finalArray.push(...array.shift())
        console.log(array)
        console.log(finalArray)
    // extract row at 0 
      for (var i = 0; i < array.length; i++){
    // loop through modified array of arrays
        finalArray.push(array[i].pop())
    // extract final element from each array inside main array
      }
        console.log('pop last elements from each subarray')
        console.log(array)
        console.log(finalArray)
      console.log('poplastarrayreversed')
      finalArray.push(...(array.pop() || []).reverse())
    // push a reversed version of last array or an empty array if there is nothing left
      console.log(array)
      console.log(finalArray)
      console.log('removefirstelementfromreversedarray')
      for (var i = array.length -1; i >= 0; i--){
    // loop through array backwards
            finalArray.push(array[i].shift())
    // push first elements from backwards array
      console.log(array)
      console.log(finalArray)
      }
    }
    return finalArray
  }
  
  console.log(snail([[ 1,  2,  3,  4,  5], 
   [ 6,  7,  8,  9, 10], 
   [11, 12, 13, 14, 15], 
   [16, 17, 18, 19, 20], 
   [21, 22, 23, 24, 25]]))