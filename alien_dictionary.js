// LeetCode
/*
953. Verifying an Alien Dictionary
Level: Easy
Company: Facebook, Amazon

In an alien language, surprisingly they also use english lowercase letters, 
but possibly in a different order. 
The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, 
and the order of the alphabet, return true if and only 
if the given words are sorted lexicographicaly in this alien language.


Example 1:
Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, 
then the sequence is sorted.

Example 2:
Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], 
hence the sequence is unsorted.

Example 3:
Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, 
and the second string is shorter (in size.) 
According to lexicographical rules "apple" > "app", 
because 'l' > '∅', where '∅' is defined as the blank character 
which is less than any other character (More info).
 

Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 20
order.length == 26
All characters in words[i] and order are English lowercase letters.
*/

/*
leetcode   => true
watch

citcher  => false
leet

lit    => false       
leet

app     => true
apple

apple    => false
app


*/

const alienDictionary = (words, order) => {
   const mapDict = order.split("").reduce((map, letter, i) => {
      map[letter] = i;
      return map;
   }, {});

   for (let i = 0; i < words.length - 1; i++) {
      let word1 = words[i];
      let word2 = words[i + 1];

      let j = 0;
      let minLength = Math.min(word1.length, word2.length);

      while (j < minLength) {
         if (word1[j] !== word2[j]) {
            if (mapDict[word1[j]] > mapDict[word2[j]]) return false;
            break;
         }
         j++;
      }      
      
      if (j === minLength && word1.length > word2.length) return false;
   }

   return true;
}

console.log(alienDictionary(["leetcode, watch"], "abcdefghijklmnopqrstuvwxyz"));