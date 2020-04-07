/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
   if (root === null) return true;

   [root.left, root.right] = [root.right, root.left];

   invertTree(root.left);
   invertTree(root.right);
};
