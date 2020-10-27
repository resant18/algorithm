/*
LeetCode #206. Reverse Linked List
Level: Easy

Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL

Follow up:
A linked list can be reversed either iteratively or recursively. Could you implement both?

       
       h
       |
null <-1  2 -> 3 -> 4 
 |     |    |
 p     c    t
*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let a = new Node('a');
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");

a.next = b;
b.next = c;
c.next = d;


// iterative
// Time: O(n), Space: O(1)
var reverseListIterative = function(head) {
    let prevNode = null;
    let currNode = head;
    let nextNode;
    
    while (currNode) {
        nextNode = currNode.next;
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = nextNode;
    }
    return prevNode;
};

/** 
 * Recursive
The recursive version is slightly trickier and the key is to work backwards. 
Assume that the rest of the list had already been reversed, 
now how do I reverse the front part? 
Let's assume the list is: n1 → … → nk-1 → nk → nk+1 → … → nm → Ø

Assume from node nk+1 to nm had been reversed and you are at node nk.

n1 → … → nk-1 → nk → nk+1 ← … ← nm

We want nk+1’s next node to point to nk.

So,

nk.next.next = nk;

Be very careful that n1's next must point to Ø. 
If you forget about this, your linked list has a cycle in it. 
This bug could be caught if you test your code with a linked list of size 2.
*/

// a -> b -> c -> d -> null
// same as solution provided by Leetcode (in solution tab)
// TimeL O(n), Space: O(n). The extra space comes from implicit stack space due to recursion.
var reverseListRecursive = function(head) {
   // base case - get the tail
   if (head == null || head.next === null) return head;

   let p = reverseListRecursive(head.next);
   head.next.next = head;
   head.next = null;
   //p value would be the same in all function call, which is the tail
   //because the base case is hit when the current pointer is in c
   return p;
};

reverseListRecursive(a);
// The stack after hit the case base
/*
reverseListRecursive(c.next) = d
c.next.next = c;
c.next = null
return d
a -> b -> c <- d 
          |
          null

reverseListRecursive(b.next) = d 
b.next.next = b 
b.next = null 
return d
a -> b <- c <- d 
     |
    null      

reverseListRecursive(a.next) = d 
a.next.next = a 
a.next = null 
return d
null <- a <- b <- c <- d 
*/
