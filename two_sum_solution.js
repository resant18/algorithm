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
