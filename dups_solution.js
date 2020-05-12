// Write an `Array.prototype.dups` method that will return an object containing
// the indices of all duplicate elements. The keys are the duplicate elements; 
// the values are arrays of their indices in ascending order
//
// Example: 
// [1, 3, 4, 3, 0, 3, 0].dups => { 3: [1, 3, 5], 0: [4, 6] }
Array.prototype.dups = function() {
  const count = {};
  const dups = {};

  this.forEach( (el, idx) => {
    count[el] = count[el] || [];
    count[el].push(idx);
  });

  const keys = Object.keys(count).filter(el => count[el].length > 1);
  keys.forEach( (key) => {
    dups[key] = count[key];
  });

  return dups;
};

// My solution. It shorter, but the complexity is not  better
// Since the lastIndexOf time complexity is O(N)
// so overall it make O(N^2).
// Above solution is a better one
Array.prototype.dups2 = function() {
  let dups = {};

  for (let i = 0; i < this.length; i++) {
    let el = this[i];
    if (dups[el]) {
      dups[el].push(i);
    } else if (this.lastIndexOf(this[i]) !== i) {
      dups[this[i]] = [i];
    }
  }

  return dups;
};

console.log([1, 3, 4, 3, 0, 3, 0].dups2());
