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

// Result: [10, 10, 9]

// DFS
const avgSumNodesPerLevel = (root) => {
   if (!root) return [];

   let data = {};
   let result = [];
   const dfs = (root, level = 0) => {
      if (!root) return [];

      if (data.hasOwnProperty(level)) {
         let [sum, count] = data[level];
         sum += root.val;
         count++;
         data[level] = [sum, count];
      } else {
         data[level] = [root.val, 1];
      }

      dfs(root.left, level + 1);
      dfs(root.right, level + 1);
   };

   dfs(root, 0);

   for (let level in data) {
      const [sum, count] = data[level];
      let avg = Math.floor(sum / count);
      result.push(avg);
   }

   return result;
};

console.log('Average Sum Nodes per Level (DFS)', avgSumNodesPerLevel(n1));

// BFS
const avgSumNodesPerLevel2 = (root) => {
   if (!root) return [];

   let data = {};
   let result = [];      
   let queue = [[root, 1]];

   while (queue.length) {
      let [node, level] = queue.shift();

      if (level in data) {
         let [sum, count] = data[level];
         sum += node.val;
         count++;
         data[level] = [sum, level];
         
      } else {
         data[level] = [node.val, 1];
      }

      if (node.left) queue.push([node.left, level + 1]);      
      if (node.right) queue.push([node.right, level + 1]);
   }
   
   for (const level in data) {
      let [sum, count] = data[level];
      let avg = Math.floor(sum / count);
      result.push(avg);
   }

   return result;

};

console.log("Average Sum Nodes per Level (BFS)", avgSumNodesPerLevel2(n1));
