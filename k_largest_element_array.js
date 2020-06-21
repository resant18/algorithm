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

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));

// Method 2: Max Heap
// Time: O(n log n, but faster
class MaxHeap {
   constructor() {
      this.array = [null];
   }

   getParentIdx(idx) {
      return Math.floor(idx / 2);
   }

   getLeftNodeIdx(idx) {
      return idx * 2;
   }

   getRightNodeIdx(idx) {
      return idx * 2 + 1;
   }

   // Time: O(log n) because of siftUp
   insert(val) {
      // add the new node starting from the bottom level, far-left
      this.array.push(val);

      // then, sift that value up the heap to restore heap property
      this.siftUp(this.array.length - 1);
   }

   siftUp(idx) {
      // if the node is already at the root, there's no further we can sift up
      if (idx === 1) return;

      let parentIdx = this.getParentIdx(idx);

      // if the node is bigger than it's parent:
      if (this.array[idx] > this.array[parentIdx]) {
         // we need to swap them
         [this.array[idx], this.array[parentIdx]] = [this.array[parentIdx], this.array[idx]];
         // and continue to sift it up recursively
         this.siftUp(parentIdx);
      }
   }

   // Time: O(log n) because of siftDown
   deleteMax() {
      // recall that we have an empty position at the very front of the array,
      // so an array length of 2 means there is only 1 item in the heap

      // if there are no elements in the heap, do nothing
      if (this.array.length === 1) return;

      // if there is only 1 element in the heap, simply remove it
      if (this.array.length === 2) return this.array.pop();

      // otherwise remove the last element and make it the root at the front of the array
      let max = this.array[1];
      this.array[1] = this.array.pop();

      // then, sift the new root down to restore heap property
      this.siftDown(1);

      return max;
   }

   siftDown(idx) {
      let leftIdx = this.getLeftNodeIdx(idx);
      let rightIdx = this.getRightNodeIdx(idx);

      // if the node is missing children, consider the missing children as the value -Infinity
      // this allows the node to keep heap property, since any value is greater than -Infinity
      // this will also give us children values to compare later, undefined should not be used for comparison**
      let leftVal = this.array[leftIdx] || -Infinity;
      let rightVal = this.array[rightIdx] || -Infinity;

      let max = this.array[idx];

      // if the node is bigger than both children, we have restored heap property, so exit
      if (max > leftVal && max > rightVal) return;

      // otherwise the node is bigger than one of it's children,
      // so swap this node with the bigger between the two children**
      if (leftVal > rightVal) {
         var swapIdx = leftIdx;
      } else {
         var swapIdx = rightIdx;
      }
      [this.array[idx], this.array[swapIdx]] = [this.array[swapIdx], this.array[idx]];

      // and continue to sift it down recursively
      this.siftDown(swapIdx);
   }
}

var findKthLargest = function (nums, k) {
   let heap = new MaxHeap();
   nums.forEach((num) => heap.insert(num));
   for (let i = 1; i < k; i++) heap.deleteMax();
   return heap.deleteMax();
};

