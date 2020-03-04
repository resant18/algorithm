// LeetCode 21: Merged Two Sorted List (Easy)
// Merge two sorted linked lists and return it as a new list. 
// The new list should be made by splicing together the nodes of the first two lists.

// Example:
// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

// Edge case: 
// - new list meaning a new object, or modified one of the list (confirm with interviewer)
// - one of the list is null
// - if after iteration, there is still remaining item in one of the list
// - if there is same value in both of the list, which one should we pick?

// Pseudocode:
// - Create a new object linked list to save the merged linked list
// - Create a pointer to point current head in iteration
// - Iterate until reaching the end of one linked list -> if the length of both linked list are not the same, there will be some remaining items to consider
// - In value comparison, take the less value and move forward to the next node
// - Move the current pointer to that picked node
// - Return the result

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 var mergeTwoList = function(l1, l2) {
   let head = new ListNode(null);


 }
