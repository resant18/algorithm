/*
Heaps are the most useful when attacking problems that require you to "partially sort" data. 
This usually takes form in problems that have us calculate the largest or smallest n numbers of a collection. 
For example: What if you were asked to find the largest 5 numbers in an array in linear time, O(n)? 
The fastest sorting algorithms are O(nlogn), so none of those algorithms will be good enough. 
However, we can use a heap to solve this problem in linear time.
*/


// Zero based array (Algo Expert)
class MaxHeap {
   constructor() {
      this.heap = [];
   }

   getParentIdx(idx) {
      return Math.floor((idx - 1) / 2);
   }

   getLeftChildIdx(idx) {
      return idx * 2 + 1;
   }

   getRightChildIdx(idx) {
      return idx * 2 + 2;
   }

   // Time: O(log n), Space: O(1)
   siftUp(heap, idx) {
      if (idx === 0) return;

      let parentIdx = this.getParentIdx(idx);
      if (heap[idx] > heap[parentIdx]) {
         this.swap(heap, idx, parentIdx);
      }
      this.siftUp(heap, parentIdx);
   }

   // Time: O(log n), Space: O(1)
   insert(value) {
      this.heap.push(value);
      this.siftUp(this.heap, this.heap.length - 1);
   }

   // Time: O(log n), Space: O(1)
   siftDown(heap, idx) {
      let leftIdx = this.getLeftChildIdx(idx);
      let rightIdx = this.getRightChildIdx(idx);

      let leftVal = heap[leftIdx] || -Infinity;
      let rightVal = heap[rightIdx] || -Infinity;
      let curVal = heap[idx];

      if (curVal > leftVal && curVal > rightVal) return;

      let swapIdx = rightVal > leftVal ? rightIdx : leftIdx;
      this.swap(heap, idx, swapIdx);
      this.siftDown(heap, swapIdx);
   }

   // Remove the min element
   // Time: O(log n), Space: O(1)
   remove() {
      if (this.heap.length < 1) return null;
      if (this.heap.length === 1) return this.heap.pop();

      this.swap(this.heap, 0, this.heap.length - 1);
      let max = this.heap.pop();
      this.siftDown(this.heap, 0);
      return max;
   }

   swap(heap, i, j) {
      [heap[i], heap[j]] = [heap[j], heap[i]];
   }

   peek() {
      return this.heap[0];
   }

   // Time: O(n), Space: O(1)
   // The time complexity should be O(n log n), but because when sift down each element,
   // all elements at the bottom level will mostly have Time: O(0),
   // the next level up, mostly have Time: O(1),
   // all the way up until where the root element, which is only one element, have Time: O(n log n)
   buildHeap(array) { // heapSort
      let firstParentIdx = this.getParentIdx(array.length - 1);
      for (let idx = firstParentIdx; idx >= 0; idx--) {
         this.siftDown(array, idx);
      }
      return array;
   }

   isMaxHeap(idx = 0) {
      if (this.heap[idx] === undefined) return;

      let leftIdx = this.getLeftChildIdx(idx) || -Infinity;
      let rightIdx = this.getRightChildIdx(idx) || -Infinity;

      return this.heap[idx] > this.heap[leftIdx] && this.heap[idx] > this.heap[rightIdx]
            && isMaxHeap(leftIdx) && isMaxHeap(rightIdx);
   }

}

let maxHeap = new MaxHeap();

maxHeap.insert(42);
maxHeap.insert(32);
maxHeap.insert(24);
maxHeap.insert(100);
maxHeap.insert(50);
maxHeap.insert(27);
console.log(maxHeap.heap);

console.log(maxHeap.remove());
console.log(maxHeap.heap);
console.log(maxHeap.remove());
console.log(maxHeap.heap);
console.log(maxHeap.isMaxHeap());

// ==========================================================================
// Null based array (App Academy)
class MaxHeap2 {
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

   // Time: O(log n), Space: O(1)
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

   // Time: O(log n), Space: O(1)
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

// Checking if an array is max heap (parent's val > children's val)
function isMaxHeap(array, idx = 1) {
   if (array[idx] === undefined) return true;

   let leftIdx = idx * 2;
   let rightIdx = idx * 2 + 1;

   let leftVal = array[leftIdx] || -Infinity;
   let rightVal = array[rightIdx] || -Infinity;

   return (array[idx] > leftVal && array[idx] > rightVal) 
         && isMaxHeap(array, leftIdx)
         && isMaxHeap(array, rightIdx);
}

// Sort an array completely in place (mutate the array)
// Time: O(n log n), Space: O(1)
function heapSort(array) {
   for (let i = array.length - 1; i >= 0; i--) {
      heapify(array, array.length, i);
   }

   for (let endOfHeap = array.length - 1; endOfHeap >= 0; endOfHeap--) {
      swap(array, 0, endOfHeap);
      heapify(array, endOfHeap, 0);
   }
   return array;
}

// Time: O(n), Space: O(1)
// Build array into heap
function heapify(array, n, i) {
   let leftIdx = i * 2 + 1;
   let rightIdx = i * 2 + 2;
   let leftVal = leftIdx >= n ? -Infinity : array[leftIdx];
   let rightVal = rightIdx >= n ? -Infinity : array[rightIdx];

   let val = array[i];
   if (val > leftVal && val > rightVal) return;
   if (leftVal > rightVal) {
      var swapIdx = leftIdx;
   }
   else {
      var swapIdx = rightIdx;
   }
   swap(array, swapIdx, i);
   heapify(array, n, swapIdx);
}

function swap(array, i, j) {
   [array[i], array[j]] = [array[j], array[i]];
}

/* ===================================================================*/
/*
let heap = new MaxHeap();

heap.insert(42);
heap.insert(32);
heap.insert(24);
heap.insert(100);
heap.insert(50);
heap.insert(27);
console.log(heap.array);

console.log(heap.deleteMax());
console.log(heap.array);

// Heap Sort
console.log(heapSort([2, 5, 1, 4, 3, 7, 10]));

// Is MaxHeap
console.log("isMaxHeap: ", isMaxHeap([null, 10, 5, 7, 2, 6])); //false
console.log("isMaxHeap: ", isMaxHeap([null, 50, 42, 27, 32, 24])); //true
*/