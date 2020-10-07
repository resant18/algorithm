/*
LeetCode 11. Container With Most Water
Level: Medium
Company: Amazon, Facebook, Adobe, Apple, Walmart Labs, Flipkart

Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). 
n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). 
Find two lines, which, together with the x-axis forms a container, 
such that the container contains the most water.

Notice that you may not slant the container.


Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
In this case, the max area of water (blue section) the container can contain is 49.


Input
Array non negative => it could represent coord
Output: max area of container

 Pseudocode:
 1. Initiate:
     maxArea initialize with 0
     left pointer 
     right pointer
    
 2. Iterate the array with 2 pointers until meet at the same index:
    - Calculate the area with the height of minimum element multiply by the distance between indeices
    - Update the maxArea
    - Checking the element of 2 pointers :
      if the left pointer less than right pointer, move left pointre
      if the right pointer less than right pointer, move right pointre
      if the same, check the next element, move the pointer to whichever element that greater
    

      - return the maxArea

[1,8,6,2,15,4,8,3,7] 
     |        |     |


*/
var maxArea = function (height) {
   let maxArea = 0;
   let left = 0;
   let right = height.length - 1;

   while (left < right) {
      heightL = height[left];
      heightR = height[right];
      width = right - left;

      let area = Math.min(heightL, heightR) * width;
      maxArea = Math.max(maxArea, area);

      if (heightL < heightR) {
         left++;
      } else {
         right--;
      }
   }

   return maxArea;
};
