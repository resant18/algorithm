/*
205. Isomorphic Strings
Level: Easy 
Company: Amazon, Google, Microsoft, Facebook

Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. 
No two characters may map to the same character but a character may map to itself.

Example 1:

Input: s = "egg", t = "add"
Output: true

Example 2:
Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
Note:

You may assume both s and t have the same length.
I:
O:
C: O(n) 
E: 
Edge case:
1. s.length <> t.length => if the length of s and t is not the same, return false
2  s is empty and t is empty => return false
3. egg => bbb => false

Pseudocode:
1. Create a hash variable to map letter
2. Create result
3. Iterate string 1:
   - If the letter is not found in the hash, add it to the hash, with the value of letter in string2
   - If found:
     - Check with the letter on the same index from string2:
       - If match, iterate again
       - If doesn't match, break early and return false
4. Return true
*/


var isIsomorphic = function (s, t) {
   let mapLetters = {};

   if (s.length !== t.length) return false;

   for (const i in s) {
      let ch1 = `s${s[i]}`;
      let ch2 = `t${t[i]}`;

      if (!(ch1 in mapLetters)) mapLetters[ch1] = i;
      if (!(ch2 in mapLetters)) mapLetters[ch2] = i;

      if (mapLetters[ch1] !== mapLetters[ch2]) return false;
   }

   return true;
};
