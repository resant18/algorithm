function getDifferentNumber(arr) {
  // your code goes here
  // [1, 2, 3, 5] => 0
  
  // sort the array O(n log n)
  // 
  
  // [0, 1, 2, 3] 
  // [0] => 1
  // [1] => 0
  // [123, 5234,123,5,123] => 0
  // [0, 51, 55,222] => 1
  // [0, 1, 4323, 5454, MAX_INT] => 2
  // [0, 1, MAX_INTEGER] => 2
  //        |

  // brute force  
//   let min = 0;

//   while (min >= 0) {
//      if (!arr.include(min)) {
//         return min;
//      }
//      min++;
//   }

  let len = arr.length;
  let temp = 0;
  
  for (let i in arr) {
      temp = arr[i];
      while (temp < len && arr[temp] != temp) {
         let x = temp;
         temp = arr[temp];
         arr[temp] = x;
      }      
  }

  for (let i in arr) {
     if (arr[i] != i) return i;
  }
}

console.log([[1, 2, 3, 5]]);