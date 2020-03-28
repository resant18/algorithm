// Leetcode #2. Add Two Numbers
// Level: Medium
// Interviewed by Amazon

// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order and each of their nodes contain a single digit. 
// Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

// Edge case:
// 1. Length of l1 > l2
// 2. One of them is empty
// 3. There is extra carry over in the end, either 1 digit or 2 digits

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
var addTwoNumbers = function (l1, l2) {
   let carryOver = 0;
   // Put the beforeHead and current pointer to null at beginning
   let currNode = new ListNode(null);
   let beforeHead = currNode;

   while (l1 || l2) {
      let firstVal = l1 ? l1.val : 0;
      let secondVal = l2 ? l2.val : 0; 
      let sum = firstVal + secondVal + carryOver;

      carryOver = parseInt(sum / 10); 
      currNode.next = new ListNode(sum % 10);
      currNode = currNode.next;
      // These 2 IFs below are for:
      // If the list is empty it will stop move further,
      // but it is still possible to add the value, which convert from null to 0
      if (l1) l1 = l1.next;
      if (l2) l2 = l2.next;
   }

   // This is only to solve 1 digit carry over.
   // The 2 digits is covered in the loop.
   if (carryOver > 0) {
      currNode.next = new ListNode(carryOver);
   }

   return beforeHead.next;
};
