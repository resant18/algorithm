/* 
LeetCode 733. Flood Fill
Level: Easy
Company: Amazon, Palantir Technologies, Google, Microsoft

An image is represented by a 2-D array of integers, 
each integer representing the pixel value of the image (from 0 to 65535).

Given a coordinate (sr, sc) representing the starting pixel 
(row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.

To perform a "flood fill", consider the starting pixel, 
plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, 
plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on. 
Replace the color of all of the aforementioned pixels with the newColor.

At the end, return the modified image.

Example 1:
Input: 
image = [[1,1,1],[1,1,0],[1,0,1]]
sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: 
From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected 
by a path of the same color as the starting pixel are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected
to the starting pixel.
Note:

The length of image and image[0] will be in the range [1, 50].
The given starting pixel will satisfy 0 <= sr < image.length and 0 <= sc < image[0].length.
The value of each color in image[i][j] and newColor will be an integer in [0, 65535].
*/

/*
sr, sc, pixwl value
[1, 1  1]
[1, 1, 0]
[1, 0, 1]

2, 2, 2
2, 2, 0
2, 0, 1


Pseudocode
findConnectedPixels
if the current Cell's is not the same as startingColor return

If the currentCell's color is the same as startingColor, change the current cell color with startingColor
if the row is greater than 0, call findConnectedPixels(row - 1, col, startingColor, image)
if the row is less than row length, call findConnectedPixels(row + 1, col, startingColor, image)
if the col is greater than 0, call findConnectedPixels(row, col - 1, startingColor, image)
if the col is less than row length, call findConnectedPixels(row, col + 1, startingColor, image)


Main function
Initialize the startingColor to the pixel with the defined sr, sc => startingColor

Iterate the row, from the starting row to the last row
    Iterate the column, from the starting column to the last column
        If the current cell color is the same as startingColor
            Change the current cell's color
            Call the findConnectedPixels with the argument of row, col, startingColor, image

Return image


0, 0, 0
0, 1, 0

*/
// Time: O(n), Space: O(n)
var findConnectedPixels = function(r, c, startingColor, newColor, image) {
    // if the current Cell's is not the same as startingColor return
    if (r < 0 || r >= image.length || c < 0 || c >= image[0].length) return;
    if (image[r][c] !== startingColor) return;

    // If the currentCell's color is the same as startingColor, change the current cell color with startingColor
    if (image[r][c] === startingColor) image[r][c] = newColor;
    
    // if the row is greater than 0, 
    //call findConnectedPixels(row - 1, col, startingColor, image)
    if (r - 1 >= 0) findConnectedPixels (r - 1, c, startingColor, newColor, image);
    // if the row is less than row length, 
    // call findConnectedPixels(row + 1, col, startingColor, image)
    if (r + 1 < image.length) findConnectedPixels (r + 1, c, startingColor, newColor, image);
    // if the col is greater than 0, 
    // call findConnectedPixels(row, col - 1, startingColor, image)
    if (c - 1 >= 0) findConnectedPixels (r, c - 1, startingColor, newColor, image);
    // if the col is less than row length, 
    // call findConnectedPixels(row, col + 1, startingColor, image)
    if (c + 1 < image[0].length) findConnectedPixels (r, c + 1, startingColor, newColor, image);
}

var floodFill = function(image, sr, sc, newColor) {
    // Initialize the startingColor to the pixel with the defined sr, sc => startingColor
    let startingColor = image[sr][sc];
    
    // if the new color is the same as the old color, do nothing
    if (image[sr][sc] === newColor) return image;
    
    findConnectedPixels(sr, sc, startingColor, newColor, image);    
    
    // Return image
    return image;
};