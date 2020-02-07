// Write a `Function.prototype.myCurry(numArgs)` method that collects arguments
// until the number of arguments collected is equal to the original `numArgs` 
// value and then invokes the curried function.
Function.prototype.myCurry = function (numArgs) {
  let nums = [];
  let fcn = this;
  return function _myCurry (el) {
    nums.push(el);
    if (nums.length < numArgs) {
      return _myCurry;
    } else {
      return fcn(...nums);
    }
  };
};

let f1 = sumThree.myCurry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30
console.log(f1);

// Other solution, if the argument passed all together:
Function.prototype.myCurry = function(numArgs) {
  let arr = [];
  const that = this;

  return function curry(...num) {    
    if (num.length === numArgs)
    //   return that.apply(null, arr);
      return that(...num);
    else 
      return curry;
  };
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(sumThree.myCurry(3)(4, 20, 6)); // == 30