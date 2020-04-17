// Byte by Byte
var balancedHeight = function(root) {
    if (root === null) return 0;
    leftHeight = balancedHeight(root.left);
    rightHeight = balancedHeight(root.right);

    if (leftHeight === -1 || rightHeight === -1) return -1;
    if (Math.abs(leftHeight - rightHeight) > 1) return -1;

    console.log(root.val);
    console.log(leftHeight);
    console.log(rightHeight);
    console.log(Math.max(leftHeight, rightHeight) + 1);
    console.log('_____________');

    return Math.max(leftHeight, rightHeight) + 1;
}

var isBalanced = function(root) {
    if (balancedHeight(root) > -1) return true;
    return false;
};


// iterative - but still doesn't work
// var isBalanced = function (root) {
//    // A tree with no nodes is superbalanced, since there are no leaves!
//    if (!root) {
//       return true;
//    }

//    const depths = []; // We short-circuit as soon as we find more than 2

//    // Nodes will store pairs of a node and the node's depth
//    const nodes = [];
//    nodes.push([root, 0]);

//    while (nodes.length) {
//       // Pop a node and its depth from the top of our stack
//       const nodePair = nodes.pop();
//       const node = nodePair[0];
//       const depth = nodePair[1];

//       if (!node.left && !node.right) {
//          // Сase: we found a leaf
//          // We only care if it's a new depth
//          if (depths.indexOf(depth) < 0) {
//             depths.push(depth);

//             // Two ways we might now have an unbalanced tree:
//             //   1) More than 2 different leaf depths
//             //   2) 2 leaf depths that are more than 1 apart
//             if (depths.length > 2 || (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)) {
//                return false;
//             }
//          }
//       } else {
//          // Case: this isn't a leaf - keep stepping down
//          if (node.left) {
//             nodes.push([node.left, depth + 1]);
//          }
//          if (node.right) {
//             nodes.push([node.right, depth + 1]);
//          }
//       }
//    }

//    return true;
// };