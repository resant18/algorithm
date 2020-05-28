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


// For this tree:
//     10
//    /  \
//   5   15
// the leaves stack return as follow:
// [].concat(10.left,                            10.right) 
//           [5].concat(5.left, 5.right)         [15].concat(15.left, 15.right)
//           [5].concat(null, null)

const findLeaves = (root) => {
   let leaves = [];
   if (!root) return [];

   if (!root.left && !root.right) leaves.push(root.val);
   return leaves.concat(findLeaves(root.left), findLeaves(root.right));
}

console.log(findLeaves(n1));