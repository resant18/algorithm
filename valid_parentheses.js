/*
LeetCode #20. Valid Parentheses
Level: Easy
Company: Many companies

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true

Other edge cases: 
- If string is empty or only contain 1 bracket.
- If string starts with close brackets.
*/

// Time: O(n), Space: O(n)
var isValid = function(s) {
   const map = {
      "[": "]",
      "{": "}",
      "(": ")"
   };

   let stack = [];
   for (const bracket of s) {
      if (bracket in map) {
         stack.push(bracket);
      }
      else {
         let topBracket = stack[stack.length - 1];
         if (map[topBracket] === bracket) stack.pop();
         else return false;
      }
   }

   return stack.length === 0 ? true : false;
}