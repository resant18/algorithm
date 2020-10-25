// AlgoExpert: Product Sum
// Level: Easy

// Write a function that takes in a special array and resturn its product sum.
// Input: [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
// Output: 5 + 2 + 2 * (7 - 1) * 3 * 2 * (6 + 3 * (-13 + 8) + 4) = 12


// This two functions are wrong because the multiplication does not multiply with previous multipliers.
// Eg: [[[[[7]]]]]) => it should be 1 * 2 * 3 * 4 * 5 * 7, but this function calculate 5 * 7
// function productSum(array) {
   // Write your code here.
   // if (!array.length) return 0;
   // let sum = 0;
   // const recCalculateSum = (array, sum, level = 1) => {
   //    for (const el of array) {
   //       if (Array.isArray(el)) sum = recCalculateSum(el, sum, level + 1);
   //       else sum += el * level;
   //    }
   //    return sum;
   // };
   // sum = recCalculateSum(array, sum);
   // return sum;
// }



// function productSum(array, multiplier = 1) {
//    if (!array.length) return 0;
//    let sum = 0;

//    for (const el of array) {
//       if (Array.isArray(el)) sum += productSum(el, multiplier + 1);
//       else sum += el * multiplier;
//    }
//    return sum;
// }


// This is the right answer
// Input => Output
// [] => 0
// [1] => 1 * 1 = 1
// [1, 2] => 1 * (1 + 2)
// [1, [2, [4]]] => 1 * 1 + 2 * (3 * 4)
function productSum(array, multiplier = 1) {
   if (!array.length) return 0;
   let sum = 0;

   for (const el of array) {
      if (Array.isArray(el)) sum += productSum(el, multiplier + 1);
      else sum += el;
   }
   return sum * multiplier;
}

console.log(productSum([[[[[5]]]]])); // 1 * 2 * 3 * 4 * 5 * 5
