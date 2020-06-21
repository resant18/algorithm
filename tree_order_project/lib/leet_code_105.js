/*
LeetCode #105. Construct Binary Tree from Preorder and Inorder Traversal
Level:Medium
Company: Amazon,Microsoft,Google,Bloomberg,Facebook,ByteDance,

Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
*/

const { TreeNode } = require('./tree_node.js');

function buildTree(preorder, inorder) {
   if (preorder.length === 0 || inorder.length === 0) return null;
   let rootVal = preorder[0];
   let root = new TreeNode(rootVal);
   let rootIdx = inorder.indexOf(rootVal);

   let leftInorder = inorder.slice(0, rootIdx);
   let rightInorder = inorder.slice(rootIdx + 1);

   let leftPreorder = preorder.slice(1, rootIdx + 1);
   let rightPreorder = preorder.slice(rootIdx + 1);

   root.left = buildTree(leftPreorder, leftInorder);
   root.right = buildTree(rightPreorder, rightInorder);

   return root;
}
