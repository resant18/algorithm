// 387. First Unique Character in a String
// Easy
/**
 * @param {string} s
 * @return {number}
 */
// two pointers => doesn't work for case "aadadaad", because the last 2 chars comparison
// var firstUniqChar = function(s) {
//     let i = 0;
//     let j = 0;

//     if (s.length === 1) return 0;
//     if (s.length === 0) return -1;
//     while (i < s.length - 1) {
//         j++;
//         if (s[i] !== s[j] && j === s.length - 1) {
//             console.log(s[i]);
//             return i;
//         }
//         if (s[i] === s[j]) {
//             i++;
//             j = i + 1;
//         }
//     }
//     return -1;
// };

var firstUniqChar = function (s) {
   let dict = {};

   for (let i in s) {
      if (dict[s[i]]) {
         dict[s[i]] = -1; // repeated char
      } else {
         dict[s[i]] = i; // possible answer
      }
   }

   // find the first possible answer
   for (let ch in dict) {
      if (dict[ch] !== -1) {
         return dict[ch];
      }
   }
   return -1;
};
