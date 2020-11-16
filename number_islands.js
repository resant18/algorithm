/*
Leetcode 200. Number of Islands
Level: Medium


Given an m x n 2d grid map of '1's (land) and '0's (water), 
return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands 
horizontally or vertically. 
You may assume all four edges of the grid are all surrounded by water.

Example 1:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1


Example 2:
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.
*/


// Time: O(R X C), Space: O(R x C)
var dfs = function (grid, r, c) {
   let rowLength = grid.length;
   let colLength = grid[0].length;

   if (grid[r][c] === "X" || grid[r][c] === "0") return;

   grid[r][c] = "X";

   if (r + 1 < rowLength) dfs(grid, r + 1, c);
   if (c + 1 < colLength) dfs(grid, r, c + 1);
   if (r - 1 >= 0) dfs(grid, r - 1, c);
   if (c - 1 >= 0) dfs(grid, r, c - 1);
};

var numIslands = function (grid) {
   let islandCount = 0;

   for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[0].length; c++) {
         let cell = grid[r][c];
         if (cell === "1") {
            islandCount++;
            dfs(grid, r, c);
         }
      }
   }
   return islandCount;
};
