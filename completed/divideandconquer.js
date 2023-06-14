// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.



function divCon(x){
    let strs = x.filter(y => typeof y === 'string').map(z=> +z).reduce((a,b)=> a+b, 0)
    let nums = x.filter(y => typeof y === 'number').reduce((a,b)=> a+b, 0)
    
    return nums - strs
    
    }


    function divCon(x){
        return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
      }