// Graph Traversal with Adjacency List
let graph = {
   a: ["b", "c", "e"],
   b: [],
   c: ["b", "d"],
   d: [],
   e: ["a"],
   f: ["e"],
};

// Method 1: Recursive
const depthFirst = (graph) => {
   let visited = new Set();

   for (let node in graph) {
      _depthFirstRec(graph, node, visited);
   }
}

const _depthFirstRec = (graph, node, visited) => {
   if (visited.has(node)) return;

   console.log(node);
   visited.add(node);

   graph[node].forEach( neighbourNode => {
      _depthFirstRec(graph, neighbourNode, visited);
   });
}

console.log('Recursive:')
depthFirst(graph);
console.log('--------------------------------');

// Method 2: Iterative

const depthFirstIterative = (graph) => {
   let visited = new Set();

   for (let node in graph) {      
      let stack = [node];
      
      while(stack.length) {
         let node = stack.pop();

         if (visited.has(node)) continue;

         console.log(node);
         visited.add(node);

         stack.push(...graph[node]);
      }
   }
}

console.log('Iterative');
depthFirstIterative(graph);
