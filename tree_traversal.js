/* Different Data Structure to represent Tree */

// 1. Array
var buildTree = (arr) => {
   let n = arr.length;
   let root = null;
   root = insertNode(arr, root, 0, n);
   return root;
};

var insertNode = (arr, root, i, n) => {
   if (i < n) {
      let node = new TreeNode(arr[i]);
      root = node;

      root.left = insertNode(arr, root.left, 2 * i + 1, n);
      root.right = insertNode(arr, root.right, 2 * i + 2, n);
   }
   return root;
};


// console.log(buildTree([1, 2, 3]));

// 2. TreeNode
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

/* Different Tree Traversal Method */

// Method 1 : DFS Recursive
/***  A. PreOrder - Top -> Bottom
Pre-Order has the patten of self, left, right. This means:
- a node must be printed before it's children
- a node's left subtree must be printed before it's right subtree
*/
console.log("DFS PreOrder: ");
const dfsPreOrder = (root) => { // 10, 5, 3, 7, 15, 18
   if (!root) return;

   console.log(root.val);

   dfsPreOrder(root.left);
   dfsPreOrder(root.right);
}
dfsPreOrder(n1);


/*** B. InOrder - Top -> Bottom 
In-Order has the pattern of left, self, right. This means:
 - a node can only be printed once it's left subtree has been completely printed.
 - a node's right subtree can only be printed once the node itself has been printed.
*/
console.log("DFS InOrder:");
const dfsInOrder = (root) => { // print: 3, 5, 7, 10, 15, 18
   if (!root) return;

   dfsInOrder(root.left);
   console.log(root.val);
   dfsInOrder(root.right);
};

dfsInOrder(n1);

/*** C. PostOrder - Bottom -> Top
Post-Order has the pattern of left, right, self. This means:
- a node can only be printed after it's left and right subtrees
- a node's left subtree is printed before it's right subtree
*/
console.log("DFS PostOrder:");
const dfsPostOrder = (root) => {  // print: 3, 5, 7, 10, 15, 18
   if (!root) return;

   dfsPostOrder(root.left);   
   dfsPostOrder(root.right);
   console.log(root.val);
};

dfsPostOrder(n1);

/******************************************************* */
// B. DFS Iterative
const DFSIterative = (root) => {
   let stack = [root];

   while (stack.length) {
      let node = stack.pop();

      console.log(node.val);
      
      if (node.right) stack.push(node.right); // push right first, so the result would be from left -> right
      if (node.left) stack.push(node.left);
   }
}

// console.log(DFSIterative(n1));

// Example of use: DFS Traversal Per Level
const dfsPerLevel1 = (root) => {
   let nodesPerLevel = [];   

   const dfs = (root, level) => {
      if (!root) return;

      if (level in nodesPerLevel) nodesPerLevel[level].push(root.val)
      else nodesPerLevel[level] = [root.val];

      dfs(root.left, level + 1);
      dfs(root.right, level + 1);      
   }

   dfs(root, 0);
   return nodesPerLevel;
}

// console.log('DFS Per Level: ', dfsPerLevel1(n1));

console.log("DFS Per Level: ", dfsPerLevel(n1));
/* ************************ */

// Method 2: BFS
const BFS = (root) => {
   let q = [root];

   while (q.length) {
      let node = q.shift();

      console.log("Level:" + lvl);
      console.log(node.val);

      if (node.left) q.push(node.left); // push left first, because it use queue.shift here.
      if (node.right) q.push(node.right);
   }
};

// Example of use: BFS Level Order Traversal
const BFSPerLevel = (root) => {   
   let q = [[root, 0]];
   
   while (q.length) {
      let [node, lvl] = q.shift();
   
      console.log("Level:" + lvl);
      console.log(node.val);      

      if (node.left) q.push([node.left, lvl + 1]);
      if (node.right) q.push([node.right, lvl + 1]);      
   }
}

// console.log(BFS(n1));