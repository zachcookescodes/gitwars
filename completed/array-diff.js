// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// p => two arrays containing numbers
// r => should return an array with all elements from a that exist in b to be removed and vice versa
// e => see above
// p => 


function arrayDiff(a, b) {
    // filter a for all elements which are not included in list b
    return a.filter(e => !b.includes(e));
  }


//   function array_diff(a, b) {
//     return a.filter(function(x) { return b.indexOf(x) == -1; });
//   }
//  returns a filtered for values which have a negative index (are not present)

// function array_diff(a, b) {
//     b = new Set(b)
//     return a.filter(v => !b.has(v))
//   }

// function array_diff(a, b) {

//     var arr = new Array();
    
//     for(var i = 0;i<a.length;i++){
//         if(b.indexOf(a[i])<0){
//             arr.push(a[i]);
//         }
//     }
  
//     return arr;
// }