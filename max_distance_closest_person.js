/*
LeetCode 849. Maximize Distance to Closest Person
Level: Medium
Company: Microsoft, Audible, Amazon

You are given an array representing a row of seats 
where seats[i] = 1 represents a person sitting in the ith seat, 
and seats[i] = 0 represents that the ith seat is empty (0-indexed).

There is at least one empty seat, and at least one person sitting.

Alex wants to sit in the seat such that the distance between him and 
the closest person to him is maximized. 

Return that maximum distance to the closest person.

 

Example 1:

Input: seats = [1,0,0,0,1,0,1]
Output: 2
Explanation: 
If Alex sits in the second open seat (i.e. seats[2]), then the closest person has distance 2.
If Alex sits in any other open seat, the closest person has distance 1.
Thus, the maximum distance to the closest person is 2.

Example 2:

Input: seats = [1,0,0,0]
Output: 3
Explanation: 
If Alex sits in the last seat (i.e. seats[3]), the closest person is 3 seats away.
This is the maximum distance possible, so the answer is 3.

Example 3:

Input: seats = [0,1]
Output: 1
 

Constraints:

2 <= seats.length <= 2 * 104
seats[i] is 0 or 1.
At least one seat is empty.
At least one seat is occupied.
*/

/**
Edge cases:

  0 0 0 1 => 3
  1 2 3 0
if left = 0, return 3


  1 0 0 0 => 3
  0 1 2 3
if right = 0, return 3

  1 0 0 1 => 1
  0 1 2 0 
if left != 0 and right != 0, ceil(2 / 2) = 1


  0 1 0 0 0 1 0 => 2
  1 0 1 2 3 0 1
  | |       | |
  a b       c d
a) left = 0, return 1
b) left = 1 && right = 1, return ceil(3 / 2) = 2
c) right = 0, return 1
max = 2


  1 0 0 0 0 1 0 1 1 0 0 0
  0 1 2 3 4 0 1 0 0 1 2 3
            |   | |     |
            a   b c     d
a) left = 1 && right = 1, return ceil(4 / 2) = 2          
b) left = 1 && right = 1, return ceil(1 / 2) = 1          
c) left = 1 && right = 1, return ceil(0 / 2) = 0
d) left = 1, right = 0, return 3          
max = 3      

**/

var maxDistToClosest = function(seats) {
   let maxDistance = 0;
   let distance = 0;
   let left;
   let right = seats[0];

   for (let i = 0; i < seats.length; i++) {
      // count the empty seats
      if (seats[i] === 0) distance++;
      // define the boundary: if the seat is filled or the last seat in the row
      if (seats[i] === 1 || i === seats.length - 1) {
         left = right;
         right = seats[i];

         // if the empty seats are between left filled seat and right filled seat, divide by 2
         if (left === 1 && right === 1) {
            maxDistance = Math.max(maxDistance, Math.ceil(distance / 2))
         }         
         else {
            maxDistance = Math.max(maxDistance, distance);
         }
         // reset the counter
         distance = 0;
      }
   }
   return maxDistance;
}

console.log(maxDistToClosest([1, 0, 0, 0])); //3
console.log(maxDistToClosest([0, 0, 0, 1])); //3
console.log(maxDistToClosest([1, 0, 0, 1])); //1
console.log(maxDistToClosest([1, 0, 0, 0, 1])); //2
console.log(maxDistToClosest([1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0])); //3



/*
1 0 0 0 1
distance + 1

1 0 0 0 0
distance

0 0 0 0 1




*/

// 1, 0, 0, 0
//    1  2  3
// leftIdx = 0
// rightIdx = 0

const maxDistSeatNumber = (seats) => {
   let maxDistance = 0;      
   let distance = 0;   
   let rightIdx = 0;   
   let leftBoundary = 0;

   for (let i = 0; i < seats.length; i++) {
      if (seats[i] === 0) distance++;
      if (seats[i] === 1 || i === seats.length - 1) {
         leftIdx = rightIdx;          
         rightIdx = i;         

         if (seats[leftIdx] === 1 && seats[rightIdx] === 1) {
            distance = Math.ceil(distance / 2);
         }
         if (distance > maxDistance) {
            maxDistance = distance;
            leftBoundary = leftIdx;
         }
         distance = 0;
      }
   }
   
   return seats[leftBoundary] === 0 ? 0 : leftBoundary + maxDistance;
}

console.log("Testing maxDistSeatNumber");
console.log(maxDistSeatNumber([1, 0, 0, 0])); //3
console.log(maxDistSeatNumber([0, 0, 0, 1])); //0
console.log(maxDistSeatNumber([1, 0, 0, 1])); //1
console.log(maxDistSeatNumber([1, 0, 0, 0, 1])); //2
console.log(maxDistSeatNumber([1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0])); //10