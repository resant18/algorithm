/*
Heaps are the most useful when attacking problems that require you to "partially sort" data. 
This usually takes form in problems that have us calculate the largest or smallest n numbers of a collection. 
For example: What if you were asked to find the largest 5 numbers in an array in linear time, O(n)? 
The fastest sorting algorithms are O(nlogn), so none of those algorithms will be good enough. 
However, we can use a heap to solve this problem in linear time.
*/

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