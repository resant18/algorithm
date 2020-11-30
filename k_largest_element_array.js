/*
215. Kth Largest Element in an Array
Level: Medium
Company: Facebook, Amazon, LinkedIn, Google, ByteDance, Microsoft, 
Goldman Sachs, Apple, eBay, Uber, Adobe, Oracle, Spotify, 

Find the kth largest element in an unsorted array. 
Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:
Input: [3,2,1,5,6,4] and k = 2
Output: 5

Example 2:
Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4

Note:
You may assume k is always valid, 1 ≤ k ≤ array's length.
*/

// Method 1: Built in sorting algorithm
// Time: O(n log n)
var findKthLargest = function (nums, k) {   
   return nums.sort((a, b) => b - a)[k - 1];   
};

console.log("Method 1: Using built-in sorting");
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); //5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); //4

// ==================================================================
// Method 2: Using Max Heap
// Time: O(n + k Logn)
class MaxHeap {
   constructor() {
      this.array = [];
   }

   getParentIdx(idx) {
      return Math.floor((idx - 1 ) / 2);
   }

   getLeftNodeIdx(idx) {
      return idx * 2 + 1;
   }

   getRightNodeIdx(idx) {
      return idx * 2 + 2;
   }

   // Time: O(log n) because of siftUp
   insert(val) {
      // add the new node starting from the bottom level, far-left
      this.array.push(val);

      // then, sift that value up the heap to restore heap property
      this.siftUp(this.array.length - 1, this.array);
   }

   siftUp(idx, array) {
      // if the node is already at the root, there's no further we can sift up
      if (idx === 0) return;

      let parentIdx = this.getParentIdx(idx);

      // if the node is greater than it's parent:
      if (array[idx] > array[parentIdx]) {
         // we need to swap them
         [array[idx], array[parentIdx]] = [array[parentIdx], array[idx]];
         // and continue to sift it up recursively
         this.siftUp(parentIdx, array);
      }
   }

   // Time: O(log n) because of siftDown
   deleteMax() {
      // if there are no elements in the heap, do nothing
      if (this.array.length < 1) return;

      // if there is only 1 element in the heap, simply remove it
      if (this.array.length === 1) return this.array.pop();

      // otherwise remove the last element and make it the root at the front of the array
      [this.array[0], this.array[this.array.length - 1]] = [this.array[this.array.length - 1], this.array[0]];
      let max = this.array.pop();

      // then, sift the new root down to restore heap property
      this.siftDown(0, this.array);

      return max;
   }

   siftDown(idx, array) {
      let leftIdx = this.getLeftNodeIdx(idx);
      let rightIdx = this.getRightNodeIdx(idx);

      // if the node is missing children, consider the missing children as the value -Infinity
      // this allows the node to keep heap property, since any value is greater than -Infinity
      // this will also give us children values to compare later, undefined should not be used for comparison**
      let leftVal = array[leftIdx] || -Infinity;
      let rightVal = array[rightIdx] || -Infinity;

      let curVal = array[idx];

      // if the node is greater than both children, we have restored heap property, so exit
      if (curVal > leftVal && curVal > rightVal) return;

      // otherwise the node is bigger than one of it's children,
      // so swap this node with the bigger between the two children**
      if (leftVal > rightVal) {
         var swapIdx = leftIdx;
      } else {
         var swapIdx = rightIdx;
      }
      [array[idx], array[swapIdx]] = [array[swapIdx], array[idx]];

      // and continue to sift it down recursively
      this.siftDown(swapIdx, array);
   }

   size() {
      return this.array.length;
   }

   buildHeap(array) {
      let firstParentIdx = this.getParentIdx(array.length - 1);

      for (let i = firstParentIdx; i >= 0; i--) {
         this.siftDown(i, array);
      }
      this.array = array;
   }
}

var findKthLargestWithMaxHeap = function (nums, k) {
   let maxHeap = new MaxHeap();
   maxHeap.buildHeap(nums);
   
   for (let i = 0; i < k - 1; i++) {
      maxHeap.deleteMax();
   }

   return maxHeap.deleteMax();
};

console.log("Method 2: Using Max Heap")
console.log(findKthLargestWithMaxHeap([3, 2, 1, 5, 6, 4], 2)); //5
console.log(findKthLargestWithMaxHeap([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); //4

// ==================================================================
// Method 3: Using Min Heap
// Time: O(k + (n-k) * Logk) => faster
class MinHeap {
   constructor() {
      this.array = [];
   }

   getParentIdx(idx) {
      return Math.floor((idx - 1 ) / 2);
   }

   getLeftNodeIdx(idx) {
      return idx * 2 + 1;
   }

   getRightNodeIdx(idx) {
      return idx * 2 + 2;
   }

   // Time: O(log n) because of siftUp
   insert(val) {
      // add the new node starting from the bottom level, far-left
      this.array.push(val);

      // then, sift that value up the heap to restore heap property
      this.siftUp(this.array.length - 1, this.array);
   }

   siftUp(idx, array) {
      // if the node is already at the root, there's no further we can sift up
      if (idx === 0) return;

      let parentIdx = this.getParentIdx(idx);

      // if the node is lesser than it's parent:
      if (array[idx] < array[parentIdx]) {
         // we need to swap them
         [array[idx], array[parentIdx]] = [array[parentIdx], array[idx]];
         // and continue to sift it up recursively
         this.siftUp(parentIdx, array);
      }
   }

   // Time: O(log n) because of siftDown
   deleteMin() {
      // if there are no elements in the heap, do nothing
      if (this.array.length < 1) return;

      // if there is only 1 element in the heap, simply remove it
      if (this.array.length === 1) return this.array.pop();

      // otherwise remove the last element and make it the root at the front of the array
      [this.array[0], this.array[this.array.length - 1]] = [this.array[this.array.length - 1], this.array[0]];
      let min = this.array.pop();

      // then, sift the new root down to restore heap property
      this.siftDown(0, this.array);

      return min;
   }

   siftDown(idx, array) {
      let leftIdx = this.getLeftNodeIdx(idx);
      let rightIdx = this.getRightNodeIdx(idx);

      // if the node is missing children, consider the missing children as the value -Infinity
      // this allows the node to keep heap property, since any value is greater than -Infinity
      // this will also give us children values to compare later, undefined should not be used for comparison**
      let leftVal = array[leftIdx] || Infinity;
      let rightVal = array[rightIdx] || Infinity;

      let curVal = array[idx];

      // if the node is lesser than both children, we have restored heap property, so exit
      if (curVal < leftVal && curVal < rightVal) return;

      // otherwise the node is bigger than one of it's children,
      // so swap this node with the bigger between the two children**
      if (leftVal < rightVal) {
         var swapIdx = leftIdx;
      } else {
         var swapIdx = rightIdx;
      }
      [array[idx], array[swapIdx]] = [array[swapIdx], array[idx]];

      // and continue to sift it down recursively
      this.siftDown(swapIdx, array);
   }

   size() {
      return this.array.length;
   }
}

var findKthLargestWithMinHeap = function (nums, k) {
   let minHeap = new MinHeap();
   nums.forEach((num) => {
      minHeap.insert(num);      
      if (minHeap.size() > k) minHeap.deleteMin();      
   });
   return minHeap.deleteMin();
};

console.log("Method 3: Using Min Heap");
console.log(findKthLargestWithMinHeap([3, 2, 1, 5, 6, 4], 2)); //5
console.log(findKthLargestWithMinHeap([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); //4

// Method 4: Using Quick Select
