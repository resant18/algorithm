/* 
LeetCode 98
Level: Medium
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
 * @return {boolean}
 */

 /*
Pseudocode:
- Root with null value is valid

     5
   /  \
  2    7
 / \   / \
1   3 6   9
    
- Define min & max for each subtree. 
  For eg: 3 is more than 2 and less than 5 =>  (min) 2 < x < 5 (max)
          1 is less than 2 and more than indefinite(or null) => (min) 1 < 2 < null (max)
          7 is more than 5 => min = 5
          9 is more than 7 => min = 7
- For this particular problem  1, is considered false, that's why root.val <= min || root.val >= max, has equal sign.
                              /
                             1 
 */

var DFS = function (root, min, max) {
   if (root === null) return true;
   // console.log(min + " < " + root.val + " < " + max + " => " + (root.val >= min && root.val <= max));
   if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) return false;

   return DFS(root.left, min, root.val) && DFS(root.right, root.val, max);
};

var isValidBST = function (root) {
   return DFS(root, null, null);
};
