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


var lengthOfLongestSubstring = function(s) {
   let uniqueSubstr = "";
   let max = 0;
   for (let i = 0; i < s.length - 1; i++) {
      uniqueSubstr = s[i];
      for (let j = i + 1; j < s.length; j++) {
         if (uniqueSubstr.includes(s[j])) {
            if (uniqueSubstr.length > max) {
               max = uniqueSubstr.length;
            }
            uniqueSubstr = "";
            break;
         } else {            
            uniqueSubstr += s[j];
         }
      }      
   }   

   
   return uniqueSubstr.length > max ? uniqueSubstr.length : max;
};

console.log(lengthOfLongestSubstring("bwf"));