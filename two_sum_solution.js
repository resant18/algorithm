// Write an `Array.prototype.twoSum` method, that finds all pairs of positions
// where the elements at those positions sum to zero.

// NB: ordering matters. Each pair must be sorted with the smaller index
// before bigger index. The array of pairs must be sorted
// "dictionary-wise":
// [0, 2] before [1, 2] (smaller first elements come first)
// [0, 1] before [0, 2] (then smaller second elements come first)

// Solution 1: Time O(n2), Space O(1)
Array.prototype.twoSum = function () {
  const pairs = [];
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) pairs.push([i, j]);
    }
  }

  return pairs;
};

//Solution 2: Time O(n), space: O(n)
Array.prototype.twoSum = function() {
   let hash = {};
   for (let i in nums) {
      let complement = 0 - nums[i];
      if (hash[complement]) {
         return [hash[complement], i];
      }
      hash[nums[i]] = i;
   }
};

// Solution 3: Time O(n log n), space: O(1)
const twoSum = (arr, target) => {
   arr.sort((num1, num2) => num1 - num2);

   let min = 0;
   let max = arr.length - 1;
   let result = [];

   while (min < max) {
      if (min != 0 && arr[min] === arr[min - 1]) min++;

      if (arr[min] + arr[max] < target) {
         min++;
      } else if (arr[min] + arr[max] > target) {
         max--;
      } else {
         result.push([arr[min], arr[max]]);
         min++;
         max--;
      }
   }

   return result;
};

// Remove the duplicate pair
function stockPairs(stocksProfit, target) {
   // Write your code here
   let totalPairs = 0;
   let left = 0;
   let right = stocksProfit.length - 1;

   // 3, 3, 5, 6, 6, 7, 9, 11, 13
   //          |  |
   stocksProfit.sort((a, b) => a - b);
   while (left < right) {
      let numL = stocksProfit[left];
      let numR = stocksProfit[right];

      while (stocksProfit[left] === stocksProfit[left + 1] && left + 1 < right) left++;
      if (numL + numR < target) {
         left++;
      } else if (numL + numR > target) {
         right--;
      } else {
         totalPairs++;
         left++;
         right--;
         while (right - 1 > left && stocksProfit[right] === stocksProfit[right - 1]) right--;
      }
   }

   return totalPairs;
}

// console.log(stockPairs([7, 6, 6, 3, 9, 3, 5, 1 ], 12));

// Two sum counting duplicate element, as long as the index is different, it should be consider as a pair.
function numberOfWays(arr, k) {
   // Write your code
   let output = 0;
   let map = {};   

   for (let i = 0; i < arr.length; i++) {
      let pair1 = arr[i];
      let pair2 = k - arr[i];

      if (pair2 in map) output += map[pair2];
      map[pair1] = map[pair1] + 1 || 1;
   }

   return output;
}

console.log(numberOfWays2([1, 1, 2, 7, 6, 1, 2, 3, 4, 5, 5], 6));

// Two Pointers
function numberOfWays2(arr, k) {   
   let output = 0;
   let left = 0;
   let right = arr.length - 1;

   arr.sort((a, b) => a - b);
   while (left < right) {
      if (arr[left] + arr[right] < k) {
         left++;
      } else if (arr[left] + arr[right] > k) {
         right--;
      } else {
         let start = arr[left];
         let num1 = 0; 
         
         while (start === arr[left]) {
            num1++;
            left++;
         }
         let end = arr[right];
         let num2 = 0;
         while (end === arr[right]) {
            num2++;
            right--;
         }
         output += (num1 * num2);
      }
   }

   return output;
}

console.log(numberOfWays2([1, 1, 2, 7, 6, 1, 2, 3, 4, 5, 5], 6));