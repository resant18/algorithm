/*
LeetCode 266. Palindrome Permutation
Level: Easy

Given a string, determine if a permutation of the string could form a palindrome.

Example 1:
Input: "code"
Output: false

Example 2:
Input: "aab"
Output: true

Example 3:
Input: "carerac"
Output: true

*/

//Time: O(N)
//Space: O(1), if the Set only contains a certain total of amount, it could be O(1)
var canPermutePalindrome = function (s) {
   let set = new Set(); // if only contains letter, 

   for (let i = 0; i < s.length; i++) {
      if (set.has(s[i])) set.delete(s.charAt(i));
      else set.add(s[i]);
   }

   return set.size <= 1;
};
