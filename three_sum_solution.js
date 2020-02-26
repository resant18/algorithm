// Write an a function, that finds all pairs of elements
// where those elements sum to target.

// NB: The solution set must not contain duplicate triplets.
// Example:
// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]
// SOurce: LeetCode

// Solution 1: Two Pointer, Big O: O(n)
const threeSum = (nums, target) => {
   let result = [];

   // Sort the array, depends on the machine, the time complexity could be n log(n)
   nums.sort( (a, b) => a - b); 
   
   for (let i = 0; i < nums.length - 1; i++) {
      let min = i + 1;
      let max = nums.length - 1;      

      if (i != 0 && nums[i] === nums[i-1]) continue;
      while (min < max) {
         if (nums[min] + nums[i] + nums[max] < target) min++;
         else if (nums[min] + nums[i] + nums[max] > target) max--;
         else {
            let triplet = [nums[i], nums[min], nums[max]];
            result.push(triplet);
            max--;
            while (min < max && nums[min] === nums[min-1]) min++; 
         }
      }
   }
   return result;
}

console.log(threeSum([-1, 0, 3, 4, -1, -5]));