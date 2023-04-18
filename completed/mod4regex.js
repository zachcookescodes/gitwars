// You are to write a Regular Expression that matches any string with at least one number divisible by 4 (with no remainder). In most languages, you could do this easily by using number % 4 == 0. How would you do it with Regex?

// A number will start with [ and end with ]. They may (or may not) include a plus or minus symbol at the start; this should be taken into account. Leading zeros may be present, and should be ignored (no octals here ;P). There may be other text in the string, outside of the number; this should also be ignored. Also, all numbers will be integers; any floats should be ignored.

// If there are no valid numbers defined as above, there should be no match made by your regex.

// So here are some examples:

// "[+05620]" // 5620 is divisible by 4 (valid)
// "[+05621]" // 5621 is not divisible by 4 (invalid)
// "[-55622]" // -55622 is not divisible by 4 (invalid)
// "[005623]" // 5623 invalid
// "[005624]" // 5624 valid
// "[-05628]" // valid
// "[005632]" // valid
// "[555636]" // valid
// "[+05640]" // valid
// "[005600]" // valid
// "the beginning [0] ... [invalid] numb[3]rs ... the end" // 0 is valid
// "No, [2014] isn't a multiple of 4..."  // 2014 is invalid
// "...may be [+002016] will be." // 2016 is valid


var Mod4 = /.*\[[+-]?0*(\d*[13579][26]|(?:\d*[02468])?[048])\]/;


// var Mod4 = new RegExp(
// 	'\\[' + 							// Number starts with [
//   '(\\+|\\-)?' +				// Optionally allow plus or minus sign at start
//   '0*' +								// Ignore leading zeroes
//   '(' +									// Either:
//   	'[048]|' +					// - Have only one digit, then it needs to be 0, 4 or 8
//     '\\d*(' +						// - Have two or more digits, then it needs to be either
//     	'[02468][048]|' +	//   - the second-to-last digit is even, followed by 0, 4 or 8
//       '[13579][26]' +   //   - the second-to-last digit is odd, followed by 2 or 6
//   '))' +								// Close either blocks
//   '\\]');								// Number ends with ]