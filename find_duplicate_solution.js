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

// Find the Duplicate using Temp
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

// findDuplicates([1, 2, 3, 4, 3]);
// findDuplicates2([1, 2, 3, 4, 3]);
// findDuplicates([1, 2, 3, 1, 3, 6, 6]); //1, 3, 6
// findDuplicates2([1, 2, 3, 1, 3, 6, 6]); //1, 3, 6

// Floyd’s cycle finding algorithm
const findDuplicatesFloyd = arr => {
   if (arr.length <= 1) {
      return -1;
   }

   let slow = arr[0];
   let fast = arr[slow];

   console.log("slow=" + slow);
   console.log("fast=" + fast);
   while (slow != fast) {      
      slow = arr[slow];      
      fast = arr[arr[fast]];      
      console.log('slow=' + slow);
      console.log("fast=" + fast);
   }

   console.log('checking');
   fast = 0;
   while (slow != fast) {
      slow = arr[slow];
      fast = arr[fast];
      console.log("slow=" + slow);
      console.log("fast=" + fast);
   }

   return slow;
}

console.log(findDuplicatesFloyd([1, 3, 2, 1]));
