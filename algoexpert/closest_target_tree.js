// Algo Expert
// Find Closest Value in BST
// Level: Easy

function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
}

let n1 = new TreeNode(10);
let n2 = new TreeNode(5);
let n3 = new TreeNode(15);
let n4 = new TreeNode(2);
let n5 = new TreeNode(5);
let n6 = new TreeNode(13);
let n7 = new TreeNode(22);
let n8 = new TreeNode(1);
let n9 = new TreeNode(14);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;
n4.left = n8;
n6.right = n9;

//          10
//       /      \
//      5       15
//     / \     /  \
//    2   5   13  18
//   /         \
//  1          14
/* 
PSEUDOCODE:
1. Base case:  
   If it reached the leave (end of a traverse) return closest
2  Using inorder:
   - Update closest, when there is a node that has smaller difference value with target
   - Continue traverse to left branch if root value is smaller than target, or
   - Continue traverse to right branch if root value is larger than target, or
   - If the root value = target, return the closest



target = 7
closest = 10 => 5
return DFS(10.left, 7, 10) = ... => return DFS(5.right, 7, 5) =  5
              5               ^                  null            |
                              5                                  |
                              |__________________________________|
*/

// Method 1: Recursive
// Average: Time O(log(n)), Space: O(log(n))
// Worst: Time O(n), if worst case a tree has only 1 branch (similar to linkedlist), there is no chance to eliminate half tree.
//        Space: O(n)
const DFS = (tree, target, closest) => {
   if (!tree) return closest; //

   // update closest value if there is a node that has smaller difference value with target
   if (Math.abs(tree.val - target) < Math.abs(closest - target)) { // 5-7 < 10-7
      closest = tree.val; //
   }

   if (target < tree.val) {
      // need return here      
      return DFS(tree.left, target, closest);
   }
   else if (target > tree.val) {
      // need return here
      return DFS(tree.right, target, closest);
   }
   else {
      // need return here
      return closest;
   }
}

const findClosestValueInBst = (tree, target) => {
   return DFS(tree, target, tree.val);
}

console.log(findClosestValueInBst(n1, 12));

// Method 2: ITERATIVE
// Average: Time O(log(n)), Space: O(1)
// Worst: Time O(n), 
//        Space: O(1), because it does not use stack.
function findClosestValueInBstIterative(tree, target) {
   let closest = tree.val;
   let currentNode = tree;
   

   while (currentNode) {      
      if (Math.abs(currentNode.val - target) < Math.abs(closest - target)) {
         closest = currentNode.val;
      }

      if (target < currentNode.val) {
         currentNode = currentNode.left;
      } else if (target > currentNode.val) {
         currentNode = currentNode.right;
      } else {
         break;
      }
   }

   return closest;
}

console.log(findClosestValueInBstIterative(n1, 12));
