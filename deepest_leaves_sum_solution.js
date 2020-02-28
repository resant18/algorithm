//Given a binary tree, return the sum of values of its deepest leaves.

class Node {
   constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
   }
}

let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);
let n5 = new Node(5);
let n6 = new Node(6);
let n7 = new Node(7);
let n8 = new Node(8);

n1.left = n2;
n1.right = n3;
// n2.left = n4;
// n2.right = n5;
// n4.left = n7;
// n3.right = n6;
// n6.right = n8;

//        1
//      /  \
//     2    3
//    / \    \
//   4   5    6
//  /          \
// 7            8

const DFS = (root, lvl, sums) => {
   if (!root) return;

   sums[lvl] = (sums[lvl] || 0) + root.val;

   DFS(root.left, lvl + 1, sums);
   DFS(root.right, lvl + 1, sums);
}

const deepestLeavesSum = root => {
   let result = [];

   DFS(root, 0, result);
   return result[result.length - 1];
};

console.log(deepestLeavesSum(n1));