/* Geeks for Geeks, Algo Expert */
/*
Smallest Difference pair of values between two unsorted Arrays
Last Updated: 21-05-2018
Given two arrays of integers, compute the pair of values (one value in each array) with the smallest (non-negative) difference. 
Return the difference.

Examples :

Input : A[] = {1, 3, 15, 11, 2}
        B[] = {23, 127, 235, 19, 8} 
Output : 3  
That is, the pair (11, 8) 

Input : A[] = {10, 5, 40}
        B[] = {50, 90, 80} 
Output : 10
That is, the pair (40, 50)
*/

function smallestDifference(arrayOne, arrayTwo) {
   arrayOne.sort((a, b) => a - b);
   arrayTwo.sort((a, b) => a - b);

   let idxOne = 0;
   let idxTwo = 0;
   let smallestDiffPair = [];
   let absDiff;
   let min = Infinity;

   while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
      let numOne = arrayOne[idxOne];
      let numTwo = arrayTwo[idxTwo];

      if (numOne > numTwo) {
         absDiff = numOne - numTwo;
         idxTwo++;
      } else if (numTwo > numOne) {
         absDiff = numTwo - numOne;
         idxOne++;
      } else {
         return [numOne, numTwo];
      }

      if (absDiff < min) {
         min = absDiff;
         smallestDiffPair = [numOne, numTwo];
      }
   }
   return smallestDiffPair;
}

let A = [10, 5, 40];
let B = [50, 90, 80];

console.log(smallestDifference(A, B)); // [40, 50]
