// <!-- You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
//  -->

// p => an array of letters
// r => boolean for true that directions lead back home and take 10 mins
// e => ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'] back to neutral in 10 moves
// p =>


function isValidWalk(walk) {
    let ns = 0
    let ew = 0
    // establish back to start variables n -> s === 0 // e -> w === 0
    if (walk.length == 10){
        // length always has to be 10 for 10 minutes
          for (let i of walk){
            //loop through the i's of array for their values
            if (i == 'n'){
                ns+=1
                }else if (
                  i == 's'){
                  ns-=1
                // one move north and one move south would bring you back to start
                }else if(
                  i == 'e'){
                  ew += 1
                }else if (
                  i == 'w'){
                  ew-=1
            }       
        } return ns == 0 && ew == 0    
        // return counts to make sure both have back eneded at base
    }
  }


//   function isValidWalk(walk) {
//     function count(val) {
//       return walk.filter(function(a){return a==val;}).length;
//     }
//     return walk.length==10 && count('n')==count('s') && count('w')==count('e');
//   }



//   function isValidWalk(walk) {
//     var dx = 0
//     var dy = 0
//     var dt = walk.length
    
//     for (var i = 0; i < walk.length; i++) {
//       switch (walk[i]) {
//         case 'n': dy--; break
//         case 's': dy++; break
//         case 'w': dx--; break
//         case 'e': dx++; break
//       }
//     }
    
//     return dt === 10 && dx === 0 && dy === 0
//   }