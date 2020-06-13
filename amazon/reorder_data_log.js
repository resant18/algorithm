/*
937. Reorder Data in Log Files
Level: Easy
Company: Amazon

You have an array of logs.  Each log is a space delimited string of words.

For each log, the first word in each log is an alphanumeric identifier.  Then, either:

Each word after the identifier will consist only of lowercase letters, or;
Each word after the identifier will consist only of digits.
We will call these two varieties of logs letter-logs and digit-logs.  It is guaranteed that each log has at least one word after its identifier.

Reorder the logs so that all of the letter-logs come before any digit-log.  The letter-logs are ordered lexicographically ignoring identifier, with the identifier used in case of ties.  The digit-logs should be put in their original order.

Return the final order of the logs.

 

Example 1:

Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
 

Constraints:

0 <= logs.length <= 100
3 <= logs[i].length <= 100
logs[i] is guaranteed to have an identifier, and a word after the identifier.

Pseudocode:
1. Create a function to get the body (characters after the first space ' ')
2. Create a function to check if the body is letter-log or digit-log
3. Create comparison function to compare 2 consequent bodies, if it's same then compare the identifier (first part of string)
4. Iterate the logs and separate it into letter-log and digit-log.
   - If it's letter-log, push it to letter-log array 
   - If it's digit-log, push it to digit-log array
5. Sort the letter-log and concat it with digit-log

*/

let reorderLogFiles = (logs) => {
   const body = str => str.slice(str.indexOf(' ') + 1);
   const isNum = str => /\d/.test(str);

   const compare = (a, b) => {
      let compareBodies = body(a).localeCompare(body(b));      
      if (compareBodies === 0) return a.localeCompare(b); // if bodies are the same, compare the identifier too
      return compareBodies;
   }

   let letterLogs = [];
   let digitLogs = [];
   for (const log of logs) {
      if (isNum(body(log))) {
         digitLogs.push(log);
      }
      else {
         letterLogs.push(log)
      }
   }

   return [...letterLogs.sort(compare), ...digitLogs];
}

console.log(reorderLogFiles(["dig1 8 1 5 1", "let1 art can", "dig2 3 6", "let2 own kit dig", "let3 art zero"]));

