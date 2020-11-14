/*
LeetCode 628. Maximum Product of Three Numbers
Level: Easy
Company: Amazon, Uber, Apple, Citadel

Given an integer array nums, 
find three numbers whose product is maximum and return the maximum product.

Example 1:
Input: nums = [1,2,3]
Output: 6

Example 2:
Input: nums = [1,2,3,4]
Output: 24

Example 3:
Input: nums = [-1,-2,-3]
Output: -6
 

Constraints:
3 <= nums.length <= 104
-1000 <= nums[i] <= 1000


- Maybe duplicate: [3, 4, 3]
- Not sorted
- Might contains negative
  + + + => positive => max1, max2, max3
  - - + => small negative, small negative, big positive => min1, min2, max1
  - + + -> big negative, big positive, big positive => max3, max1, max2
  - - - => small negative, small negative, big negative => min1, min2, max1

  possibility: 
   whichever is bigger: max1 * max2 * max3 or min1 * min2 * max1

   5, 2, -7, 5
*/
const maximumProduct = (nums) => {
   let max1 = -Infinity, //5
       max2 = -Infinity, //5
       max3 = -Infinity; //2
   let min1 = Infinity, //-7
      min2 = Infinity; //2

   for (let num of nums) {
      if (num > max1) {
         max3 = max2;
         max2 = max1;
         max1 = num;
      } 
      else if (num > max2) {
         max3 = max2;
         max2 = num;
      }
      else if (num > max3) {
         max3 = num;
      } 
      
      if (num < min1) {
         min2 = min1;
         min1 = num;
      }
      else if (num < min2) {
         min2 = num;
      }
   }

   return Math.max(max1 * max2 * max3, min1 * min2 * max1);
};

console.log(maximumProduct([5, 2, 7, 1])); // 70
console.log(maximumProduct([5, 2, -7, 1])); // 10
console.log(maximumProduct([-5, -2, 7, 1])); // 70
console.log(maximumProduct([-5, -2, 5, 1])); // 50
