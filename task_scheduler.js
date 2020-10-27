/** 
 * 621. Task Scheduler
Level: Medium
Company: Facebook, Bloomberg, Amazon, Microsoft, Google, Pinterest 
However, there is a non-negative integer n that represents the cooldown period between two same tasks 
(the same letter in the array), that is that there must be at least n units of time between any two same tasks.

Return the least number of units of times that the CPU will take to finish all the given tasks.

Example 1:
Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8

Explanation: 
A -> B -> idle -> A -> B -> idle -> A -> B
There is at least 2 units of time between any two same tasks.

Example 2:
Input: tasks = ["A","A","A","B","B","B"], n = 0
Output: 6
Explanation: On this case any permutation of size 6 would work since n = 0.
["A","A","A","B","B","B"]
["A","B","A","B","A","B"]
["B","B","B","A","A","A"]
...
And so on.

Example 3:
Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
Output: 16
Explanation: 
One possible solution is
A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle -> idle -> A
 
Constraints:

1 <= task.length <= 104
tasks[i] is upper-case English letter.
The integer n is in the range [0, 100].
*/
/*
Sample Input: 
n = 2
tasks = A, A, A, B, B, B

Algorithm: Greedy
1. Find the most frequent task
   - Find the frequency of each task
   - Sort the frequency
   Why: By taking the most frequent task, it could act as a container(limit).
   Arrange it like this to spread the tasks out 
   B _ _
   B _ _
   B    
2. Count the possible slots in between B task (symbolize by - )   
   This slot could be filled with other task or idle. 
   slots = (maxFrequency - 1) * n.
   It minus one here because the slots will be in between the task, not at the very end.
3  Fill up the available slots until frequency list is empty or idleSlot <= 0
   - Get the next most frequent task (sortedFrq.pop()), use this task to fill up the available slot (maxFrequency - 1)
   B A _
   B A _
   B A _

   B A idle
   B A idle
   B A 


Algorithm 2: Math formula: https://medium.com/@swgarciab/task-scheduler-leetcode-problem-a74acadf0e22
*/ 

const leastInterval = (tasks, n) => {
   let frequencies = {};
   for (const task of tasks) {
      frequencies[task] = frequencies[task] + 1 || 1;
   }

   let sortedFrq = Object.values(frequencies)
      .sort((val1, val2) => val1 - val2);
      // .map((key) => ({ [key]: frequencies[key] }));     => use this function if it needs to return the key value pair instead 
   
   let maxFrequency = sortedFrq.pop();
   let idleSlots = (maxFrequency - 1 ) * n;

   while (sortedFrq.length && idleSlots > 0) {
      idleSlots -= Math.min(maxFrequency - 1, sortedFrq.pop());   
   }

   return idleSlots > 0 ? idleSlots + tasks.length : tasks.length;
}

let tasks = ["A", "A", "A", "B", "B", "B"]
let n = 2;
console.log(leastInterval(tasks, n));