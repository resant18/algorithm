// Write a `Function.prototype.myBind(context)` method. It should return a copy
// of the original function, where `this` is set to `context`. It should allow 
// arguments to the function to be passed both at bind-time and call-time.
// Note that you are NOT allowed to use ES6 arrow syntax for this problem.
Function.prototype.myBind = function (context, ...bindArgs) {
  const that = this;
  return function (...callArgs) {
    return that.apply(context, bindArgs.concat(callArgs));
  };
};

//Using call
Function.prototype.myBind = function(context, ...bindArgs) {
  const that = this;
  return function(...callArgs) {
    const args = bindArgs.concat(callArgs);
    return that.call(context, ...args);
    //or
    //return that.call(context, ...bindArgs, ...callArgs);
  };
};

Function.prototypr.myBind = function(context) {
  const bindArgs = Array.from(arguments).slice(1);
  let that = this;
  return function() {
    const callArgs = Array.from(arguments);
    return that.apply(context, bindArgs.concat(callArgs));
  };
};