// 107. Binary Tree Level Order Traversal II
// Easy

// Share
// Given a binary tree, return the bottom-up level order traversal of its nodes' values. 
// (ie, from left to right, level by level from leaf to root).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its bottom-up level order traversal as:
// [
//   [15,7],
//   [9,20],
//   [3]
// ]


//BST 
var levelOrderBottom = function(root) {
   let q = [[root, 0]];
   let result = [];

   while (q.length) {
      let [node, lvl] = q.shift();

      if (node) {
         if (!result[lvl]) {
            result = [node.val];
         }
         else {
            result.push(node.val);
         }
         q.push([q.left, lvl+1], [q.right], lvl+1);
      }
   }

   return result.reverse();
}