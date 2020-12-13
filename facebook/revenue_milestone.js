/*
Company: Facebook
Topic: Search

Revenue Milestones
We keep track of the revenue Facebook makes every day, and we want to know on what days Facebook hits certain revenue milestones. Given an array of the revenue on each day, and an array of milestones Facebook wants to reach, return an array containing the days on which Facebook reached every milestone.
Signature
int[] getMilestoneDays(int[] revenues, int[] milestones)
Input
revenues is a length-N array representing how much revenue FB made on each day (from day 1 to day N). milestones is a length-K array of total revenue milestones.
Output
Return a length-K array where K_i is the day on which FB first had milestones[i] total revenue. If the milestone is never met, return -1.
Example
revenues = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
milestones = [100, 200, 500]
output = [4, 6, 10]
Explanation
On days 4, 5, and 6, FB has total revenue of $100, $150, and $210 respectively. Day 6 is the first time that FB has >= $200 of total revenue.

*/

// Assuming the revenues is increased and not same as previous one, use this method.
// Time: O(n), Space: O(n)
const getMilestoneDays = (revenues, milestones) => {
   let days = new Array(milestones.length).fill(-1); 
   let idx = {};
   
   // Get the index by milestone (milestone => idx)
   // Milestone will automatically sorted out
   for (let i = 0; i < milestones.length; i++) {
      idx[milestones[i]] = i;
   }

   let i = 0;
   let sum = 0;
   
   Object.keys(idx).forEach(milestone => {
      // Keep sum up until greater/equal to current milestone
      while (i < revenues.length && sum < milestone) {                  
         sum += revenues[i]; // 3100
         i++; //5
      }
      // If the current sum is greater/equal to current milestone, save the index to the days
      if (sum >= milestone) {
         days[idx[milestone]] = i;
      }
   })

   return days;
}

console.log(getMilestoneDays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [100, 200, 500])); // [4, 6, 10]
console.log(getMilestoneDays([100, 200, 300, 400, 500], [300, 800, 1000, 1400])); // [2, 4, 4, 5]
console.log(getMilestoneDays([700, 800, 600, 400, 600, 700], [3100, 2200, 800, 2100, 1000])); // [5, 4, 2, 3, 2]
