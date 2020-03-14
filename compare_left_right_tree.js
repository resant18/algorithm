// A complete binary tree is a binary tree that each level except possibiliy the last level, is completed filled. 
// Suppose you are giving a binary tree represented as an array. For example, [3, 6, 2, 9, -1, 10] 
// represents the following binary tree, where -1 indicates it is a NULL node.

//      3
//   6    2
// 9    10
// Write a function that determines whether the left or right branch of the tree is larger. 
// The size of each branch is the sum of the node vlaues. 
// The function should return the string “Right” if the right side is larger and “Left” if the left side is larger. 
// If the tree has zero nodes or if the size of the branches are equal, an empty string “” should be returned.

// left index = idx * 2
// right index = idx * 2 + 1
const solution = arr => {
   if (!arr) return "";
   if (arr.length === 0) return "";
   const sum = (arr, idx) => {
      if (idx - 1 < arr.length) {
         if (arr[idx - 1] === -1) return 0;
         return arr[idx - 1] + sum(arr, idx * 2) + sum(arr, idx * 2 + 1);
      }
      return 0;
   };
   const left = sum(arr, 2);
   const right = sum(arr, 3);
   return left == right ? "" : left > right ? "Left" : "Right";
};

console.log(solution([3, 6, 2, 9, -1, 10]));