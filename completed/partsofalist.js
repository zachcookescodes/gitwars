// Freestyle Sparring
// Take turns remixing and refactoring others code through Kumite
// Career
// Opportunities
// Find your next career challenge – powered by Qualified Jobs
// Community
// Leaderboards
// Achieve honor and move up the global leaderboards
// Chat
// Join our Discord server and chat with your fellow code warriors
// Discussions
// View our Github Discussions board to discuss general Codewars topics
// About

//     Docs
//     Learn about all of the different aspects of Codewars

//     zachcookescodes Avatar
//     4 kyu
//     1,334

// 7 kyu
// Parts of a list
// 4028889% of 1,8703,787 of 13,234g9642 Issues Reported

//     JavaScript
//     Node v18.x

//         VIM
//         EMACS

// Instructions
// Output
// Past Solutions

// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

//     Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
//     Each part will be in a string
//     Elements of a pair must be in the same order as in the original array.

// Examples of returns in different languages:

// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]] 
// or
//  a = {"az", "toto", "picaro", "zone", "kiwi"} -->
// {{"az", "toto picaro zone kiwi"}, {"az toto", "picaro zone kiwi"}, {"az toto picaro", "zone kiwi"}, {"az toto picaro zone", "kiwi"}}
// or
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// [("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
// or 
// a = [|"az", "toto", "picaro", "zone", "kiwi"|] -->
// [("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
// or
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// "(az, toto picaro zone kiwi)(az toto, picaro zone kiwi)(az toto picaro, zone kiwi)(az toto picaro zone, kiwi)"




function partlist(arr) {
    // your code
  let newArr = [] 
for(i=1;i<arr.length;i++){
   console.log([arr.slice(0,i).join(' '),arr.slice(i).join(' ')])
   newArr.push([arr.slice(0,i).join(' '),arr.slice(i).join(' ')])
 }
  return newArr
}

