/*
Leetcode # 373. Find K Pairs with Smallest Sums
Level: Medium
Company: Amazon, Google, Facebook, LinkedIn

You are given two integer arrays nums1 and nums2 sorted in ascending order and an integer k.

Define a pair (u,v) which consists of one element from the first array and one element from the second array.

Find the k pairs (u1,v1),(u2,v2) ...(uk,vk) with the smallest sums.

Example 1:

Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
Output: [[1,2],[1,4],[1,6]] 
Explanation: The first 3 pairs are returned from the sequence: 
             [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
Example 2:

Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
Output: [1,1],[1,1]
Explanation: The first 2 pairs are returned from the sequence: 
             [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
Example 3:

Input: nums1 = [1,2], nums2 = [3], k = 3
Output: [1,3],[2,3]
Explanation: All possible pairs are returned from the sequence: [1,3],[2,3]


PSEUDOCODE:
1. Defined 2 pointers, one for each array. => var: p1, p2, initialize with 0
2. Define result as array => var: result
3. Iterate array until k pairs are found:
   - if there is element for each p1 and p2
     - compare element at p1 and element at p2, 
     - whichever is less, move that pointer to lesser element if less than array length, otherwise keep the pointer
   
*/

// [1, 1, 9], [1, 7, 8], 5
var kSmallestPairs = function(nums1, nums2, k) {
    let len1 = nums1.length, // 3
        len2 = nums2.length; // 3
    // Set up an array to save how many times an element in nums1
    // is successfully paired with element in nums2.
    // The count is also used to skip the previous successful pairings.
    let countPairedNums1 = new Array(len1).fill(0); // 3, 1, 0
    let pairs = [];

    while (k--) { //4, 3, 2, 1, 0
       let min = Infinity; //Infinity
       let idx1 = -1; // -1, 0

       for (let i = 0; i < len1; i++) { // 0, 1, 2
          // if the element of nums1 at index i has been paired
          // with all elements from num2, skip the next lines
          // and continue the next iteration
          if (countPairedNums1[i] >= len2) { // 0 >= 3
             continue;
          }
          // Get the min sum of possible paired
          if (nums1[i] + nums2[countPairedNums1[i]] < min) { // 9 + 1 < 8
             min = nums1[i] + nums2[countPairedNums1[i]]; // 8
             // Save an index of the paired nums1's element
             idx1 = i; 
          }
       }

       // If reach all possible pairing, break out of the loop
       if (idx1 === -1) {
          break;
       }
       pairs.push([nums1[idx1], nums2[countPairedNums1[idx1]]]); //[[1, 1], [1, 1], [1, 7], [1, 8]]
       // add up the count of successfully pairing for each element
       // in nums1
       countPairedNums1[idx1]++;
    }
    return pairs;
};

console.log(kSmallestPairs([1, 1, 9], [1, 7, 8], 7));


// 719. Find K-th Smallest Pair Distance
