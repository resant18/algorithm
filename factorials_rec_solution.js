// Write a recursive function, `factorialsRec(num)`, that returns the first
// `num` factorial numbers. Note that the 1st factorial number is 0!, which 
// equals 1. The 2nd factorial is 1!, the 3rd factorial is 2!, etc.

// Runtime: O(n)
// Linear Recursive (Single Recursive Call)
// Result: [0, 1, 2, 6, 24, ...]
function factorialsRec(num) {
  if (num === 1) return [1];

  const facts = factorialsRec(num - 1);
  facts.push(facts[facts.length - 1] * (num - 1));
  return facts;
}

// The normal factorial, counting from 1!, instead of 0!
// Result: 1 -> 1, 2 -> 2, 3 -> 6, 4 -> 24
function factorial(num) {
  if (num === 1) return 1;

  return num * factorial(num - 1);
}
