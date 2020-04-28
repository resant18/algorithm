// Work through this problem on https://leetcode.com/problems/climbing-stairs/ and use the specs given there.
// Feel free to use this file for scratch work.

// This is actually Fibonacci problem

// function climbStairs(n) {
//    let table = new Array(n + 1).fill(0);
//    table[0] = 1;
//    table[1] = 1;

//    for (let stair = 2; stair <= n; stair++) {
//       table[stair] = table[stair - 1] + table[stair - 2];
//    }

//    return table[table.length - 1];
// }

var climbStairs = function (n, memo = {}) {
   if (n in memo) return memo[n];
   if (n === 0) return 1;

   let totalCombination = 0;
   for (let stair of [1, 2]) {
      if (n >= stair) {
         totalCombination += climbStairs(n - stair, memo);          
      }      
   }

   memo[n] = totalCombination;
   return memo[n];
};

console.log(climbStairs(6));