
// Task

// Given an array/list [] of integers , Find the


function nthSmallest(arr, pos){
  return arr.sort((a,b)=>a-b)[pos-1]
}