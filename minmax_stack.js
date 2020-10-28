// Feel free to add new properties and methods to the class.
class MinMaxStack {
   constructor() {
      this.stack = [];
      this.minMax = [];
   }

   // Time: O(1), Space: O(1)
   peek() {
      // Write your code here.
      return this.stack[this.stack.length - 1];
   }

   // Time: O(1), Space: O(1)
   pop() {
      // Write your code here.
      this.minMax.pop();
      return this.stack.pop();
   }

   // Time: O(1), Space: O(1)
   push(number) {
      // Write your code here.
      let lastMinMax = this.minMax[this.minMax.length - 1];
      if (this.stack.length === 0) {
         this.minMax.push({
            min: number,
            max: number,
         });
      } else {
         this.minMax.push({
            min: Math.min(lastMinMax.min, number),
            max: Math.max(lastMinMax.max, number),
         });
      }
      this.stack.push(number);
   }

   // Time: O(1), Space: O(1)
   getMin() {
      // Write your code here.
      return this.minMax[this.minMax.length - 1].min;
   }

   // Time: O(1), Space: O(1)
   getMax() {
      // Write your code here.
      return this.minMax[this.minMax.length - 1].max;
   }

   // Time: O(1), Space: O(1)
   isEmpty() {
      return this.stack.length === 0;
   }

   // Time: O(N), Space: O(1)
   reverse() {
      // use Linked List => StackNode
   }

   print() {
      for (const item of this.stack) {
         console.log(item);
      }
   }
}

let m = new MinMaxStack();
m.push(5);
// console.log(m.getMin());
// console.log(m.getMax());
m.push(4);
m.push(2);
m.push(1);

m.print();

m.reverse();

m.print();

1 -> 2 -> 3 -> 4 -> null

prev = null 
curr = 1
next 2 

next = curr.next;
curr.next = prev

prev = curr;
curr = next;



