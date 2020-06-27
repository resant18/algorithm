/*
680. Valid Palindrome II
Level: Easy
Company: Facebook, Microsoft

Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True

Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.

Note:
The string will only contain lowercase characters a-z. The maximum length of the string is 50000.
*/

const validPalindrome = (s) => {
   let i = 0;
   let j = s.length - 1;
   
   while (i <= j) {      
      if (s[i] !== s[j]) {
         return isPalindrome(slice(s, i)) || isPalindrome(slice(s, j));
      }
      i++;
      j--;
   }
   return true;
};

const slice = (s, i) => s.substr(0, i) + s.substr(i + 1);

const isPalindrome = (s) => s === s.split("").reverse().join("");
