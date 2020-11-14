

/*
Initate maxProducts as array
Initiate threeLargest as array [-Infinity, -Infinity, -Infinity]
Iterate the array:
  - Push item to threeLargest:
    - if item larger that threeLargest[0], shift from start to end
    - if item less than first item and larger than second, sift from middle to end
    - if item less than first & second item, sift the last one
  - If index less than 2, push -1 to result, otherwise get the product from threeLargest
Return the 
  
*/

function shift(arr, times, num) {
   let i = 2;
   while (times--) { //0
      arr[i] = arr[i - 1];
      i--; 
   }
   arr[i] = num;
}

function addElement(arr, num) {
   if (num > arr[0]) {
      shift(arr, 2, num);      
   } 
   else if (num <= arr[0] && num > arr[1]) {
      shift(arr, 1, num);
   } 
   else if (num <= arr[0] && num <= arr[1] && num > arr[2]) {
      shift(arr, 0, num);
   }
}

// 0   1  2  3  4
// [2, 4, 7, 1, 5, 3]
//           |

// [];
function findMaxProduct(arr) {
   let maxProduct = []; //[7, 4, 2]
   let threeLargest = [-Infinity, -Infinity, -Infinity]; //[11, 8, 7]

   for (let i = 0; i < arr.length; i++) {      
      let num = arr[i];
      addElement(threeLargest, num);
      if (i < 2) {
         maxProduct.push(-1);
      }
      else {
         let product = threeLargest[0] * threeLargest[1] * threeLargest[2];
         maxProduct.push(product);
      }
   }

   return maxProduct;
}

console.log(findMaxProduct([2, 4, 7, 1, 5, 3]));// [-1, -1, 56]



// class MaxHeap {
//   constructor() {
//     this.heap = [];
//   }
  
//   siftUp(heap, idx) {
//     if (idx === 0) return;
    
//     let parentIdx = Math.floor((idx - 1)/ 2);
//     if (heap[idx] > heap[parentIdx]) {
//       [heap[idx], heap[parentIdx]] = [heap[parentIdx], heap[idx]];
//       siftUp(heap, parentIdx);
//     }
//   }
  
//   insert(val) {
//     this.heap.push(val);
//     siftUp(this.heap, this.heap.length - 1);
//   }  
// }
// 0. 1. 2. 3. 4
// 1, 2, 3, 4, 5
//             |

// function findMaxProduct(arr) {
//   let tripleProducts = []; // [-1, -1, 6]
//   let maxHeap = new MaxHeap(); // [4, 3, 2, 1]
  
//   for (let i = 0; i < arr.length; i++) {
//     maxHeap.insert(arr[i]);
//     if (i < 2) {
//       tripleProducts.push(-1);
//     }
//     else {
//       let product = maxHeap[0] * maxHeap[1] * maxHeap[2];
//       tripleProducts.push(product);
//     }    
//   }
  
//   return tripleProducts;  
// }