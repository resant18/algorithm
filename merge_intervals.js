// PathStream coding challenge
// TODO: Optimize to O(n) solution
const solution = (intervals, toInsert) => {
   // because there might be more than 2 intervals that overlap,
   // we need stack to find the last interval that overlap
   // Eg: [[1, 3], [2, 4], [4, 7]] => [1, 7]
   let stack = [];

   // insert the new element to intervals input
   intervals.push(toInsert);   

   // sort the interval in increasing start time
   intervals.sort((I1, I2) => I1[0] - I2[0]);
   
   stack.push(intervals[0]);

   for (let i = 1; i < intervals.length; i++) {
      // peek first, not pop
      let top = stack[stack.length - 1];
      let end1 = top[1];
      let start2 = intervals[i][0];
      let end2 = intervals[i][1];

      // if there is overlap when it compare to the second element's start
      if (end1 < start2) {
         stack.push(intervals[i]);
      }
      // if there is overlap when it compare with the second element's end
      else if (end1 < end2) {
         top[1] = end2; //replace the end1 with end2
         stack.pop();
         stack.push(top);
      }
   }

   return stack;
};

console.log(solution([[2, 4], [5, 7], [6, 8], [9, 9], [9, 10]], [1, 2])); // [[1, 4], [5, 8], [9, 10]]
