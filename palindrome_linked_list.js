/*
LeetCode #234. Palindrome Linked List
Level: Easy
Company: Amazon, Bloomberg, Microsoft, Apple, Snapchat, Nutanix

Given a singly linked list, determine if it is a palindrome.

Example 1:
Input: 1->2
Output: false

Example 2:
Input: 1->2->2->1
Output: true

Follow up:
Could you do it in O(n) time and O(1) space?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 
 BASE CASE: 
 - If the linked list is null, it's a valid palindrome
 


 PSEUDOCODE:
 1. Find the middle node of the linked list
    - If it has 2 elements: 1 -> 2, middle node: 1
    - If it has odd elements: 1 -> 2 -> 1, middle node: 2
    - If it has even elements: 1 -> 3 -> 3 -> 1, middle node: the first 3
 2. From that middle linked list's next node, reverse the list.
    Note: It starts from the middle's next node, because if it's even elements, the middle node is not included in comparison.
 3. Reverse the second half linked list, starts from middle's next node.
 4. Compare the first half and second half part of the linked list.
    Note: create copies of both of the heads
 5. Reverse the second half part back to original and connect it into the middle node's next node.
 6. Return true/false

 a -> b -> c -> c -> b -> a
 a -> b -> c    c <- b <- a
 */


var isPalindrome = function(head) {
    if (head === null) return true;    
    
    // Find the end of first half and reserve the second half part
    let middleNode = findMiddleNode(head);    
    // console.log(middleNode);
    let secondHalfStart = reverseLinkedList(middleNode.next); //why next, check pseudocode no. 2
    // console.log(secondHalfStart);
    
    // Check if the first half equal to second hal part (palindrome)
    let result = true;    
    let firstHead = head;
    let secondHead = secondHalfStart;
    while(secondHead) {        
        if (secondHead.val !== firstHead.val) {
            result = false;
            break;
        }
        // console.log(secondHead.val);
        // console.log(firstHead.val);
        secondHead = secondHead.next;
        firstHead = firstHead.next;
    }
    
    // Restore the list and return the result
    middleNode.next = reverseLinkedList(secondHalfStart);
    // console.log(head);
    return result;
};

var findMiddleNode = function(head) {
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }    
    return slow;
}

var reverseLinkedList = function(head) {
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
}

