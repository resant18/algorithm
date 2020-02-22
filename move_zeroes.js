// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

const moveZeroes = function(nums) {
   let slow = 0; // zero pointer
   let fast = 1; // non-zero pointer

   while (fast < nums.length) {
      if (nums[fast] === 0 || slow === fast) {
         fast++;
         if (fast === nums.length) continue;
      } 
      if (nums[slow] !== 0) {
         slow++;
      }      
      if (nums[slow] === 0 && nums[fast] !== 0) {
         nums[slow] = nums[fast];
         nums[fast] = 0;
         fast++;
         slow++;
      }
   }
   return nums;
};

console.log(moveZeroes([1, 12, 3, 0, 0]));
//           f                            
// 1, 12, 3, 0, 0
//        s                    