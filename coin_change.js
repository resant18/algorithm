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

// Tabulation
// subAmount 0..11  | 0 | 1 | 2 | 3 | 4 |5 | 6 |7 |8 | 9 | 10 | 11 |
//                  | 0 | 1 | 2 | 3
//                            1   2

function coinChange(coins, amount) {
   let coinsCount = new Array(amount + 1);
   coinsCount.fill(amount + 1);

   coinsCount[0] = 0;
   // compute all minimum coins for subamounts up to 11
   for (let i = 1; i <= amount; i++) {
      for (let coin of coins) {
         if (i >= coin && coinsCount[i - coin] > -1) {            
            coinsCount[i] = Math.min(coinsCount[i - coin] + 1, coinsCount[i])
         }         
      }
   }

   console.log(coinsCount);
   return coinsCount[coinsCount.length - 1] === amount + 1 ? -1 : coinsCount[coinsCount.length - 1];
}
   
console.log(coinChange([2], 3));
console.log(coinChange([3], 2));
console.log(coinChange([2, 1], 3));
console.log(coinChange([2,5,10,1], 27));
