/*
LeetCode #236. Lowest Common Ancestor of a Binary Tree
Level: Medium
Company: Facebook, Amazon, Microsoft, Zillow, Google, Apple, Adobe, 
ByteDance, Atlassian

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Given the following binary tree:  root = [3,5,1,6,2,0,8,null,null,7,4]

         3
      /     \
    5         1
   /  \      /  \
  6    2    0    8
 / \
7   4

Example 1:
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.

Example 2:
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
 
Note:

All of the nodes' values will be unique.
p and q are different and both values will exist in the binary tree.

*/

var lca = function(root, p, q) {
   if (root === null || root === p || root === q) return root;
   left = lca(root.left, p, q);
   right = lca(root.right, p, q);

   return left && right
      ? root // if a root has left and right node, return that root because that the common ancestor
      : left || right; // if left or right sub stree has lca node, return that lca node (eg case: both target nodes on left/right subtree)
}


