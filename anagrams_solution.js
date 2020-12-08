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
      // we can't use this because if letters[char] - 1 = 0 
      // 0 || 1 will return 1 
      //letters[char] = letters[char] - 1 || 1;
      if (char in letters) letters[char] = letters[char] - 1;
      else letters[char] = 1;
   });

   console.log(letters);

   return Object.values(letters).every((letterCount) => letterCount === 0);
}

// console.log(anagrams("listen", "potato"));
// console.log(anagrams('listen', 'silent'));


// Facebook Interview Reverse to Make Equal
function areTheyEqual(array_a, array_b) {
   // Write your code here
   const count = {};

   for (const num of array_a) {
      count[num] = count[num] + 1 || 1;
   }
   console.log(count);

   for (const num of array_b) {
      if (num in count) count[num] = count[num] - 1;
      else count[num] = 1;
   }

   console.log(count);

   return Object.values(count).every((c) => c === 0);
}

console.log(areTheyEqual([1, 2, 3, 4], [1, 4, 3, 3]));
