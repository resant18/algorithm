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

   insertNode(head, data) {
      if (head === null) return new Node(data);
      head.next = this.insertNode(head.next, data);
      return head;
   }

   displayData(node) {
      while (node) {
         console.log(node.val);
         node = node.next;         
      }
   }

   deleteNode(node) {
      node.val = node.next.val;
      node.next = node.next.next;
   }

   // this delete node is for all edge case, with val = 1
   // [], [1], [1, 1], [1, 2, 1], [2, 1, 1], [2, 1, 3, 1], [1, 2, 1, 3, 1]
   deleteNode(head, val) {
      let prevNode = null;
      let currentNode = head;

      while (currentNode) {
         if (currentNode.val === val) {
            // if this current node is a head (prev is null)
            if (prevNode === null) {
                  head = currentNode.next;
            } 
            // connect valid previous node (that is not equal the val)
            // to the next next node
            else {
                  prevNode.next = currentNode.next;
            }
         }
         else {
            // it has to be inside the else, because we only need to store prev node
            // that is valid (not equl val)
            prevNode = currentNode;
         }
         currentNode = currentNode.next;
      }
      return head;
   }
}

function main() {
   let n1 = new Node(1);
   let n2 = new Node(1);
   // let n3 = new Node(1);

   n1.next = n2;
   // n2.next = n3;

   // let elements = [n1, n2];
   let llist = new LinkedList();
   llist.head = n1;
   // for (let el of elements) {    
   //    const llist_head = llist.insertNode(llist.head, el);   
   //    llist.head = llist_head;
   // }
   llist_head = llist.deleteNode(llist.head, 1);
   llist.displayData(llist_head);
}

main();