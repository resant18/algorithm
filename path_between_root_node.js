//     3
//    / \
//   9  20
//     /  \
//    15   7
//        / \
//       2   10
// Total steps from root to 7 = 4 if using DFS
class Node {
   constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
   }
}

node2 = new Node(2);
node3 = new Node(3);
node9 = new Node(9);
node10 = new Node(10);
node20 = new Node(20);
node15 = new Node(15);
node7 = new Node(7);

const totalSteps = (root, node) => {
   if (root === null) return 0;
   if (root.val === node) return 0;

   let left = totalSteps(root.left, node) + 1;
   let right = totalSteps(root.right, node) + 1;

   return left + right;
}


console.log(totalSteps(node3, 9));