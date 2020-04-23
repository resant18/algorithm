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
var sumOfLeftLeaves = function (root) {
   let sum = 0;

   var dfs = function (root, isLeft) {
      if (root === null) return;

      if (isLeft && root.left === null && root.right === null) {
         sum += root.val;
      }

      dfs(root.left, true);
      dfs(root.right, false);
   };

   dfs(root, false);
   return sum;
};

// Other solution:
var sumOfLeftLeaves = function (root) {
   var sum = 0;
   if (!root) return 0;
   if (root.left && !root.left.left && !root.left.right) sum = root.left.val;
   return sum + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};
