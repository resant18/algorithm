class Node {
   constructor(val) {
      this.val = val;
      this.next = null;
   }
}

class LinkedList {
   constructor() {
      this.head = null;
   }

   // insert node at tail recursively
   insertNode(head, data) {
      if (head === null) return new Node(data);
      head.next = this.insertNode(head.next, data);
      return head;
   }

   // insert node at tail iteratively
   // insertNode(nodeData) {
   //    if (nodeData === null) {
   //       this.head = nodeData;
   //    }
   //    else {
   //       this.tail.next = nodeData;
   //    }
   //    this.tail = nodeData;
   // }

   displayData(node) {
      while (node) {
         console.log(node.val);

         node = node.next;
      }
      console.log("-----------");
   }

   // O(1) operation
   deleteNode(node) {
      node.val = node.next.val;
      node.next = node.next.next;
   }

   // this delete node is for all edge case, with val = 1
   // [], [1], [1, 1], [1, 2, 1], [2, 1, 1], [2, 1, 3, 1], [1, 2, 1, 3, 1]
   deleteNode(head, val) {
      let prevNode = null;
      let currNode = head;

      while (currNode) {
         if (currNode.val === val) {
            // if this current node is a head (prev is null)
            if (prevNode === null) {
               head = currNode.next;
            }
            // connect valid previous node (that is not equal the val)
            // to the next next node
            else {
               prevNode.next = currNode.next;
            }
         } else {
            // it has to be inside the else, because we only need to store prev node
            // that is valid (not equal val)
            prevNode = currNode;
         }
         currNode = currNode.next;
      }
      return head;
   }

   reverseList(head) {
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

   // Leetcode solution explanation:
   // The recursive version is slightly trickier and the key is to work backwards.
   // Assume that the rest of the list had already been reversed, now how do I reverse the front part?
   // Let's assume the list is: n1 → … → nk-1 → nk → nk+1 → … → nm → Ø
   // Assume from node nk+1 to nm had been reversed and you are at node nk.
   // n1 → … → nk-1 → nk → nk+1 ← … ← nm
   // We want nk+1’s next node to point to nk.
   // So,
   // nk.next.next = nk;
   // Be very careful that n1's next must point to Ø. If you forget about this, your linked list has a cycle in it.
   // This bug could be caught if you test your code with a linked list of size 2.

   reverseRecursive(head) {
      // base case head === null for a linked list that just have one item
      if (head === null || head.next === null) return head;

      let reversed = this.reverseRecursive(head.next);
      // assume the rest of list is succesfully reversed
      // the next of head.next item (head.next.next) is linked to head (current)
      head.next.next = head;
      // for the head, the next is linked to null
      head.next = null;
      return reversed;
   }

   reverseBetween(head, m, n) {
      if (head == null) {
         return null;
      }
      
      // set a prev pointer with next point to head. This pointer will be used to iterate
      let prev = { next: head };
    
      // set a pointer that hold next point to head
      let beforeHead = prev;

      // Move prev pointer until it reach a node before m position (m - 1 posiiton)
      while (--m) {
         prev = prev.next;         
         --n;
      }

      // set current pointer
      let curr = prev.next;

      // The two pointers that will fix the final connections.
      let newHead = prev, newTail = curr;      

      // Iteratively reverse the nodes until the current pointer reach m + 1 position
      let temp = null;
      while (n--) {
         temp = curr.next; // save the last node
         curr.next = prev; // reverse the connection
         prev = curr; // move 2 pointers starting from prev first
         curr = temp;

         // Important Note!
         // temp = curr.next.next;   
         // 'curr.next.next = curr;' is wrong, because it doesn't mean (curr.next).next = curr, 
         // but curr.next.next could refer the object itself, which is temp and temp is set to curr make it circular. 
         // So, we need prev pointer still;        
         // curr.next.next = curr;   
         // curr = curr.next;                 
      }       

      // Adjust the final connections as explained in the algorithm
      // if (newHead != null) {
         newHead.next = prev;
      // } else {
      //    head = prev;
      // }
      
      newTail.next = curr;
      // return head;
      return beforeHead.next;

   }
}

function main() {
   let n1 = new Node(1);
   let n2 = new Node(2);
   let n3 = new Node(3);
   let n4 = new Node(4);
   let n5 = new Node(5);

   n1.next = n2;
   n2.next = n3;
   n3.next = n4;
   n4.next = n5;   

   // let elements = [n1, n2];
   let llist = new LinkedList();
   // let llist_head;
   llist.head = n1;

   // for (let el of elements) {    
   //    llist_head = llist.insertNode(llist.head, el);   
   //    llist.head = llist_head;
   // }
   // llist_head = llist.deleteNode(llist.head, 2);
   // llist.displayData(llist_head);

   // llist.insertNode(llist_head, n2);
   // llist.displayData(llist.head);
   // console.log(n1);

   // llist_head = llist.reverseList(llist.head);
   // let reversedList = llist.reverseRecursive(llist.head);
   // llist.displayData(reversedList);
   
   let newHead = llist.reverseBetween(llist.head, 2, 4);
   llist.displayData(newHead);
}

main();