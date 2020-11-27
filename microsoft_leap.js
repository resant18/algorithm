// Question 1. Check 2 strings is anagram 

// Question 2:
// f(0) = 0
// f(1) = 1
// f(2) = 1
// f(3) = 1 + 1 + 2
// f(4) = 2 + 1 + 1 
//          3-1    3-2   3-3
// f(3) = f(2) + f(1) + f(0) = 
// f(5) = f(5-1) + f(5-2) + f(5-3)


const f = (n) => {
   let tab = [0, 1, 1];

   for (let i = 3; i <= n; i++) {
      tab[i] = tab[i - 1] + tab[i - 2] + tab[i - 3];
   }

   return tab[n];
}

console.log(f(4));