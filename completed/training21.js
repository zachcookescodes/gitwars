// Coding in function fiveLine, function accept 1 parameter:s. s is a string.

// Please return a string of 5 lines(newline symbol is \n). The first line has one s; Second line have two s; and so on..Fifth line have five s;

// Note1: The two sides of the parameter s may contain some whitespace, please clear them before using s.

// Note2: Using a string template can make your job easier.

// Example:

// fiveLine("  a") should return "a\naa\naaa\naaaa\naaaaa"
// a
// aa
// aaa
// aaaa
// aaaaa       <---The effect when you console.log it
// fiveLine("  xy ") 
// should return "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy"
// xy
// xyxy
// xyxyxy
// xyxyxyxy
// xyxyxyxyxy  <---The effect when you console.log it


function fiveLine(s){
    //coding here...
  let x = s.trim();
    return `${x}\n${x}${x}\n${x}${x}${x}\n${x}${x}${x}${x}\n${x}${x}${x}${x}${x}`;}


    // function fiveLine(s){
    //     s = s.trim();
    //     return `${s}\n${s.repeat(2)}\n${s.repeat(3)}\n${s.repeat(4)}\n${s.repeat(5)}`;
    //   }

    //   function fiveLine(s){
    //     //coding here...
    //     s = s.trim();
    //     var tmp = s;
    //     var res = [s];
        
    //     for (var i = 1; i < 5; i++) {
    //       res.push(s += tmp);
    //     } 
    //     return res.join("\n");
    //   }