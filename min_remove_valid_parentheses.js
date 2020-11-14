var minRemoveToMakeValid = function (s) {
   let stack = [];

   // The string has to be splitted so that the characted can be mutated.
   let arr = s.split("");

   for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "(") {
         stack.push(arr[i]);
      } else if (arr[i] === ")") {
         if (stack.length > 0) {
            stack.pop();
         } else {
            arr[i] = "";            
         }
      }
   }

   return stack.length > 0 ? "" : arr.join("");
};

let s = "lee(t(c)o)de)";
console.log(minRemoveToMakeValid(s));