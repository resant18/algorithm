/**
 * LeetCode: 100
 * Level: Easy
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSymmetric = function (root) {
   var isMirror = function (root1, root2) {
      // if root1 and root2 are null
      if (root1 === null && root2 === null) return true;
      // if root1 has value and root 2 has value, and if both of them is not equal then return false
      if ((root1 && root1.val) !== (root2 && root2.val)) return false;

      return isMirror(root1.left, root2.right) && isMirror(root1.right, root2.left);
   };

   return isMirror(root, root);
};
