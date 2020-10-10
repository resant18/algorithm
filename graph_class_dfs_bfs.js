// AlgoExpert, see the image in folder algoexpert_image.

/* Input:
graph =   A
       /  |  \
      B   C   D
     /\       /\
    E  F     G  H
       /\     \
      I  J     K
*/
// Time: O(v + e), v = vertex, e = edge
// Space: O(v), 
class GraphNode {
   constructor(name) {
      this.name = name;
      this.children = [];
   }

   addChild(name) {
      this.children.push(new Node(name));
   }

   depthFirstSearch(array) {
      array.push(this.name);

      this.children.forEach(childNode => {
         childNode.depthFirstSearch(array);
      });

      return array; // A, B, E, F, I, J, C, D, G, K, H
   }

   breadthfirstSearch(array) {
      let q = [this];

      while (q.length) {
         let node = q.shift();
         array.push(node.name);
         q.push(...node.children);
      }

      return array; // A, B, C, D, E, F, G, H, I, J
   }
}