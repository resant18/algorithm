// Write a function, `anagrams(str1, str2)`, that takes in two words and returns
// a boolean indicating whether or not the words are anagrams. Anagrams are 
// words that contain the same characters but not necessarily in the same order. 
// Solve this without using Array.prototype.sort.
// 
// Examples:
// anagrams('listen', 'silent') => true
// anagrams('listen', 'potato') => false
// function anagrams(str1, str2) {
//   const letters = {};

//   str1.split("").forEach(char => {
//     if (!letters[char]) letters[char] = 0;
//     letters[char] += 1;
//   });

//   str2.split("").forEach(char => {
//     if (!letters[char]) letters[char] = 0;
//     letters[char] -= 1;
//   });

//   return Object.values(letters).every(letterCount => letterCount === 0);
// }

// Time: O(n), Space: O(n)
function anagrams(str1, str2) {
   const letters = {};

   str1.split("").forEach((char) => {
      letters[char] = letters[char] + 1 || 1;
   });

   console.log(letters);

   str2.split("").forEach((char) => {
      if (!(char in letters)) letters[char] = 1;
      else letters[char] -= 1;
   });

   console.log(letters);

   return Object.values(letters).every((letterCount) => letterCount === 0);
}

console.log(anagrams("listen", "potato"));