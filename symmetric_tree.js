/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
   var isMirror = function (root1, root2) {
      if (root1 === null && root2 === null) return true;
      if ((root1 && root1.val) !== (root2 && root2.val)) return false;

      return isMirror(root1.left, root2.right) && isMirror(root1.right, root2.left);
   };

   return isMirror(root, root);
};
