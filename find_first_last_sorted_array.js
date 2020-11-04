/*
Leetcode #34. Find First and Last Position of Element in Sorted Array
Level: Medium
Company: Facebook, Amazon, Microsoft, Google, Uber, Bloomberg, ByteDance 

Given an array of integers nums sorted in ascending order, 
find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

Follow up: Could you write an algorithm with O(log n) runtime complexity?

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109

*/

var _searchPosition = (nums, target, midIdx) => {
   let i = midIdx; //3
   let j = midIdx; //3
   while (nums[i - 1] === target) {
      i--;
   }
   while (nums[j + 1] === target) {
      j++;
   }
   return [i, j];
};

var searchRange = function (nums, target) {
   if (nums.length === 0) return [-1, -1];

   let first = 0; // 0
   let last = nums.length - 1; // 4

   while (first <= last) {
      let midIdx = Math.floor((last - first) / 2) + first; //3
      let mid = nums[midIdx]; //8

      if (target < mid) {
         last = midIdx - 1;
      } else if (target > mid) {
         first = midIdx + 1;
      } else {
         return _searchPosition(nums, target, midIdx);
      }
   }

   return [-1, -1];
};
