/**
 * 88. Merge Sorted Array
Level: Easy

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.

Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]


 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/*
- Compare each element from both arrays from backward
   - if element at nums1 bigger, shift it to the index of len
   - othersiwe, insert the element of nums2 to num1 at index of len
- if n > 0, means there are left over elements in nums2 that have not inserted to nums1
  - insert it one by one in the second loop
*/
var merge = function (nums1, m, nums2, n) {
   let len = nums1.length - 1;
   m--;
   n--;

   while (m >= 0) {
      if (nums2[n] >= nums1[m]) {
         nums1[len] = nums2[n];
         n--;
      } else {
         nums1[len] = nums1[m];
         m--;
      }
      len--;
      // console.log(nums1);
   }

   // if there is any left over elements in nums2 that have not inserted to nums1 yet
   // at this point m < 0 and n pointer is at the last element that need to be inserted to nums1
   while (n >= 0) {
      nums1[n] = nums2[n];
      n--;
   } 
   // console.log(nums1);
   return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([2, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3));
console.log(merge([1, 0, 0], 1, [-2, -1], 2));

console.log(merge([1, 2, 5, 0, 0, 0], 3, [5, 7, 9], 3));
console.log(merge([5, 7, 0, 0], 2, [1, 2], 2));