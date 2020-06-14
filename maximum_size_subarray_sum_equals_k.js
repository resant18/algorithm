/*
325. Maximum Size Subarray Sum Equals k
Level: Medium
Company: Google

Given an array nums and a target value k, find the maximum length of a subarray that sums to k. If there isn't one, return 0 instead.

Note:
The sum of the entire nums array is guaranteed to fit within the 32-bit signed integer range.

Example 1:
Input: nums = [1, -1, 5, -2, 3], k = 3
Output: 4 
Explanation: The subarray [1, -1, 5, -2] sums to 3 and is the longest.

Example 2:
Input: nums = [-2, -1, 2, 1], k = 1
Output: 2 
Explanation: The subarray [-1, 2] sums to 1 and is the longest.

Follow Up:
Can you do it in O(n) time?

PSEUDOCODE:
   1. While iterate the array
      - Add up each element to total variable => sum[i] = Sum from index 0 to position i
      - Save the sum in a map
      - Check if the sum is saved in a map before, if yes, update the len 
        with the distance between current index and the index value return from the map => sum[i - k] = sum at position start
   2. Return the len

   For example: [-2, -1, 2, 1], 1

     i
   S[2] = -1 => [-2, -1, 2]
   to get the answer [-1, 2], we need to get rid of -2 (Sum[i - k]), if saved in the map before, we can get the index.
   Sum[k] = Sum[i] - Sum[i - k]
*/


// Time: O(nk), Space: O(1)
const maxSubArrayLen = function(nums, k) {   
   const posBySum = { 0: -1 }; // initialize with -1, to grab 
   let len = 0;
   let sum = 0;

   for (let i = 0; i < nums.length; i++) {
      sum += nums[i];

      if (!(sum in posBySum)) { // Use this format instead of posBySum[sum], because when the value is 0, it's considered false
         posBySum[sum] = i;
      }

      if ((sum - k) in posBySum) {
         len = Math.max(len, i - posBySum[sum - k]);
      }
   }

   return len;
}

console.log(maxSubArrayLen([-2, -1, 2, 1], 1));

