// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// dnaStrand []        `shouldBe` []
// dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
// dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
// dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]

//p => string
//r => string with letters replaced by complements
//e => see above
//p =>

function DNAStrand(dna){
    let comp = ''
    //create a new string to add to
    for (i=0; i < dna.length ; i++){
        //create a loop that will check each element in the string for values below
        //and will add the substitute value in its place on the new string(comp)
        if(dna[i] == 'A'){
            comp += 'T'
        }        
        if(dna[i] == 'T'){
            comp += 'A'
        }
        if(dna[i] == 'C'){
            comp += 'G'
        }
        if(dna[i] == 'G'){
            comp += 'C'
        }        
    }
    return comp
  }


//   var pairs = {'A':'T','T':'A','C':'G','G':'C'};

// function DNAStrand(dna){
//   return dna.split('').map(function(v){ return pairs[v] }).join('');
// }