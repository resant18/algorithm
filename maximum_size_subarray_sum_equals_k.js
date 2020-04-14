// LeetCode #325

// [8, 1, 2, 5, 4] 11

const maxSubArrayLen = function(arr, k) {
   let slow = 0;
   let len = 0;
   let total = 0;

   for (let fast = 0; fast < arr.length; fast++) {
      total += arr[fast];

      while (total >= k) {
         if (total === k) {
            len = Math.max(len, fast - slow + 1);
         }
         total -= arr[slow];
         slow++;
      }
   }

   return len;
}

console.log(maxSubArrayLen([8, 1, 2, 5, 4], 11));