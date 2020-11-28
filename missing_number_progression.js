/*
LeetCode 1228. Missing Number In Arithmetic Progression
Level: Easy
Company: Audible


In some array arr, the values were in arithmetic progression: 
the values arr[i+1] - arr[i] are all equal for every 0 <= i < arr.length - 1.

Then, a value from arr was removed that was not the first or last value in the array.

Return the removed value.

 
Example 1:

Input: arr = [5,7,11,13]
Output: 9
Explanation: The previous array was [5,7,9,11,13].

Example 2:

Input: arr = [15,13,12]
Output: 14
Explanation: The previous array was [15,14,13,12].
 

Constraints:

3 <= arr.length <= 1000
0 <= arr[i] <= 10^5

Cases: 
removed element anywhere in the middle
[5,7,11,13]

removed element is the second from the left
[15,13,12]

removed element is the second from the right
[5, 6, 7, 9]
*/

const missingNumber = (arr) => {
   let avgDiff = (arr[arr.length - 1] - arr[0]) / arr.length;

   for (let i = 1; i < arr.length; i++) {
      if (arr[i] - arr[i - 1] === 0) return arr[0];
      if (arr[i] - arr[i - 1] !== avgDiff) return arr[i] - avgDiff;
   }
}

console.log(missingNumber([5, 7, 11, 13])); //9
console.log(missingNumber([15, 13, 12])); //14
console.log(missingNumber([5, 6, 7, 9])); //8