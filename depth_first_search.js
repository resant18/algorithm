// Depth First
// Using data structure: Stack (LIFO)
// Pseudocode:

//      a
//    /  \
//   b     c
// /  \     \
// d   e      f

class Node {
   constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
   }
}

let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");
let f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// Method 1: Iteration
const depthFirstSearch = (root, target) => {
   let stack = [root];   

   while (stack.length) {
      let node = stack.pop();
      if (node.val === target) return true;
      
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
   }

   return false;
}

// console.log(depthFirstSearch(a, "h"));


//      a
//    /  \
//   b     c
// /  \     \
// d   e      f

// c

// Method 2: Recursive
const depthFirstSearch2 = (root, target) => {
   if (!root) return;
   if (root.val === target) return true;
   console.log(root.val);

   if (depthFirstSearch2(root.left, target)) return true;
   if (depthFirstSearch2(root.right, target)) return true;   

   return false;
}

console.log(depthFirstSearch2(a, "c"));