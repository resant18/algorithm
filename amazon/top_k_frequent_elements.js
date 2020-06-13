/**
 * LeetCode: 347 Top K Frequent Elements
 * Level: Medium
 * Company: Amazon
 * 
  
Given a non-empty array of integers, return the k most frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
Note:

You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
You can return the answer in any order.

Pseudocode/Algorith:
1. Iterate the array and count the frequency for each element. Save it into Hash. => var: hash
2. Create an array of bucket with size n + 1, initialize each element with empty array. => var: bucket
   Array size is nums.length + 1, because the frequency could be anywhere between 0 to nums.length.
3. Iterate the bucket backward, if the element bucket contain numbers, add those numbers to the result. => var: result
   Add the elements in a bucket and decrease the k. 
   Be careful if only partial numbers in the bucket element are pushed as part of result.
4. Return the result
 */

//  Time: O(n) Space: O(n)
 const topKFrequentElement = (nums, k) => {
   const frequency = {};
   for (let num of nums) {      
      frequency[num] = (frequency[num] || 0) + 1;
   }   

   let buckets = [];
   for (let i = 0; i <= nums.length; i++) {
      buckets[i] = [];
   }      

   for (let num in frequency) {      
      let count = frequency[num];      
      buckets[count].push(parseInt(num));
   }

   let result = [];
   for (let i = nums.length; i >= 0 && k > 0; k--) {      // be careful of the boundary here
      while (buckets[i].length === 0) i--;
      result.push(buckets[i].shift());
   }

   return result;  
 }

//  from collections import Counter
// class Solution:
//     def topKFrequent(self, nums: List[int], k: int) -> List[int]:
//         count = Counter(nums)
//         unique = list(count.keys())
        
//         def partition(left, right, pivot_index) -> int:
//             pivot_frequency = count[unique[pivot_index]]
//             # 1. move pivot to end
//             unique[pivot_index], unique[right] = unique[right], unique[pivot_index]  
            
//             # 2. move all less frequent elements to the left
//             store_index = left
//             for i in range(left, right):
//                 if count[unique[i]] < pivot_frequency:
//                     unique[store_index], unique[i] = unique[i], unique[store_index]
//                     store_index += 1

//             # 3. move pivot to its final place
//             unique[right], unique[store_index] = unique[store_index], unique[right]  
            
//             return store_index
        
//         def quickselect(left, right, k_smallest) -> None:
//             """
//             Sort a list within left..right till kth less frequent element
//             takes its place. 
//             """
//             # base case: the list contains only one element
//             if left == right: 
//                 return
            
//             # select a random pivot_index
//             pivot_index = random.randint(left, right)     
                            
//             # find the pivot position in a sorted list   
//             pivot_index = partition(left, right, pivot_index)
            
//             # if the pivot is in its final sorted position
//             if k_smallest == pivot_index:
//                  return 
//             # go left
//             elif k_smallest < pivot_index:
//                 quickselect(left, pivot_index - 1, k_smallest)
//             # go right
//             else:
//                 quickselect(pivot_index + 1, right, k_smallest)
         
//         n = len(unique) 
//         # kth top frequent element is (n - k)th less frequent.
//         # Do a partial sort: from less frequent to the most frequent, till
//         # (n - k)th less frequent element takes its place (n - k) in a sorted array. 
//         # All element on the left are less frequent.
//         # All the elements on the right are more frequent.  
//         quickselect(0, n - 1, n - k)
//         # Return top k frequent elements
//         return unique[n - k:]



 
 
console.log(topKFrequentElement([5, 5, 5, 1, 1, 13], 2));