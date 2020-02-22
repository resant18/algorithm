// Write an `Array.prototype.mergeSort` method that merge sorts an array. It
// should take an optional callback that compares two elements, returning -1 if 
// the first element should appear before the second, 0 if they are equal, and 1 
// if the first element should appear after the second. Define and use a helper 
// method, `merge(left, right, comparator)`, to merge the halves. Make sure that 
// `merge` is defined on the window. Do NOT call the built-in 
// `Array.prototype.sort` method in your implementation.
//
// Here's a summary of the merge sort algorithm:
//
// Split the array into left and right halves, then merge sort them recursively
// until a base case is reached. Use a helper method, merge, to combine the
// halves in sorted order, and return the merged array.
Array.prototype.mergeSort = function (func) {
  if (this.length < 2) return this;

  if (!func) func = (left,  right) => {
    return left < right ? -1 : left > right ? 1 : 0;
  };

  const midpoint = Math.floor(this.length / 2);
  const sortedLeft = this.slice(0, midpoint).mergeSort(func);
  const sortedRight = this.slice(midpoint).mergeSort(func);
  return merge(sortedLeft, sortedRight, func);
};

function merge (left, right, comparator) {
  let merged = [];

  while (left.length && right.length) {
    switch(comparator(left[0], right[0])) {
      case -1:
        merged.push(left.shift());
        break;
      case 0:
        merged.push(left.shift());
        break;
      case 1:
        merged.push(right.shift());
        break;
    }
  }

  merged = merged.concat(left, right);
  return merged;
}

// Function style
const mergeSort = arr => {
   if (arr.length < 2) return arr;

   let mid = Math.floor(arr.length / 2);
   let left = mergeSort(arr.slice(0, mid));
   let right = mergeSort(arr.slice(mid));

   return merge(left, right);
};

const merge = (left, right) => {
   let comparator;
   if (!comparator) {
      comparator = (left, right) => {
         return left < right ? -1 : left > right ? 1 : 0;
      };
   }

   let merged = [];
   while (left.length && right.length) {
      switch (comparator(left[0], right[0])) {
         case -1:
            merged.push(left.shift());
            break;
         case 1:
            merged.push(right.shift());
            break;
         case 0:
            merged.push(right.shift());
            break;
      }
   }
   return merged.concat(left, right);
};

console.log(mergeSort([2, 8, 3, 2, 4, 7, 3, 2]));