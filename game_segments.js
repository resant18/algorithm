// HackerRank

// Time: O(n), Space: O(1)
function playSegments(coins) {
   // Write your code here
   let max = 0;

   for (const coin of coins) {
      if (coin === 1) max++;
      else max--;
   }

   if (max < 0) return 0;
   let playerPoints = 0;

   for (let i = 0; i < coins.length; i++) {
      if (coins[i] === 1) playerPoints++;
      else playerPoints--;

      if (playerPoints > max - playerPoints) return i + 1;
   }
   return 0;
}
