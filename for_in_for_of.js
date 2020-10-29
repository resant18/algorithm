// Object
let obj = {0: [1, 2], 1: [3, 4], 2: [5, 6]};

// This is error: obj is not iterable
// for (const d of obj) {
//    console.log(d);
// }

for (const d in obj) {
   console.log(d); // 0, 1, 2
}

// Array
let arr = ['a', 'b', 'c'];

for (const el in arr) {
   console.log(el); //0, 1, 2
}

for (const el of arr) {
   console.log(el); //a, b, c
}
