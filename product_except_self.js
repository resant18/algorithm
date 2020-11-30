/*
Leetcode #238. Product of Array Except Self
Level: Medium
Company: Facebook,Amazon,Lyft,Asana,Apple,Microsoft,Uber,Google,Goldman Sachs,eBay,ServiceNow

Given an array nums of n integers where n > 1,  
return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:
Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array 
(including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? 
(The output array does not count as extra space for the purpose of space complexity analysis.)
*/

/*
Method 1 & 2: TWO POINTERS
Method 1:
   1. Create an array to store product of numbers that are on the left side of the current index.
   2. Create an array to store product of numbers that are on the right side of the current index.
   3. Create result array where it store the result of left array and right array.

Time Complexity: O(N), Space Complexity: O(N)
*/

const productExceptSelf = (nums) => {
   let leftProduct = [];
   let rightProduct = [];
   let result = [];
   let n = nums.length;

   leftProduct[0] = 1;   
   for (let i = 1; i < n; i++) {
      leftProduct[i] = leftProduct[i - 1] * nums[ i - 1];
   }

   rightProduct[n - 1] = 1;
   for (let i = n - 2; i >= 0; i--) {
      rightProduct[i] = rightProduct[i + 1] * nums[i + 1];
   }

   for (let i = 0; i < n; i++) {
      result[i] = leftProduct[i] * rightProduct[i];
   }

   return result;
}

console.log(productExceptSelf([1, 2, 3, 4]));

/*
Method 2:
   1. Instead of create array to store product of numbers that are on the left side of the current index, store it directly in the result array.
   2. Create an array to store product of numbers that are on the right side of the current index.
   3. Create result array where it store the result of left array and right array.

Time Complexity: O(N), Space Complexity: O(1)
*/

const productExceptSelf2 = (nums) => {
   let result = [];
   let n = nums.length;

   result[0] = 1;
   for (let i = 1; i < n; i++) {
      result[i] = result[i - 1] * nums[i - 1];
   }

   let productOfRight = 1;
   for (let i = n - 1; i >= 0; i--) {
      result[i] = result[i] * productOfRight;
      productOfRight *= nums[i];
   }

   return result;
}

console.log(productExceptSelf2([1, 2, 3, 4]));

   //  1,  2,  3, 4

   //  1,  1,  2, 6
   //  24, 12, 4, 1