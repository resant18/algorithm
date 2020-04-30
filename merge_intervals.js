// PathStream coding challenge
// TODO: Optimize to O(n) solution
const solution = (intervals, toInsert) => {
   let stack = [];

   intervals.push(toInsert);   

   // sort the interval in increasing start time
   intervals.sort((i1, i2) => i1[0] - i2[0]);
   
   stack.push(intervals[0]);

   for (let i = 1; i < intervals.length; i++) {
      let intervalItem = stack[0];      
      let end = intervalItem[1];

      if (end < intervals[i][0]) {
         stack.push(intervals[i]);
      } else if (end < intervals[i][1]) {
         intervalItem[1] = intervals[i][1];
         stack.pop();
         stack.push(intervalItem);
      }
   }

   return stack;
};

console.log(solution([[2, 4], [5, 7], [8, 9]], [1, 2]));
