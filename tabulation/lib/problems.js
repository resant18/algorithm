// Write a function, stepper(nums), that takes in an array of non negative numbers.
// Each element of the array represents the maximum number of steps you can take from that position in the array.
// The function should return a boolean indicating if it is possible to travel from the 
// first position of the array to the last position.
//
// For Example:
//
// Given [3, 1, 0, 5, 10]
//      - We begin at first position, 3. 
//      - Since the element is 3 we can take up to 3 steps from this position.
//      - This means we can step to the 1, 0, or 5
//      - Say we step to 1
//      - Since the element is 1, now the only option is to take 1 step to land on 0
//      - etc...
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// stepper([3, 1, 0, 5, 10]);           // => true, because we can step through elements 3 -> 5 -> 10
// stepper([3, 4, 1, 0, 10]);           // => true, because we can step through elements 3 -> 4 -> 10
// stepper([2, 3, 1, 1, 0, 4, 7, 8])    // => false, there is no way to step to the end
function stepper(nums) {
    let table = new Array(nums.length).fill(false);
    table[0] = true;

    for (let i = 0; i < table.length; i++) {
        if (table[i]) {
            for (let step = 1; step <= nums[i]; step++) {
                table[i + step] = true;
            }
        }
    }    
    return table[table.length - 1];
}

function stepper2(nums, memo = {}) {    
    // Don't use array as key since it is not optimal,
    // instead we can use the length of nums
    // if (memo[nums]) return memo[nums];

    if (nums.length in memo) return memo[nums.length];
    if (nums.length === 0) return true;        
    let maxRange = nums[0];   
    
    for (let j = 1; j <= maxRange; j++) {
        // console.log(maxRange + "=>" + nums.slice(j));        
        if (stepper2(nums.slice(j))) {
            memo[nums.length] = true;
            return memo[nums.length];    
        }
    }
    memo[nums.length] = false;
    return memo[nums.length];
}

// console.log(stepper2([3, 1, 0, 5, 10])); 
// console.log(stepper2([3, 4, 1, 0, 10])); 
// console.log(stepper2([2, 3, 1, 1, 0, 4, 7, 8]));


// Write a function, maxNonAdjacentSum(nums), that takes in an array of nonnegative numbers.
// The function should return the maximum sum of elements in the array we can get if we cannot take
// adjacent elements into the sum.
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// maxNonAdjacentSum([2, 7, 9, 3, 4])   // => 15, because 2 + 9 + 4
// maxNonAdjacentSum([4,2,1,6])         // => 10, because 4 + 6 
function maxNonAdjacentSum(nums) {
    // if (nums.length === 0) return 0;

    // let maxSum = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     for (let step = 2; step + i <= nums.length; step++) {
    //         let sum = nums[i] + maxNonAdjacentSum(nums.slice(step));
    //         maxSum = Math.max(maxSum, sum);
    //     }
    // }

    // return maxSum;
}

// Time: O(N), Space: O(N)
function maxNonAdjacentSumTab(nums) {
    if (nums.length === 0) return 0;
    let table = new Array(nums.length).fill(0);
    table[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let prevNonAdjMaxSum = table[i - 2] || 0;        
        let includeThisNum = prevNonAdjMaxSum + nums[i];
        let excludeThisNum = table[i - 1];
        table[i] = Math.max(includeThisNum, excludeThisNum);
    }

    console.log(table);
    return table[table.length - 1];
    
}

// Better solution: Time: O(N), Space: O(1)
// Geeks for Geeks solution
function maxNonAdjacentSum(nums) {
    let incl = 0;
    let excl = 0;
     
    for (let i = 0; i < nums.length; i++) { 
          
        // Current max excluding i 
        let new_excl = Math.max(incl, excl);
         
        // Current max including i 
        incl = excl + nums[i] ;
        excl = new_excl; 
    }
    
    return Math.max(incl, excl);
}

// Using memo
function maxNonAdjacentSumMemo(nums, memo = {}) {
    if (nums.length in memo) return memo[nums.length];
    if (nums.length === 0) return 0;

    memo[nums.length] = Math.max(
       nums[0] + maxNonAdjacentSumMemo(nums.slice(2), memo),
       maxNonAdjacentSumMemo(nums.slice(1), memo)
    );
    return memo[nums.length];
}

console.log(maxNonAdjacentSumTab([2, 7, 9, 3, 4]))   // => 15, because 2 + 9 + 4
console.log(maxNonAdjacentSumTab([4, 2, 1, 6]));         // => 10, because 4 + 6 


// Write a function, minChange(coins, amount), that accepts an array of coin values
// and a target amount as arguments. The method should the minimum number of coins needed
// to make the target amount. A coin value can be used multiple times.
//
// You've seen this problem before with memoization, but now solve it using the Tabulation strategy!
//
// Examples:
//
// minChange([1, 2, 5], 11)         // => 3, because 5 + 5 + 1 = 11
// minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
// minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100

// Table
// 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
function minChange(coins, amount) {
    let table = new Array(amount).fill(amount + 1);
    table[0] = 0;

    for (let subAmount = 0; subAmount < amount; subAmount++) {
        for (let coin of coins) {
            if (coin >= subAmount) {
                table[subAmount - coin] = Math.min(table[i], table[subAmount - coin] + 1);
            }
        }
    }

    return table[table.length - 1];
}


module.exports = {
    stepper,
    maxNonAdjacentSum,
    minChange
};