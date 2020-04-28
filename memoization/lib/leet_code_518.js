// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

// You are given coins of different denominations and a total amount of money. 
// Write a function to compute the **NUMBER OF COMBINATION** that make up that amount. 
// You may assume that you have infinite number of each kind of coin.

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

console.log(change([1, 2, 5], 11));



