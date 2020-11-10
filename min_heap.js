// Zero based array (Algo Expert)
class MinHeap {
   constructor() {
      this.heap = [];
   }

   getParentIdx(idx) {
      return Math.floor((idx - 1) / 2);
   }

   getLeftChildIdx(parentIdx) {
      return parentIdx * 2 + 1;
   }

   getRightChildIdx(parentIdx) {
      return parentIdx * 2 + 2;
   }

   // Time: O(n), Space: O(1)
   // The time complexity should be O(n log n), but because when sift down each element,
   // all elements at the bottom level will mostly have Time: O(0),
   // the next level up, mostly have Time: O(1),
   // all the way up until where the root element, which is only one element, have Time: O(n log n)
   buildHeap(array) {
      let firstParentIdx = this.getParentIdx(array.length - 1);

      for (let idx = firstParentIdx; idx >= 0; idx--) {
         this.siftDown(idx, array);
      }
      this.heap = array;
   }

   // Time: O(log n), Space: O(1)
   siftDown(idx, heap) {
      let leftIdx = this.getLeftChildIdx(idx); 
      let rightIdx = this.getRightChildIdx(idx);

      // if the node is missing children, consider the missing children as the value Infinity
      // this allows the node to keep heap property, since any value is less than Infinity.
      let leftVal = heap[leftIdx] || Infinity;
      let rightVal = heap[rightIdx] || Infinity;

      let curVal = heap[idx];

      if (curVal < leftVal && curVal < rightVal) return;

      if (leftVal < rightVal) {
         var swapIdx = leftIdx;
      } else {
         var swapIdx = rightIdx;
      }

      this.swap(heap, idx, swapIdx);
      this.siftDown(swapIdx, heap);
   }

   // Time: O(log n), Space: O(1)
   siftUp(idx, heap) {
      // if the node is at the root, we can't sift up further
      if (idx === 0) return;

      let parentIdx = this.getParentIdx(idx);

      // if the node is less than it's parent:
      if (heap[idx] < heap[parentIdx]) {
         // we need to swap them
         this.swap(heap, idx, parentIdx);
         // and continue to sift it up recursively
         this.siftUp(parentIdx, heap);
      }
   }

   // Remove the min element
   // Time: O(log n), Space: O(1)
   remove() {
      if (this.heap.length <= 1) return;
      if (this.heap.length === 2) return this.heap.pop();

      this.swap(this.heap, 0, this.heap.length - 1);
      let min = this.heap.pop();

      this.siftDown(0, this.heap);
      return min;
   }

   // Time: O(log n), Space: O(1)
   insert(value) {
      this.heap.push(value);
      this.siftUp(this.heap.length - 1, this.heap);
   }

   peek() {
      return this.heap[0];
   }

   swap(array, i, j) {
      [array[i], array[j]] = [array[j], array[i]];
   }

   print() {
      console.log(this.heap);
   }
   
   // Time: O(n), Space: O(1)
   isMinHeap(idx = 0) {
      if (this.heap[idx] === undefined) return true;

      let leftIdx = this.getLeftChildIdx(idx);
      let rightIdx = this.getRightChildIdx(idx);

      let leftVal = this.heap[leftIdx] || Infinity;
      let rightVal = this.heap[rightIdx] || Infinity;      

      return this.heap[idx] < leftVal && this.heap[idx] < rightVal
            && this.isMinHeap(leftIdx) && this.isMinHeap(rightIdx);      
   }
}
// 10, 5, 7, 2, 6
//     2
//   /  \
//   5   7
// /  \
// 10  6

// [2, 5, 7, 10, 6]

let minHeap = new MinHeap();
// minHeap.insert(10);
// minHeap.insert(5);
// minHeap.insert(7);
// minHeap.insert(2);
// minHeap.insert(6);
minHeap.buildHeap([10, 5, 7, 2, 6]);
minHeap.print();
minHeap.insert(3);
minHeap.print();
console.log(minHeap.remove());
minHeap.print();
console.log(minHeap.remove());
minHeap.print();
console.log(minHeap.isMinHeap());

