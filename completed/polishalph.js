// Description:

// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z

// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

function correctPolishLetters(string){
  let str = ''
   let pol = {'ą' : 'a',
              'ć' : 'c',
              'ę' : 'e',
              'ł' : 'l',
              'ń' : 'n',
              'ó' : 'o',
              'ś' : 's',
              'ź' : 'z',
              'ż' : 'z'
      }
  for(let el of string){
    if(Object.keys(pol).includes(el)){
      str += (pol[el])
    }else{
      str += el
    }
  }
  return str
}