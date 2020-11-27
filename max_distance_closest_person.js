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
  0 1 2 0
if left = 0, return 2 + 1


  1 0 0 0 => 3
  0 1 2 3
if right = 0, return 3

  1 0 0 1 => 1
  0 1 2 0 
if left != 0 and right != 0, ceil(2 / 2) = 1


  0 1 0 0 0 1 0 => 2
  0 0 1 2 3 0 1
if left = 0, return 0 + 1
(3 + 1) / 2 = 2
if the end, return 1
max = 2


1 0 0 0 1 0 1 1 0 0 0
0 1 2 3 0 1 0 0 1 2 3
if left != 0, return (3 + 1) / 2 = 2
(1 + 1) / 2 = 1
ceil(0 + 1) / 2 = 1
if right = 0, return 3
max = 3
      
      
0 0 0 1 => 3    
      |
distance= 0 1 2

**/

var maxDistToClosest = function(seats) {
   let maxDistance = 0;
   let distance = 0;
   let left;
   let right = seats[0];

   for (let i = 1; i < seats.length; i++) {
      if (seats[i] === 0) distance++;
      if (seats[i] === 1 || i === seats.length - 1) {
         left = right;
         right = seats[i];

         if (left === 1 && right === 1) {
            maxDistance = Math.max(maxDistance, Math.ceil(distance / 2))
         }
         else if (left === 0 && right === 1) {
            maxDistance = Math.max(maxDistance, distance + 1);
         }
         else if (right === 0) {
            maxDistance = Math.max(maxDistance, distance);
         }
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