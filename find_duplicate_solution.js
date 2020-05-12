// Given an array of n elements which contains elements from ***0 to n-1***, with any of these numbers appearing any number of times. 
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


// Find the Duplicate using O(N) space (Temp)
const findDuplicatesTemp = arr => {
   temp = [];
   for (let i = 0; i < arr.length; i++) {
      if (temp.includes(arr[i]))
         temp[arr[i]] = - arr[i];
      else 
         temp[arr[i]] = arr[i];
   }

   console.log(temp);
};

console.log(findDuplicates([1, 2, 3, 4, 3]))
console.log(findDuplicatesTemp([1, 2, 3, 4, 3]));
console.log(findDuplicates([1, 2, 3, 1, 3, 6, 6]));
console.log(findDuplicatesTemp([1, 2, 3, 1, 3, 6, 6])); 


// Floyd’s cycle finding algorithm => to find just 1 repeated element and meet condition 1 <= nums[i] < n
const findDuplicatesFloyd = arr => {
   if (arr.length <= 1) {
      return -1;
   }

   let slow = arr[0];
   let fast = arr[0];

   console.log("slow=" + slow);
   console.log("fast=" + fast);
   do {
      slow = arr[slow];
      fast = arr[arr[fast]];
      console.log("slow=" + slow);
      console.log("fast=" + fast);
   } while (slow != fast);

   console.log('checking');
   slow = arr[0];
   while (slow != fast)  {
      slow = arr[slow];
      fast = arr[fast];
      // console.log("slow=" + slow);
      // console.log("fast=" + fast);
   } 

   return fast;
}

console.log(findDuplicatesFloyd([1, 2, 3, 4, 3]));
