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

      // check if the first two numbers are duplicate
      if (i != 0 && nums[i] === nums[i-1]) continue;
      while (min < max) {
         if (nums[min] + nums[i] + nums[max] < target) min++;
         else if (nums[min] + nums[i] + nums[max] > target) max--;
         else {
            let triplet = [nums[i], nums[min], nums[max]];
            result.push(triplet);
            max--;
            // check if any numbers are duplicate, keep find the next number that is different
            while (min < max && nums[max] === nums[max+1]) max--; 
         }
      }
   }
   return result;
}

// -5 -2 1 1 3 5 5 5

console.log(threeSum([5, 5, 3, 5, 1, -5, 1, -2], 3));