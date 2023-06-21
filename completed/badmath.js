// return bad math. each index added together and the joined via string

// 123 + 349 = 4612 
//  2 + 13 = 15
// 678 + 34 = 61012

function add(num1, num2) {
  let numone = num1.toString().split('').reverse()
  let numtwo = num2.toString().split('').reverse()
  let arr = []
  const len = numone.length < numtwo.length ? numone.length : numtwo.length
  const lleng = numone.length > numtwo.length? numone : numtwo
  for(i=0;i<len;i++){
    arr.push(+numone[i] + +numtwo[i])
  }
    let sku = lleng.slice(len)
    let narr = arr.concat(sku)
    let nnarr = narr.map(x=> x.toString()).reverse().join('')
  return +nnarr
}