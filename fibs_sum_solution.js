// Write a function, `fibsSum(n)`, that finds the sum of the first n
// fibonacci numbers recursively. Assume n > 0.
// Note that for this problem, the fibonacci sequence starts with [1, 1]. 

// Time: O(2^n)
//       4
//     /   \
//   2      2
//  / \    / \
// 1   1  1   1
function fibsSum(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibsSum(n - 1) + fibsSum(n - 2) + 1;
}

console.log(fibsSum(3));

