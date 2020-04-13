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
var maxDepth = function (root) {
   if (root === null) return 0;

   left = maxDepth(root.left);
   right = maxDepth(root.right);

   //     console.log(root.val);
   //     console.log(left);
   //     console.log(right);
   //     console.log(Math.max(left, right)+1);
   // console.log('_____')

   // return (Math.max(left, right) + 1);
   // return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
