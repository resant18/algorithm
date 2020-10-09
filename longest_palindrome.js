/*
409. Longest Palindrome
Level: Easy

Given a string s which consists of lowercase or uppercase letters, 
return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:

Input: s = "a"
Output: 1
Example 3:

Input: s = "bb"
Output: 2
 

Constraints:
1 <= s.length <= 2000
s consists of lower-case and/or upper-case English letters only.

1. Input & Output
   Input: "a"
   Output: 1

   Input: "abababa"
   Output: 7

2. Pseudocode:
   - Initialize an array that store leftIdx and rightIdx + 1 (excl)
   - Iterate through the string
      - For each char, expand to the left and right, for odd and even total chars
      - 

*/
// aabbaxyxab => baxyxab
   


// const longestPalindrome = (s) => {
//    let currentLongest = 1; // since first char is a palindrome

//    for (let i = 1; i < s.length; i++) {
//       let odd = getExpandedPalindrome(s, i - 1, i + 1); //aab, 0, 2
//       let even = getExpandedPalindrome(s, i - 1, i); //aa, 0, 1

//       let substrLength = odd > even ? odd : even;
//       currentLongest = substrLength > currentLongest ? substrLength : currentLongest;      
//    }
//    return currentLongest;
// }

// const getExpandedPalindrome = (s, leftIdx, rightIdx) => {
//    // Expand the search outbound to get potential longer palindrome substring
//    while (leftIdx > 0 && rightIdx < s.length) {
//       if (s[leftIdx] !== s[rightIdx]) break;
//       leftIdx--; // -1
//       rightIdx++; // 2
//    }
//    return rightIdx + leftIdx;
// }

/*
0123
aaba
*/

const longestPalindrome = (s) => {
   let currentLongest = 1; // since first char is a palindrome

   for (let i = 1; i < s.length; i++) {
      let odd = getExpandedPalindrome(s, i - 1, i + 1); //aab, 0, 2
      let even = getExpandedPalindrome(s, i - 1, i); //aa, 0, 1

      let substrLength = odd > even ? odd : even;
      currentLongest = substrLength > currentLongest ? substrLength : currentLongest;
   }
   return currentLongest;
};

const getExpandedPalindrome = (s, leftIdx, rightIdx) => {
   // Expand the search outbound to get potential longer palindrome substring
   while (leftIdx >= 0 && rightIdx < s.length) {
      if (s[leftIdx] !== s[rightIdx]) break;
      leftIdx--; // -1
      rightIdx++; // 2
   }
   return rightIdx - leftIdx - 1;
};

console.log(longestPalindrome("aabbaxyxab"));



// const manachersAlgorithm = (s) => {
//     let str = getModifiedString(s);
//     let len = (2 * s.length) + 1;
//     let P = Array(len).fill(0);
//     let c = 0; //stores the center of the longest palindromic substring until now
//     let r = 0; //stores the right boundary of the longest palindromic substring until now
//     let maxLen = 0;

//     for(let i = 0; i < len; i++) {
//         //get mirror index of i
//         let mirror = (2 * c) - i;
        
//         //see if the mirror of i is expanding beyond the left boundary of current longest palindrome at center c
//         //if it is, then take r - i as P[i]
//         //else take P[mirror] as P[i]
//         if (i < r) {
//             P[i] = Math.min(r - i, P[mirror]);
//         }
        
//         //expand at i
//         let a = i + (1 + P[i]);
//         let b = i - (1 + P[i]);
//         while(a < len && b >= 0 && str.charAt(a) == str.charAt(b)) {
//             P[i]++;
//             a++;
//             b--;
//         }
        
//         //check if the expanded palindrome at i is expanding beyond the right boundary of current longest palindrome at center c
//         //if it is, the new center is i
//         if(i + P[i] > r) {
//             c = i;
//             r = i + P[i];
            
//             if(P[i] > maxLen) { //update maxlen
//                 maxLen = P[i];
//             }
//         }
//     }
//     return maxLen;
// }

// const getModifiedString = (s) => {
//     let str = '';
//     let N = s.length;
//     for(let i = 0; i < N; i++){
//         str += "#";
//         str += s.charAt(i);
//     }
//     str += "#";
//     return str.toString();
// }

// console.log(manachersAlgorithm("aaba"));


/*
   aaba
    |
    i
   c
   r
P  0
*/