// totalVisitors; 0 48
// maxTimestamp; 1487799425  1487799425
// maxVisitor; -Infinity 20

// let data = [
//    [1487799425, 14, 1],
//    [1487799425, 4, 1], 
//    [1487799425, 2, 1], 
//    [1487800378, 10, 1], 
//    [1487801478, 18, 1], 
//    [1487901013, 1, 1],
//    [1487901211, 7, 1], 
//    [1487901211, 7, 1], -
// ];

function findBusiestPeriod(data) {
   let totalVisitors = 0; // 17
   let maxTimestamp = data[0][0]; // 1487799425
   let maxVisitor = -Infinity; //17

   for (let i = 0; i < data.length; i++) {
      if (data[i][2] === 1) {
         totalVisitors += data[i][1];
      } else if (data[i][2] === 0) {
         totalVisitors -= data[i][1];
      }

      if ((i === data.length - 1 || data[i][0] !== data[i + 1][0]) && totalVisitors > maxVisitor) {
         maxVisitor = totalVisitors;
         maxTimestamp = data[i][0];
      }
   }

   return maxTimestamp;
}

let data = [
   [1487799425, 14, 1],
   [1487799425, 4, 1], 
   [1487799425, 2, 1], 
   [1487800378, 10, 1], 
   [1487801478, 18, 1], 
   [1487901013, 1, 1],
   [1487901211, 7, 1],
   [1487901211, 7, 1]
];

// console.log(data[8][0]);

console.log(findBusiestPeriod(data));