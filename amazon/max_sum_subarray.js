/*
Leetcode 53. Maximum Subarray
Level: Easy
Company: Amazon , Apple , Microsoft , Facebook, Google, Bloomberg, LinkedIn, 
Cisco, Adobe, Oracle, Capital One, Uber, Paypal, ByteDance

Given an integer array nums, find the contiguous subarray (containing at least one number) 
which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Follow up:
If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

PSEUDOCODE: Kadane's algorithm Dynamic Programming
1. Sum up the contiguous subarray. Update the sum by comparing nums[i] & nums[i] + previous sum, whichever bigger
   sum[i] = max( A[i], A[i] + sum[i - 1] )
2. Keep track of the maximum sum along the way. 

*/

// Kadane's algorithm with time O(n) and space O(1) without mutate original array
const maxSubArray = (nums) => {
   let n = nums.length;
   let maxSum = nums[0];
   let sum = nums[0];

   for (let i = 1; i < n; i++) {
      sum = Math.max(nums[i], sum + nums[i]);
      maxSum = Math.max(maxSum, sum);
   }

   return maxSum;
};

console.log(maxSubArray([- 2, 1, -3, 4, -1, 2, 1, -5, 4])); //6