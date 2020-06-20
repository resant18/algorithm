/*
LeetCode 572. Subtree of Another Tree
Level: Easy
Company: Amazon

Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s.
A subtree of s is a tree consists of a node in s and all of this node's descendants. 
The tree s could also be considered as a subtree of itself.

Example 1:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
Given tree t:
   4 
  / \
 1   2
Return true, because t has the same structure and node values with a subtree of s.
 

Example 2:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
    /
   0
Given tree t:
   4
  / \
 1   2
Return false.

*/

class Node {
   constructor(val) {
      this.val = val;
      this.left = this.right = null;
   }
}

let n3 = new Node(3);
let n4s = new Node(4);
let n4t = new Node(4);
let n5 = new Node(5);
let n1s = new Node(1);
let n1t = new Node(1);
let n2s = new Node(2);
let n2t = new Node(2);
let n0 = new Node(0);

n4t.left = n1t;
n4t.right = n2t;

n3.left = n4s;
n3.right = n5;
n4s.left = n1s;
n4s.right = n2s;
n2s.left = n0;


var isSameTree = function (p, q) {
   if (p === null && q === null) return true;
   if ((p && p.val) !== (q && q.val)) return false;

   return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

var isSubtree = function(s, t) {
   if (s === null) return false;   
   if ((s.val === t.val) && (isSameTree(s, t))) return true;
   return isSubtree(s.left, t) || isSubtree(s.right, t);   
}

console.log(isSubtree(n3, n4t)); //false;