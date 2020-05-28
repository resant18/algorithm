// LeetCode 543. Diameter of Binary Tree
// Easy


// Given a binary tree, you need to compute the length of the diameter of the tree. 
// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. 
// This path may or may not pass through the root.

// Example:
// Given a binary tree
//           1
//          / \
//         2   3
//        / \     
//       4   5    
// Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

// Note: The length of path between two nodes is represented by the number of edges between them.

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

var diameterOfBinaryTree = function (root) {
   let diameter = 0;

   var dfs = function (node) {
      if (node === null) return 0;

      let left = dfs(node.left);
      let right = dfs(node.right);

      // update the max diameter
      diameter = Math.max(diameter, left + right);

      // return the deepest level between left or right
      return Math.max(left, right) + 1;
   };

   dfs(root);

   return diameter;
};
