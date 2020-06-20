/*
LeetCode and InterviewCake
121. Best Time to Buy and Sell Stock
Level: Easy 
Company: Amazon, Facebook, Microsoft, Goldman Sachs, Bloomberg, Apple, Oracle, 
Walmart Labs, Uber, ByteDance, Expedia, Zillow, Atlassian, Audible,

Say you have an array for which the ith element is the price of a given stock on day i.
If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.

Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.

PSEUDOCODE:
Use Greedy Algorithm to find the minimum and maximum number at one iteration.
The maximum profit is found by the difference of lowest peak and the highest peak. 
Consider if there is no profit, get the least loss.
1. Define that the prices data must be more one.
2. Initiate minimum price (lowest peak) with first price
3. Initiate maximum profit as the difference between first price and second price.
3. Iterate while define the lowest peak and maximum profit:
   - Find possible profit
   - if price is less than minimum, update the minimum prices
   - if the possible profit is greater than maximum profit, update maximum profit
4. Return maximum profit
*/

// Time: O(n), Space: O(1)
const maxProfit = (prices) => 
{
   if (prices.length < 2) return 0;

   let minPrice = prices[0];
   let maxProfit = prices[1] - prices[0];

   for (let i = 1; i < prices.length; i++) {
      let possibleProfit = prices[i] - minPrice;
      maxProfit = Math.max(maxProfit, possibleProfit);
      minPrice = Math.min(minPrice, prices[i]);      
   }

   return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); //5
console.log(maxProfit([9, 7, 4, 1])); //-2