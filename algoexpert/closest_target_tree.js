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
   If tree is null, it returns null, the closest is null
2  If tree is single node = 10, it returns 10, the closest is 10
   If tree is a tree, it returns closest
3. Update closest, when there is a node that has smaller difference value with target



target = 7
closest = 10 => 5
return DFS(10.left, 7, 10) = ... => return DFS(5.right, 7, 5) =  5
              5               ^                  null            |
                              5                                  |
                              |__________________________________|
*/
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
