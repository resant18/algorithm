function getTotalTime(arr) {
   let maxArr1 = [];
   let maxArr2 = [];
   let totalTime = 0;

   for (let el of arr) {
      let max1 = max1[0] || -Infinity;
      let max2 = max2[0] || -Infinity;
      if (el > max1 && el > max2) {
         if (maxArr1.length === 0) continue;
         let num1 = maxArr1.shift();
         let num2 = maxArr2.shift()
         maxArr1.unshift(num2);
         maxArr2.unshift(num1);
         maxArr1.unshift(el);
      }
      else if (el > max2 && el < max1) {
         if (maxArr2.length === 0) continue;         
         let num2 = maxArr2.shift();
         maxArr1.unshift(num2);
         maxArr2.unshift(num1);
         maxArr1.unshift(el);
      } else {
         
      }


   }

   return totalTime;
}
