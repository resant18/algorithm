/*
692. Top K Frequent Words
Level: Medium
Company: Amazon, Google, Facebook, Oracle, Microsoft, Bloomberg, Apple

Given a non-empty list of words, return the k most frequent elements.

Your answer should be sorted by frequency from highest to lowest. 
If two words have the same frequency, then the word with the lower alphabetical order comes first.

Example 1:
Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
Output: ["i", "love"]
Explanation: "i" and "love" are the two most frequent words.
    Note that "i" comes before "love" due to a lower alphabetical order.

Example 2:
Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
Output: ["the", "is", "sunny", "day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
    with the number of occurrence being 4, 3, 2 and 1 respectively.

Note:
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Input words contain only lowercase letters.

Follow up:
Try to solve it in O(n log k) time and O(n) extra space.
*/

const topKFrequent = (words, k) => {
   const frequency = {};

   for (let word of words) {
      frequency[word] = frequency[word] + 1 ||  1;
   }

   let result = Object.keys(frequency).sort( (a,b) => {
      let compareCount = frequency[b] - frequency[a];
      if (compareCount === 0) return a.localeCompare(b); // if equal - sort alphabetically (lexicographically)
      return compareCount; // we want to sort from highest to low frequency
   });

   return result.slice(0, k);   
}

console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2));
console.log(topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4));

