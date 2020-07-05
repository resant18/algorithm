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

// a -> b -> b -> a -> null
// same as solution provided by Leetcode (in solution tab)
// TimeL O(n), Space: O(n)
var reverseListRecursive = function(head) {
    // base case - get the tail
    if (head == null || head.next === null) return head;
    
    let p = reverseListRecursive(head.next); //reverseList(b.next) = a = the tail
    head.next.next = head;
    head.next = null;
    return p;
};