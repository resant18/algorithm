// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1].
// For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

// Divide the num with 10 until is not zero and save the result to that number itself: 123 => 12 => 1
// Assembled all the remaining to get the output by multiply the result with 10 plus the remaining => 3 => (3 * 10) + 2 => (30 * 10) + (2 * 10) + 1

const reverseInteger = num => {
   let result = 0;

   while (num != 0) {
      result = result * 10 + (num % 10);
      num = parseInt(num / 10);
   }

   return result < -Math.pow(2, 31) || result > Math.pow(2, 31) ? 0 : result;
};

console.log(reverseInteger(-123));
