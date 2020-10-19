/*
LeetCode 199. Binary Tree Right Side View
Level: Medium

Given a binary tree, imagine yourself standing on the right side of it, 
return the values of the nodes you can see ordered from top to bottom.

Example:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
*/

class TreeNode {
   constructor(val, left, right) {
      this.val = val ? val : null;
      this.left = left ? left : null;
      this.right = right ? right : null;
   }
}

var buildTree = (arr) => {
   let n = arr.length;   
   let rootNode = insertNode(arr, null, 0, n);
   return rootNode;
};

var insertNode = (arr, root, i, n) => {
   if (i < n) {      
      root = new TreeNode(arr[i]);;

      root.left = insertNode(arr, root.left, 2 * i + 1, n);
      root.right = insertNode(arr, root.right, 2 * i + 2, n);
   }
   return root;
};

var printTree = (root) => {
   if (!root) return;

   console.log(root.val);
   printTree(root.left);
   printTree(root.right);
};


let arrInput = [1, 2, 3, null, 5, null, 4];
let rootNode = buildTree(arrInput);
printTree(rootNode);


/*

Three BFS approaches

The difference is how to find the end of the level, i.e. the rightmost element:

1. Two queues, one for the previous level and one for the current. Time = O(n), Space: O(D)
2. One queue with sentinel to mark the end of the level. Time = O(n), Space: O(D)
3. One queue + level size measurement. Time = O(n), Space: O(D)
*/

// Method 1 : BFS with 2 Queues
/**
Algorithm:
Initiate the list of the right side view rightside.
Initiate two queues: one for the current level, and one for the next. Add root into nextLevel queue.
While nextLevel queue is not empty:
   Initiate the current level: currLevel = nextLevel, and empty the nextLevel.
   While current level queue is not empty:
      Pop out a node from the current level queue.
      Add first left and then right child node into nextLevel queue.
   Now currLevel is empty, and the node we have in hands is the last one, 
   and makes a part of the right side view. Add it into rightside.
Return rightside. */

// Time: O(n), Space: O(Ln) where Ln is the last level (nextLevel), up to N/2 nodes
const bfsTwoQueues = (root) => {
   if (!root) return [];

   let rightSideView = [];
   let currentLevel = [];
   let nextLevel = [rootNode];

   while (nextLevel.length) {
      currentLevel = nextLevel;
      nextLevel = [];
      let node;

      while (currentLevel.length) {
         node = currentLevel.shift();
         if (node.left) nextLevel.push(node.left);
         if (node.right) nextLevel.push(node.right);                  
      }
      rightSideView.push(node.val);
   }

   return rightSideView;
}

console.log("BFS Two Queues: ", bfsTwoQueues(rootNode));

// Method 2 : BFS with 1 Queue + Sentinel
/*
Initiate the list of the right side view rightside.
Initiate the queue by adding a root. Add null sentinel to mark the end of the first level.
Initiate the current node as root.
While queue is not empty:
   - Save the previous node prev = curr and pop the current node from the queue curr = queue.poll().
   - While the current node is not null:
      - Add first left and then right child node into the queue.
      - Update both previous and current nodes: prev = curr, curr = queue.poll().
   - Now the current node is null, i.e. we reached the end of the current level. Hence the previous node is the rightmost one and makes a part of the right side view. Add it into rightside.
   - If the queue is not empty, push the null node as a sentinel, to mark the end of the next level.
Return rightside.
*/
// // Time: O(n), Space: O(Ln) where Ln is the last level (nextLevel), up to N/2 nodes
const bfsQueueSentinel = (root) => {
   if (!root) return [];

   let queue = [root, null]; //
   let rightSideView = []; // 1, 3, 4
   let prevNode, node;

   while (queue.length) {
      prevNode = node; // null
      node = queue.shift();   // null

      while (node) {
         if (node.left) queue.push(node.left);
         if (node.right) queue.push(node.right);

         // iterate to the next node, to see if there is anymore node at that level
         prevNode = node;
         node = queue.shift();
      } 
      rightSideView.push(prevNode.val);

      // Checking the queue is empty or not here is important,
      // to prevent adding null when reach the end of tree.
      if (queue.length > 0) queue.push(null);      
   }
   return rightSideView;
}

console.log("BFS One Queue with Sentinel: ", bfsQueueSentinel(rootNode));

// Method 3: BFS One Queue + Level Size Measurement
/** Algorithm
 * 
Initiate the list of the right side view rightside.
Initiate the queue by adding a root.
While the queue is not empty:
 - Write down the length of the current level: levelLength = queue.size().
 - Iterate over i from 0 to level_length - 1:
   - Pop the current node from the queue: node = queue.poll().
   - If i == levelLength - 1, then it's the last node in the current level, push it to rightsize list.
   - Add first left and then right child node into the queue.
Return rightside.
 */
// // Time: O(n), Space: O(Ln) where Ln is the last level (nextLevel), up to N/2 nodes
const bfsQueueLevelSize = (root) => {
   if (!root) return [];

   let queue = [root];
   let rightSideView = [];

   while (queue.length) {
      let size = queue.length;

      for (let i = 0; i < size; i++) {
         let node = queue.shift();

         if (i === size - 1) rightSideView.push(node.val);

         if (node.left) queue.push(node.left);
         if (node.right) queue.push(node.right);         
      }
   }
   return rightSideView;
}

console.log("BFS One Queue with Level Size: ", bfsQueueLevelSize(rootNode));

// Method 4: Recursive DFS
/** Algorithm
 * 
traverse the tree level by level, starting each time from the rightmost child.
 */
// // Time: O(n), Space: O(H) where H is the tree height.
const dfsRightSideView = (arr) => {
   let rightSideView = {};

   const dfsPerLevel = (root, level) => {
      if (!root) return;

      rightSideView[level] = root.val;
      dfsPerLevel(root.left, level + 1);
      dfsPerLevel(root.right, level + 1);
   }

   dfsPerLevel(arr, 0);

   return Object.values(rightSideView);
}

console.log("DFS Recursive: ", dfsRightSideView(rootNode));