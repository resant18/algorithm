/*
Leetcode #49. Group Anagrams
Level: Medium
Company: Amazon, Apple, Goldman Sachs, Facebook, Microsoft, Google, 
eBay, VMware, Bloomberg, Adobe, Twilio, ServiceNow, Docusign, Cisco

Given an array of strings strs, group the anagrams together. 
You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

 
Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lower-case English letters.

eat, tea, tan, ate, nat, bat
                ^

ate, bat, eat, nat, tan, tea

bat
nat, tan
ate, eat, tea

Function to check if it's an anagram
1. Input are 2 strings
2. Sort two strings
3. Compare each of letters in both strings
4. Return false if the letter from 2 arrays is not the same

Main function
 1. Iterate each element in array
    - Compare two elements, check if it's an anagram
    - Create a variable hash with sorted str as key    
*/

const groupAnagram = (strs) => {
   const hash = {};
   let group = [];

   if (strs.length === 0) return [[]];   

   for (const str of strs) {            
      let sortedStr = str.split("").sort().join("");            
      if (sortedStr in hash)  {
         hash[sortedStr].push(str);
      } 
      else {
         hash[sortedStr] = [str]; 
      }      
   }     

   Object.values(hash).forEach((val) => group.push(val));
   return group;
}

// let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
let strs = [""];
console.log(groupAnagram(strs));