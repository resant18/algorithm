/**
 * 1. Find lowest common ancestor of the two nodes
 * 2. Find distance between lca to node 1 = d1
 * 3. Find distance between lca to node 2 = d2
 */

//     3
//    / \
//   9  20
//     /  \
//    15   7
//        / \
//       2   10
// return distance between 15 and 10 is 3
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

node3.left = node9;
node3.right = node20;
node20.left = node15;
node20.right = node7;
node7.left = node2;
node7.right = node10;

 let findLca = (root, n1, n2) => {
   if (root === null || root === n1 || root === n2) return root;

   let left = findLca(root.left, n1, n2);
   let right = findLca(root.right, n1, n2);

   return (left && right) ? root : (left || right);
 }

 let lcaToNode = (root, nodeVal, distance, level) => {
   if (root === null) return null;
   if (root.val === nodeVal) {
      distance.push(level);
      return;
   }

   lcaToNode(root.left, nodeVal, distance, level + 1);
   lcaToNode(root.right, nodeVal, distance, level + 1);
   
 }

 let distanceBetweenNodes = (root, n1, n2) => {

   let lca = findLca(root, n1, n2);
   let d1 = [];
   let d2 = [];

   if (lca) {
      lcaToNode(lca, n1.val, d1, 0);      
      lcaToNode(lca, n2.val, d2, 0);            
      return d1[0] + d2[0];
   }
   else {
      return -1;
   }
 }

//  console.log(findLca(node3, node7, node9));
//  let d = [];
//  lcaToNode(node3, 2, d, 0);
//  console.log(d);
 console.log(distanceBetweenNodes(node3, node9, node10));