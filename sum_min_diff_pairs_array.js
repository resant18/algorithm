// Vlocity Test
// Find the smallest sum of pairs in array

// Input: [2, 4, 5, 3, 7, 8]
// Output: 3
//       3 - 2 = 1
//       5 - 4 = 1
//       8 - 7 = 1
//          

function minimizeBias(ratings) {
   // Write your code here
   // O(N log N)
   ratings.sort((a, b) => a - b);
   let minTotalBias = 0;
   for (let i = 0; i < ratings.length - 1; i + 2) {
      minTotalBias += Math.abs(ratings[i] - ratings[i + 1]);
   }

   return minTotalBias;
}

console.log(minimizeBias([2, 4, 5, 3, 7, 8]));
