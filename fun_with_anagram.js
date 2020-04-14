

/*
 * Complete the 'funWithAnagrams' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY text as parameter.
 */

function isAnagram(word1, word2) {
   const count = {};

   word1.split("").forEach(ch => count[ch] = count[ch] ? count[ch] + 1 : 1);
   console.log(count);
   
   word2.split("").forEach(ch => count[ch] = count[ch] ? count[ch] - 1 : -1);

   console.log(count);

   return Object.values(count).every((ch) => count[ch] === 0);
}

console.log(isAnagram("saya", "aayas"));

// function funWithAnagrams(text) {
//    // Write your code here
//    if (text.length < 2) return text;
//    let result = new Set();

//    for (let i = 0; i < text.length; i++) {
//       for (let j = i + 1; j < text.length - 1; j++) {
//          if (isAnagram(text[i], text[j])) {
//             result.add(text[i]);
//             text.splice(j, 1);
//             console.log(text);
//          } else {
//             result.add(text[i]);
//             result.add(text[j]);
//          }
//       }
//    }
//    return Array.from(result).sort();
// }

// console.log(funWithAnagrams(["code",
// "aaagmnrs",
// "anagrams",
// "doce"]));