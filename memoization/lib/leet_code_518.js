// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

function minChangeMemo(coins, amount, memo = {}) {  
   let key = amount + "-" + coins;
   if (key in memo) return memo[key];
   if (amount === 0) return 1;

   let total = 0;
   let lastCoin = coins[coins.length - 1];
   for (let i = 0; i * lastCoin <= amount; i++) {      
      total += minChangeMemo(coins.slice(0, -1), amount - i * lastCoin, memo);
   }
   
   memo[key] = total;
   return memo[key];
}

console.log(minChangeMemo([12], 12));

// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

// function minChange(coins, amount) {
//    // console.log(amount);   
//    if (amount === 0) return 1;

//    let total = 0;
//    let lastCoin = coins[coins.length - 1];
//    for (let i = 0; i * lastCoin <= amount; i++) {
//       total += minChange(coins.slice(0, -1), amount - i * lastCoin);
//    }
   
//    return total;
// }

// console.log(minChange([1, 2, 3], 5));
