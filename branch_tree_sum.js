/*
BST Branch Sum
See tree_branch_sum.jpg for question explanation
AlgoExpert

PSEUDOCODE:
1. Create prevSum to sum up all the prev nodes
2. Push the prevSum to sums when it reaches leaf node.
3. DFS traverse left and right
*/

class TreeNode {
   constructor(val) {
      this.val = val;
      this.left = this.right = null;
   }
}

let n1 = new TreeNode(1);
let n2 = new TreeNode(2);
let n3 = new TreeNode(3);
let n4 = new TreeNode(4);
let n5 = new TreeNode(5);
let n6 = new TreeNode(6);
let n7 = new TreeNode(7);
let n8 = new TreeNode(8);
let n9 = new TreeNode(9);
let n10 = new TreeNode(10);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;
n4.left = n8;
n4.right = n9;
n5.left = n10;


// Time: O(N)
// Space: O(N)
const DFS = (node, prevSum, sums) => {
   if (!node) return;
   
   prevSum += node.val;

   // Do pushing the sums to array here (on the leaf node),
   // If it's on the base case (on the null node), after that
   // it will run the DFS and push twice for left and right traversal
   if (!node.left && !node.right) {
      sums.push(prevSum);
      return;
   }

   DFS(node.left, prevSum, sums);
   DFS(node.right, prevSum, sums);
}

const branchSums = (root) => {
   let result = [];
   DFS(root, 0, result);
   return result;
}

console.log(branchSums(n1));

