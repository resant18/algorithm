/*
LeetCode #268. Missing Number
Level: Easy
Company: Amazon, Apple

Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, 
find the one that is missing from the array.

Example 1:
Input: [3,0,1]
Output: 2

Example 2:
Input: [9,6,4,2,3,5,7,0,1]
Output: 8

Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
*/

const missingNumber = (nums) => {
   let sum = nums.reduce((total, num) => total += num, 0);
   
   // let expectedSum = num * (num + 1) / 2;
   // or:
   let expectedSum = 0;
   for (let i = 0; i <= nums.length; i++) {
      expectedSum += i;
   }

   return expectedSum - sum;  
}

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));