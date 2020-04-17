// LeetCode #938
// Range Sum of BST
// Level: Easy

// Given the root node of a binary search tree, 
// return the sum of values of all nodes with value between L and R (inclusive).

// The binary search tree is guaranteed to have unique values.

// Example 1:
// Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
// Output: 32

// Example 2:
// Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
// Output: 23

function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
}

let n1 = new TreeNode(10);
let n2 = new TreeNode(5);
let n3 = new TreeNode(15);
let n4 = new TreeNode(3);
let n5 = new TreeNode(7);
let n6 = new TreeNode(18);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.right = n6;


//      10
//     / \
//    5   15
//   / \    \
//  3   7   18

// Result: 7 + 10 + 15 = 32   
// Traverse: 10 => 5 => 7 
var rangeSumBST = function(root, L, R) {
   if (!root) return 0;

   // We don't need to visit all nodes, because the number in order, we can traverse based on L, R value
   // To locate where L is, we need to compare L and root. If L < root, go to left
   let left = root.val > L.val ? rangeSumBST(root.left, L, R) : 0;
   // To locate where R is, we need to compare R and root. If R > root, go to right
   let right = root.val < R.val ? rangeSumBST(root.right, L, R) : 0;

   // check if value is in the given range
   let curr = root.val >= L.val && root.val <= R.val ? root.val : 0;

   return left + right + curr;
};