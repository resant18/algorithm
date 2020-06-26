/*
LeetCode #125. Valid Palindrome
Level: Easy
Company: Facebook, Apple, Bloomberg, Oracle, Amazon, Yandex, Microsoft 

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:
Input: "A man, a plan, a canal: Panama"
Output: true

Example 2:
Input: "race a car"
Output: false
*/

// Edge Case: "0P"

const isAlphaNumerics = (ch) => {
   return (ch.charCodeAt(0) >= 97 && ch.charCodeAt(0) <= 122) || (ch.charCodeAt(0) >= 48 && ch.charCodeAt(0) <= 57);
}

// This function mutate the original s. Alternatively create another variable, but that cost Space O(n)
const isPalindrome = function(s) {          
   let result = true;

   s = s.toLowerCase()
         .split('')
         .filter( ch => isAlphaNumerics(ch));
   
   let i = 0;
   let j = s.length - 1;
   while (i <= j) {      
      if (s[i] !== s[j]) return false;
      i++;
      j--;
   }

   return result;
}

let input = "A man, a plan, a canal: Panama";
console.log(isPalindrome(input));

// This function doesn't mutate the original input, O(1) space
const isPalindromeNoMutation = function(s) {       
   let result = true;   
   let i = 0;
   let j = s.length - 1;

   while (i < j) {
      if (!isAlphaNumerics(s[i].toLowerCase())) {
         i++;
         continue;
      }
      if (!isAlphaNumerics(s[j].toLowerCase())) {
         j--;
         continue;
      }

      console.log(i, s[i]);
      console.log(j, s[j]);
      if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;
      i++;
      j--;
   }

   return result;
}

