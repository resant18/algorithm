const twoSum = (arr, target) => {
   arr.sort( (num1, num2) => num1 - num2);

   let min = 0;
   let max = arr.length - 1;
   let result = [];
   
   while (min < max) {      
      if (min != 0 && arr[min] === arr[min-1]) min++;
               
      if (arr[min] + arr[max] < target) {
         min++;
      } 
      else if (arr[min] + arr[max] > target) {
         max--;
      } 
      else {
         result.push([arr[min], arr[max]]);
         min++;
         max--;
      }   
   }

   return result;
}

console.log(twoSum([7, 7, 0, 3, -1, 3], 10));



