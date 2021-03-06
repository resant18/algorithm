// LeetCode 209. Minimum Size Subarray Sum
// Level: Medium
// Company: Goldman Sachs, Google, Amazon, Oracle, Facebook, Microsoft, SAP

// Given an array of n positive integers and a positive integer s, 
// find the minimal length of a contiguous subarray of which the sum ≥ s. 
// If there isn't one, return 0 instead.

// Example: 
// Input: s = 7, nums = [2,3,1,2,4,3]
// Output: 2, [4, 3]

// Explanation: the subarray [4,3] has the minimal length under the problem constraint.


// s = 7, nums = [2,3,1,2,4,3]
// TWO POINTER STRATEGY / SLIDING WINDOW
// 1. Initiate first pointer (slow) as 0 => slow
// 2. Initiate second pointer (fast) as 1 that will be used to iterate the array => fast
// 3. Iterate until get the total >= s => total
// 4. When total >= s, deduct the total with the element index 'slow' and move 'slow' pointer to the next element, save the len => len

const minSubArrayLen = function(s, nums) {
   let slow = 0;
   let minLength = nums.length + 1;
   let total = 0;

   for (let fast = 0; fast < nums.length; fast++) {
      total += nums[fast];

      while (total >= s) {         
         minLength = Math.min(minLength, fast - slow + 1);
         total -= nums[slow];
         slow++;
      }
   }

   return minLength > nums.length ? 0 : minLength;
}

console.log(minSubArrayLen(5, [1, 1, 1, 2, 5]));

// maximum-size-subarray-sum-equals-k
// 718. Maximum Length of Repeated Subarray