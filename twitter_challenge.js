// Edge cases:
// "two-years" => valid input
// "three?" => three is valid, ? is not
// "S3"  => not valid
// "?" => valid
// ".", ",", "?", "!"

const PATTERN = "^[a-zA-Z-.,?!]+$";
function isValid(word, pattern) {
   const regex = RegExp(pattern);
   return regex.test(word);
}

// function howMany(sentence) {
//    // Write your code here
//    let countWords = sentence.split(" ").reduce((count, word) => {
//       if (isValid(word, PATTERN)) count += 1;
//       return count;
//    }, 0);

//    return countWords;
// }

function _isValidChar(char) {
   let charCode = char.charCodeAt(0);

   return (
      (charCode >= "a".charCodeAt(0) && charCode <= "z".charCodeAt(0)) ||
      (charCode >= "A".charCodeAt(0) && charCode <= "Z".charCodeAt(0)) ||
      char === "-" || char === "." || char === "," || char === "?" || char === "!"
   );
}

function howManyPrimitive(sentence) {
   let delimiter = " ";
   let countWords = 0;
   let flag = true;

   for (let i = 0; i < sentence.length; i++) {
      let char = sentence[i];
      let nextChar = sentence[i + 1] || "";

      if (_isValidChar(char) || char === delimiter) {
         flag = flag && true;
      } else {
         flag = flag && false;
      }

      if (i === sentence.length - 1 || (char === delimiter && nextChar !== delimiter)) {
         if (flag) countWords++;
         flag = true;
      }
   }

   return countWords;
}

let s0 = "How can we solve 23 problems in 1 day?"
// let s = "he is a good programmer, he won 865 competitions, but sometimes he dont. What do you think? All test-cases should pass. Done-done?";
console.log(howManyPrimitive(s0));






// horizontal: h => n => y 
// vertical: v => m => x 
function prison(n, m, h, v) {
   // Write your code here
   let x = Array(m + 1).fill(1);
   let y = Array(n + 1).fill(1);

   

   // y = [1, 1, 1, 1, 0, 1, 1, 1]
   for (let i in h) {
      y[h[i]] = 0;
   }

   console.log(y);

   // x = [1, 1, 0, 1, 1, 1, 1, 1]
   for (let j in v) {
      x[v[j]] = 0;
   }

   console.log(x);

   // maxHeight
   let maxHeight = 0;
   let startHeight;
   for (let i = 0; i < y.length; i++) {
      if (y[i] === 1) startHeight = 0;
      else {
         startHeight++;
         maxHeight = Math.max(maxHeight, startHeight);
      }
   }

   console.log(maxHeight);

   // maxWidth
   let maxWidth = 0;
   let startWidth;
   for (let j = 0; j < x.length; j++) {
      if (x[j] === 1) startWidth = j;
      else maxWidth = Math.max(maxWidth, j - startWidth);
   }

   return (maxHeight + 1) * (maxWidth + 1);
}

let n = 6;
let m = 6;
let h = [4];
let v = [2];
// console.log(prison(n, m, h, v));