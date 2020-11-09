// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

// You are given coins of different denominations and a total amount of money. 
// Write a function to compute the **NUMBER OF COMBINATION** that make up that amount. 
// You may assume that you have infinite number of each kind of coin.

// 5 ',' 1 [ 1, 1, 1, 1, 1, 1, 0 ]
// 6 ',' 1 [ 1, 1, 1, 1, 1, 1, 1 ]
// 5 ',' 5 [ 1, 1, 1, 1, 1, 2, 1 ]
// 6 ',' 5 [ 1, 1, 1, 1, 1, 2, 2 ]

// 5 ',' 1 [ 1, 1, 1, 1, 1, 1, 0 ]
// 5 ',' 5 [ 1, 1, 1, 1, 1, 2, 0 ]
// 6 ',' 1 [ 1, 1, 1, 1, 1, 2, 2 ]   0 + 2
// 6 ',' 5 [ 1, 1, 1, 1, 1, 2, 3 ]

//           6        
// 0*1 /  1*1| ... \5*1     
//    6      5      1
//      0x5/   \ 1x5        
//        5     0

// Method 1: Tabulation
function numWaysOfCoins(coins, amount) {
   let ways = new Array(amount + 1).fill(0);

   ways[0] = 1 //There is 1 way to make 0 subamount, by not using any coins   
   for (const coin of coins) {
      for (let subAmount = 1; subAmount <= amount; subAmount++) {
         if (coin <= subAmount) {
            ways[subAmount] += ways[subAmount - coin];
            console.log(subAmount, ",", coin, ways);
         }
      }
   }
console.log(ways);
   return ways[amount];
}

console.log(numWaysOfCoins([1, 5, 10], 6));

//           11        
// 0*5 /  1*5|   \2*5
//    11     6     1
// etc    
function change(coins, amount, memo = {}) {  
   let key = amount + "-" + coins;
   if (key in memo) return memo[key];
   if (amount === 0) return 1;

   let total = 0;
   let lastCoin = coins[coins.length - 1];
   for (let i = 0; i * lastCoin <= amount; i++) {      
      total += change(coins.slice(0, -1), amount - i * lastCoin, memo);
   }
   
   memo[key] = total;
   console.log('key=' + key + ',memo=' + memo[key])
   return memo[key];
}

// console.log(change([2, 5, 10], 11));



