// 236. Lowest Common Ancestor of a Binary Tree

var lca = function(root, p, q) {
   if (root === null || root === p || root === q) return root;
   left = lca(root.left, p, q);
   right = lca(root.right, p, q);

   // if a root has left and right node, return that root because that the common ancestor
   return (left && right) ? root : (left || right);
}


