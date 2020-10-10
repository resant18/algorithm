/* Different Data Structure to represent Graph */

// 1. Object / Class
class GraphNode {
   constructor(val) {
      this.val = val;
      this.neighbors = [];
   }
}

let a = new GraphNode("a");
let b = new GraphNode("b");
let c = new GraphNode("c");
let d = new GraphNode("d");
let e = new GraphNode("e");
let f = new GraphNode("f");
a.neighbors = [e, c, b];
c.neighbors = [b, d];
e.neighbors = [a];
f.neighbors = [e];


// 2. Graph Traversal with Adjacency List
let graph = {
   a: ["b", "c", "e"],
   b: [],
   c: ["b", "d"],
   d: [],
   e: ["a"],
   f: ["e"],
};

// Method 1: DFS
// Scenario: Preferred if we want to visit every nodes

// A. Recursive
// Main function
const dfsGraph = (graph) => {
   let visited = new Set();

   // check for each node/key in the graph
   for (let node in graph) {
      _dfsGraphRec(graph, node, visited);
   }
}

// Helper function (recursive)
const _dfsGraphRec = (graph, node, visited) => {
   // Check if the node is visited before, otherwise add it to the set
   if (visited.has(node)) return;   
   visited.add(node);

   console.log(node);

   // Iterate each of node's neigbors recursively 
   graph[node].forEach( neighbourNode => {
      _dfsGraphRec(graph, neighbourNode, visited);
   });
}

console.log('DFS Recursive:')
dfsGraph(graph);
console.log('--------------------------------');


// B. Iterative
const dfsGraphIterative = (graph) => {
   let visited = new Set();

   // Iterate each node in the graph
   for (let node in graph) {      
      let stack = [node];
      
      while(stack.length) {
         let node = stack.pop();

         if (visited.has(node)) continue;         
         visited.add(node);  // a, e, c

         console.log(node);

         stack.push(...graph[node]); //b, b, d
      }
   }
}

console.log('DFS Iterative');
dfsGraphIterative(graph);

// Method 2: BFS
const bfsGraph = (graph) => {
   let visited = new Set();      

   for (let node in graph) {      
      let queue = [node];

      while (queue.length) {
         let node = queue.shift();
         
         if (visited.has(node)) continue;
         visited.add(node);

         console.log(node);

         queue.push(...graph[node]);
      }
   }
}

console.log("BFS");
bfsGraph(graph);

   
