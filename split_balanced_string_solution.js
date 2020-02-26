// Balanced strings are those who have equal quantity of 'L' and 'R' characters.
// Given a balanced string s split it in the maximum amount of balanced strings.
// Return the maximum amount of splitted balanced strings.

// Example 1:
// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

// Example 2:
// Input: s = "RLLLLRRRLR"
// Output: 3
// Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.

// Example 3:
// Input: s = "LLLLRRRR"
// Output: 1
// Explanation: s can be split into "LLLLRRRR".

// Example 4:
// Input: s = "RLRRRLLRLL"
// Output: 2
// Explanation: s can be split into "RL", "RRRLLRLL", since each substring contains an equal number of 'L' and 'R'

// Assumption: String input is a balanced string, so no need to check if the string is balance or not
// Pseudocode:
// 1. Iterate through string, count letter until it reach the different letter. (count)
// 2. When different letter is found, decrease the count until it reach 0.
// 3. When it reach zero, the substring must be balanced. Save it in a variable result (max)
// 4. Print the max when it reach the end of string

//RLRRLLRLRL;

const splitBalancedString = (s) => {
   let count = 1;
   let max = 0;
   let letter = s[0]; //R
   let i = 1;

   while (i < s.length) {
      if (letter === '') {
         letter = s[i]; 
         count = 0; //R
      }
      letter === s[i] ? count++ : count--;
      if (count === 0) {
         letter = '';
         max++; // 1
      }
      i++;
   }

   return max;
}

console.log(splitBalancedString("RLRRRLLRLL"));

// Better solution:
// var balancedStringSplit = function(s) {
//    let count = 1;
//    let results = 0;
//    for (let i = 1; i < s.length; i++) {
//       s[i] == s[0] ? count++ : count--;
//       if (count == 0) results++;
//    }
//    return results;
// };