// square every digit in a number and concatenate back to one number




//  p => num
//  r => return number split by character and each digit squared and concatenated back together 
//  e =>  For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
//  p =>








function fn(num){
    var strArr = num.toString().split('');
    var result = '';
    for(var i = 0; i < strArr.length; i++){
     result += Math.pow(strArr[i], 2) + '';
    }

    return +result;
}

// function squareDigits(num){
//     return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
//   }