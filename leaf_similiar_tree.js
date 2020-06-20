/**
 * 872. Leaf-Similar Trees
 * Level: Easy
 * Company: Atlassian
 * 
 * Consider all the leaves of a binary tree.  From left to right order, the values of those leaves form a leaf value sequence.
 * 
 * For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).
 * Two binary trees are considered leaf-similar if their leaf value sequence is the same.
 * Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

 * Constraints:
 * Both of the given trees will have between 1 and 200 nodes.
 * Both of the given trees will have values between 0 and 200
 */

function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
}

let n1 = new TreeNode(10);
let n2 = new TreeNode(5);
let n3 = new TreeNode(15);
let n4 = new TreeNode(3);
let n5 = new TreeNode(7);
let n6 = new TreeNode(18);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.right = n6;

//     10
//    /  \
//   5   15
//  / \    \
// 3   7    18
// Result: [3, 7, 18]


// f(5) => leaves = []
//         f(3) -> leaves = [3] 
//              -> f(null) = []
//              -> f(null) = []
//              [3].concat([], []) = [3]
//         f(7) -> leaves = [7] 
//              -> f(null) = []
//              -> f(null) = []
//              [7].concat([], []) = [7]
//         [].concat([3], [7]) = [3, 7]


function findLeaves(root) {
   let leaves = [];   
   
   if (!root) return [];   

   if (!root.left && !root.right) {      
      leaves.push(root.val); //3
      // console.log(leaves);
   }
   console.log('root:', root.val);
   let leftLeaf = findLeaves(root.left); // f(3.left = null) = []
   console.log('left leaf:', leftLeaf);
   let rightLeaf = findLeaves(root.right); // f(3.right = null) = []
   console.log('right leaf:', rightLeaf);

   leaves = leaves.concat(leftLeaf, rightLeaf); // []
   console.log('leaves:', leaves);
   return leaves;
}

console.log(findLeaves(n1));

var leafSimilar = function(root1, root2) {
   let leaves1 = findLeaves(root1);
   let leaves2 = findLeaves(root2);

   if (leaves1.length !== leaves2.length) return false;
   for (let i = 0; i < leaves1.length; i++) {
      if (leaves1[i] !== leaves2[i]) return false;
   }
   return true;
}