const mergeSort = (arr) => {
   if (arr.length < 2) return arr;

   let mid = Math.floor(arr.length / 2);
   let left = mergeSort(arr.slice(0, mid));
   let right = mergeSort(arr.slice(mid));   

   return merge(left, right);
}

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
   return (merged.concat(left, right));
}

console.log(mergeSort([2, 8, 3, 2, 4, 7, 3, 2]));