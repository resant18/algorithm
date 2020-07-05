/*
LeetCode #104. Maximum Depth of Binary Tree
Level: Easy
Company: Amazon, Apple, Microsoft, Google, Adobe

Given a binary tree, find its maximum depth.
The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */


 class TreeNode {
    constructor(val) {
       this.val = val;
       this.left = this.right = null;
    }
 }

 let n1 = new TreeNode(1);
 let n2 = new TreeNode(2);
 let n3 = new TreeNode(3);
 let n4 = new TreeNode(4);
 let n5 = new TreeNode(5);
 let n6 = new TreeNode(6);
 let n7 = new TreeNode(7);
 let n8 = new TreeNode(8);
 let n9 = new TreeNode(9);
 let n10 = new TreeNode(10);

 n1.left = n2;
 n1.right = n3;
 n2.left = n4;
 n2.right = n5;
 n3.left = n6;
 n3.right = n7;
 n4.left = n8;
 n4.right = n9;
 n5.left = n10;

// Method 1:
var maxDepth = function (root) {
   if (root === null) return 0;

   return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

// Method 2:
var maxDepth = function (root) {
   if (root === null) return 0;

   // the declaration let here is very important
   // otherwise the value will not be stored
   let left = maxDepth(root.left);
   let right = maxDepth(root.right);

   // console.log(root.val);
   // console.log(left);
   // console.log(right);
   // console.log(Math.max(left, right)+1);
   // console.log('_____')

   return Math.max(left, right) + 1;
   // return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// Method 3:
var maxDepth = function (root) {
   if (root === null) return 0;

   let left = maxDepth(root.left) + 1;
   let right = maxDepth(root.right) + 1;

   return Math.max(left, right);   
};



// console.log(maxDepth(n1));

/* ============== */



const findDepth = function (root, node) {
   if (!root) return -1;   
   if (root.val === node.val) return 1;
      
   let left = findDepth(root.left, node);
   let right = findDepth(root.right, node);

   if (left === -1 && right === -1) return -1; 

   return Math.max(left, right) + 1; 
}


console.log(findDepth(n1, n1));




