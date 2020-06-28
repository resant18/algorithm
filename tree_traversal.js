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

// recursive
const inOrderRecursive = (root) => {
   if (root === null) return null;

   inOrder(root.left);
   console.log(root.val);
   inOrder(root.right);
}

// DFS Iterative
const DFSIterative = (root) => {
   let stack = [root];

   while (stack.length) {
      let node = stack.pop();

      console.log(node.val);
      
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
   }
}

// console.log(DFSIterative(n1));

const DFS = (root) => {
   if (!root) return;

   console.log(root.val);

   DFS(root.left);
   DFS(root.right);
}

console.log(DFS(n1));

const BFS = (root) => {   
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