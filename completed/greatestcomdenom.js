// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.


 
function gcd(x,y){
    if (x>y){
   return x%y === 0 ? y : x%y
   }else if(y>x){
   return y%x === 0 ? x : y%x
   }else if(x === y){
     return x
   }
   return 1
 }
 
