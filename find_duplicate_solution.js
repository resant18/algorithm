// Given an array of n elements which contains elements from 0 to n-1, with any of these numbers appearing any number of times. 
// Find these repeating numbers in O(n) and using only O(1) constant memory space.
// For example, let n be 7 and array be {1, 2, 3, 1, 3, 6, 6}, the answer should be 1, 3 and 6.

const findDuplicates = (arr) => {
   // console.log('Find Duplicates');
   for (let i = 0; i < arr.length; i++) {
      // console.log(arr[i]);
      if (arr[Math.abs(arr[i])] > 0){
         arr[Math.abs(arr[i])] = -1 * arr[Math.abs(arr[i])];
         // console.log("make negative");
         // console.log(arr[Math.abs(arr[i])]);
      } 
      else {
         console.log(Math.abs(arr[i]));
      }
   }
}

// findDuplicates([1, 2, 3, 1, 3, 6, 6]);

const findDuplicates2 = arr => {
   temp = [];
   for (let i = 0; i < arr.length; i++) {
      if (temp.includes(arr[i]))
         temp[arr[i]] = - arr[i];
      else 
         temp[arr[i]] = arr[i];
   }

   console.log(temp);
};

findDuplicates([1, 2, 3, 4, 3]);
findDuplicates2([1, 2, 3, 4, 3]);
findDuplicates([1, 2, 3, 1, 3, 6, 6]); //1, 3, 6
findDuplicates2([1, 2, 3, 1, 3, 6, 6]); //1, 3, 6