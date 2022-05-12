// given a size create a function that returns this string pattern

// size = 1 => '1'
// size = 4 => '1010'
// size = 5 => '10101
// '



function stringy(size) {
  var str='';
  for( var i=1; i<=size; i++ )
    str+=i%2;
  return str;
}

const stringy = x => ''.padStart(x,'10');

const stringy = size => "10".repeat(size).slice(0,size);