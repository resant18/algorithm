// LeetCode: 322
// You are given coins of different denominations and a total amount of money amount. 
// Write a function to compute the *fewest number of coins* that you need to make up that amount. 
// If that amount of money cannot be made up by any combination of the coins, return -1.

// Example 1:

// Input: coins = [1, 2, 5], amount = 11
// Output: 3 
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1

// Method 1: Tabulation
// subAmount 0..11  | 0 | 1 | 2 | 3 | 4 |5 | 6 |7 |8 | 9 | 10 | 11 |
//                  | 0 | 1 | 2 | 3
//                            1   2

// Time: O(amount * coins), Space: O(N)
function coinChange(coins, amount) {
   let coinsCount = new Array(amount + 1).fill(Infinity);

   coinsCount[0] = 0;
   // compute all minimum coins for subamounts up to 11
   for (let coin of coins) {
      for (let subAmount = 1; subAmount <= amount; subAmount++) {
         if (coin <= subAmount) {
            coinsCount[subAmount] = Math.min(coinsCount[subAmount - coin] + 1, coinsCount[subAmount]);
         }
      }
   }

   console.log(coinsCount);
   return coinsCount[amount] !== Infinity ? coinsCount[amount] : -1;
}
   
console.log(coinChange([2], 3)); // -1
console.log(coinChange([3], 2)); // -1
console.log(coinChange([2, 1], 3)); // 2
console.log(coinChange([2,5,10,1], 27)); // 4


// Method 2: Recursive
//          6
//       -1/ \-5 
//       5    1
//    -1/ \-5
//    4    0
//	-1/
// 3

function minChange(coins, amount, memo = {}) {
   // console.log(amount);
   if (amount in memo) return memo[amount];
   if (amount === 0) return 0;

   let minCoins = [];
   for (let coin of coins) {
      // console.log(coin);
      if (amount >= coin) {
         memo[amount] = minChange(coins, amount - coin, memo) + 1;
         minCoins.push(memo[amount]);
      }
   }
      
   return Math.min(...minCoins);
}


