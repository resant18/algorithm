// Leet code #111
// Given a binary tree, find its minimum depth.
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

// Example:
// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its minimum depth = 2.
class Node {
   constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
   }
}

node3 = new Node(3);
node9 = new Node(9);
node20 = new Node(20);
node15 = new Node(15);
node7 = new Node(7);

node3.left = node9;
node3.right = node20;
node20.left = node15;
node20.right = node7;

// Using depth traversal
// For [2] case -> add 2 additional base cases. If left is null, return min depth of right side. 
// If right is null, return min depth of left side.

var minDepth = function(root) { 
   //Null node has 0 depth
    if (!root) return 0;            
    
    let minRight = minDepth(root.right);
    let minLeft = minDepth(root.left);
    
    // if the node has no left sub-tree, then recur on the right sub-tree 
    if (!root.left) return minRight + 1;        
    // if the node has no right sub-tree, then recur on the left sub-tree
    if (!root.right) return minLeft + 1;
    
    // if the node has right and left, find the minimum depth
    return Math.min(minLeft, minRight) + 1;
}

console.log(minDepth(node3));