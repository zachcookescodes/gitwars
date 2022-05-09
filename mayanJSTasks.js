function camelizeString(str){

    let newString = str.split('-')
    newString = newString.map(
        function (words, index){
            if (index == 0){
                return words.toLowerCase()
            }else{
                return words[0].toUpperCase() + words.slice(1).toLowerCase()
            }
        }
    )
    newString = newString.join('')
    return newString
}

console.log(camelizeString("this-word"))




function filterRange(arr, a, b){
    return arr.filter(item => ( a <= item && item <= b))
}

filterRange([1,2,5,8,55,33,22,18], 6, 33)


let arr = [5,3,8,1]
function filterRangeInPlace(arr, a, b){
    for (let i=0; i < arr.length; i++){
        if (arr[i] < a || arr[i] > b){
            arr.splice(i, 1)
        }
    }
}
