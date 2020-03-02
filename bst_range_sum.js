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

n1.left = n2;
n1.right = n3;

//   10
//  / \
// 5  15

// 10, 15
var rangeSumBST = function(root, L, R) {
   if (!root) return 0;

   let left = root.val > L.val ? rangeSumBST(root.left, L, R) : 0;
   let right = root.val < R.val ? rangeSumBST(root.right, L, R) : 0;
   let curr = root.val >= L.val && root.val <= R.val ? root.val : 0;

   return left + right + curr;
};