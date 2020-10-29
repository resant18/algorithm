// Vlocity Coding Challenge

// Count numbers from range whose prime factors are only 2 and 3
// Last Updated: 11-12-2018
// Given two positive integers L and R, the task is to count the elements from the range [L, R] whose prime factors are only 2 and 3.

// Examples:

// Input: L = 1, R = 10
// Output: 6
// 2 = 2
// 3 = 3
// 4 = 2 * 2
// 6 = 2 * 3
// 8 = 2 * 2 * 2
// 9 = 3 * 3

// Input: L = 100, R = 200
// Output: 5


function countIdealNumbers(low, high) {
   let count = 0;

   for (let i = low; i <= high; i++) {
      let num = i;

      // While num is divisible by 2, divide it by 2
      while (num % 3 === 0) num /= 3;

      // While num is divisible by 3, divide it by 3
      while (num % 5 === 0) num /= 5;

      // If num got reduced to 1 then it has
      // only 3 and 5 as prime factors
      if (num === 1) count++;
   }
   return count;
}

console.log(countIdealNumbers(15, 1250000)); //15, 25, 27, 45, 75, 81, 125 => 7