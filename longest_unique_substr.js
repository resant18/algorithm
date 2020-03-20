// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Edge case: 
// - all lowercase -> longest possible distinct substr would be 26 chars
// brute force: find all substr (nested loop = O(n^2) and then check if each substr is distinct O(n) => O(n^2) x O(n) = O(n^3)
// Space complexity: O(n)

// "abcabcabc"

// Approach: Sliding window
// Iterate array with 2 pointer left & right with condition:
// - Increment right pointer until the char is seen before
// - When the right pointer has been seen before, increment the left pointer

var lengthOfLongestSubstring = function(s) {
   let seen = {};

   let left = 0;
   let right = 0;
   let maxLength = 0;

   while (right < s.length) {
      if (seen[s[right]]) {
         maxLength = Math.max(maxLength, right - left);
         delete seen[s[left]];
         left++;
         continue;
      } else {
         seen[s[right]] = 1;
         right++;
      }
   }
   maxLength = Math.max(maxLength, right - left);
   return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcabc"));