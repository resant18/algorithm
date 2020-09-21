/*
1315. Sum of Nodes with Even-Valued Grandparent
Level: Medium

Given a binary tree, return the sum of values of nodes with even-valued grandparent.  
(A grandparent of a node is the parent of its parent, if it exists.)

If there are no nodes with an even-valued grandparent, return 0.


Same as:
Geeks for Geeks
Sum of all the child nodes with even grandparents in a Binary Tree

Given a Binary Tree, calculate the sum of nodes with even valued Grandparents.

Examples:

Input: 
      22
    /    \
   3      8
  / \    / \
 4   8  1   9
             \
              2
Output: 24
Explanation 
The nodes 4, 8, 2, 1, 9
has even value grandparents. 
Hence sum = 4 + 8 + 1 + 9 + 2 = 24.


*/

class Node {
   constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
   }   
}

var sumEvenGrandparent = function (root) {
   let stack = [root];
   let sum = 0;

   while (stack.length) {
      let node = stack.pop();

      if (node && node.val % 2 === 0) {
         if (node.left) {
            if (node.left.left) sum += node.left.left.val;
            if (node.left.right) sum += node.left.right.val;
         }
         if (node.right) {
            if (node.right.left) sum += node.right.left.val;
            if (node.right.right) sum += node.right.right.val;
         }
      }
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
   }

   return sum;
};

