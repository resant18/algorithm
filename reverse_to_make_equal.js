// Facebook Recruiting Portal
// Given two arrays A and B of length N, determine if there is a way to make A equal to B by reversing any subarrays from array B any number of times.
// Signature
// bool areTheyEqual(int[] arr_a, int[] arr_b)
// Input
// All integers in array are in the range [0, 1,000,000,000].
// Output
// Return true if B can be made equal to A, return false otherwise.
// Example
// A = [1, 2, 3, 4]
// B = [1, 4, 3, 2]
// output = true
// After reversing the subarray of B from indices 1 to 3, array B will equal array A.

/*
   Because we can make unlimited reverse operation for any substring, even for 2 elements.
   So in the end, any permutation would be a valid answer.
   Then what could be invalid is if each element frequency are not the same.
*/

// Time: O(N) Space: O(N)
function areTheyEqual(array_a, array_b) {
   // Write your code here
   const count = {};

   for (const num of array_a) {
      count[num] = count[num] + 1 || 1;
   }   

   for (const num of array_b) {
      if (num in count) count[num] = count[num] - 1;
      else count[num] = 1;
   }   

   return Object.values(count).every((c) => c === 0);
}

console.log([1, 2, 3, 4], [1, 4, 3, 2]);
console.log([1, 2, 3, 4], [1, 4, 3, 3]);