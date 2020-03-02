// // Write an `Array.prototype.myFlatten()` method which flattens a
// // multi-dimensional array into a one-dimensional array.
// // Example:
// // [["a"], "b", ["c", "d", ["e"]]].myFlatten() => ["a", "b", "c", "d", "e"]
// Array.prototype.myFlatten = function () {
//   let flattened = [];

//   this.forEach((el) => {
//     if (el instanceof Array) {
//       flattened = flattened.concat(el.myFlatten());
//     } else {
//       flattened.push(el);
//     }
//   });

//   return flattened;
// };

// console.log([1, 2, [3]].myFlatten());

function flatten(data) {
   let flattened = [];

    for (el of data) {
      if (el instanceof Array) {
         flattened = flattened.concat(flatten(el));
      } else {
         flattened.push(el);
      }
   }
   return flattened;
}

console.log(flatten([1, [2, [3, 4]]]));