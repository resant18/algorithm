// Leetcode #18 4Sum
// Medium

// Given an array nums of n integers and an integer target, 
// are there elements a, b, c, and d in nums such that a + b + c + d = target? 
// Find all unique quadruplets in the array which gives the sum of target.

// Note:
// The solution set must not contain duplicate quadruplets.

// Example:
// Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

// A solution set is:
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]

// Time: O(n^3)
// Space: O(n)
var fourSum = function(nums, target) {
    let result = [];
    
    if (nums.length < 4) return [];
        
    nums.sort((a, b) => a - b);
    for (let i = 0; i <= nums.length - 4; i++) { // 0
        if (i !== 0 && nums[i] === nums[i - 1]) continue;
        for (let j = i + 1; j <= nums.length - 3; j++) {  // 2
            if (j != i + 1 && nums[j] === nums[j - 1]) continue;
                
            let newTarget = target - (nums[i] + nums[j]); // 8
            let min = j + 1; // 4
            let max = nums.length - 1; // 6
            while (min < max) {                
                if (nums[min] + nums[max] < newTarget) min++;                
                else if (nums[min] + nums[max] > newTarget) max--;                
                else {
                    result.push([nums[i], nums[j], nums[min], nums[max]]);
                    max--;
                    while (min < max && nums[max] == nums[max + 1]) max--;
                }
            }
        }
    }
    
    return result;
};

var fourSum2 = function(nums, target) {
    let result = [];
    let firstPairSum = {};

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let sum = nums[i] + nums[j];
            firstPairSum[sum] = {i, j};
            // if (
            //    firstPairSum[sum] &&
            //    firstPairSum[sum][0] != sum[i] &&
            //    firstPairSum[sum][1] != sum[j] &&
            //    firstPairSum[sum][0] != sum[j] &&
            //    firstPairSum[sum][1] != sum[i]
            // ) {
            //    console.log(nums[i] + " + " + nums[j]);
            //    firstPairSum[sum].push([nums[i], nums[j]]);
            // } else {
            //    firstPairSum[sum] = [[nums[i], nums[j]]];
            // }
        }
    }

    console.log(firstPairSum);
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            let sum1 = nums[i] + nums[j];
            let sum2 = 0 - sum1;
            if (firstPairSum[sum2]) {
                if (firstPairSum[sum2].i != i && firstPairSum[sum2].j != j &&
                    firstPairSum[sum2].i != j && firstPairSum[sum2].j != i) {
                        result.push([nums[i], nums[j], nums[firstPairSum[sum2].i], nums[firstPairSum[sum2].j]]);
                    }
            }
        }
    }

    return result;
}

console.log(fourSum2([1, 0, -1, 0, -2, 2], 0));
