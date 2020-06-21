function inOrderArray(root) {
    if (!root) return;

    inOrderArray(root.left);
    console.log(root.val);
    inOrderArray(root.right);
}

function postOrderArray(root) {
    if (!root) return;
    
    inOrderArray(root.left);    
    inOrderArray(root.right);
    console.log(root.val);
}


module.exports = {
    inOrderArray,
    postOrderArray
};