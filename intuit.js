function findDestination(destinations, start, memo) {
   if (memo[start]) return memo[start];
   if (destinations[start] === undefined) return [start];

   let result = new Set();
   for (let key in destinations[start]) {
      let subresult;
      subresult = findDestination(destinations, destinations[start][key], memo);

      for (let el of subresult) {
         result.add(el);
      }
   }
   memo[start] = result;
   return memo[start];
}

function findStartAndEndLocations(pairs) {
   // Your code here. Output to console.
   let startLocation = {};
   let endLocation = {};
   for (let i = 0; i < pairs.length; i++) {
      let start = pairs[i][0];
      let end = pairs[i][1];

      if (startLocation[start]) {
         startLocation[start].push(end);
      } else {
         startLocation[start] = [end];
      }

      if (endLocation[end]) {
         endLocation[end].push(start);
      } else {
         endLocation[end] = [start];
      }
   }

   let memo = [];
   for (let start in startLocation) {
      if (!endLocation[start]) {
         let destinations = findDestination(startLocation, start, memo);
         let strDestinations = [...destinations].sort().join(" ");
         console.log(start + ": " + strDestinations);
      }
   }
}

let arr = [
   ["A", "B"],
   ["A", "C"],
   ["B", "K"],
   ["C", "K"],
   ["E", "L"],
   ["F", "G"],
   ["J", "M"],
   ["E", "F"],
   ["G", "H"],
   ["G", "I"],
];
findStartAndEndLocations(arr);
