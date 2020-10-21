// AlgoExpert Single Cycle Check
// See the image for the question

// 2 => jump 2 elements to the right
// -4 => jump 4 elements to the left
// Check if after jumping, each of elements are visited once and go back to the start, forming SINGLE cycle
// [2, 3, 1, -4, -4, 2]

// It is true if meet this condition:
// - If after jumping, it back to starting point
// - Elements are visited exactly once, means total visits must be equal total elements in array
// - If total visit less than num elements but it'a already back to starting point, should be false

const STARTING_POINT = 0;
const hasSingleCycle = (arr) => {
   let numElementVisited = 0;
   let currentIdx = STARTING_POINT;

   // Jump as many as total elements in the array.
   // Also keeping track the total visits to check if the elements are visited only once (total visits = total elements)
   while (numElementVisited < arr.length) {
      // If before visit all elements, it's already back to starting point, simply return false
      if (numElementVisited > 0 && currentIdx === 0) return false;
      numElementVisited++;
      // get the next index after jumping as many as the element value
      currentIdx = _getNextIdx(arr, currentIdx); 
   }

   // If it back to starting point, return true, otherwise return false
   return currentIdx === STARTING_POINT;
}

const _getNextIdx = (arr, currentIdx) => {
   let jump = arr[currentIdx];
   let nextIdx = (currentIdx + jump) % arr.length;
   return nextIdx >= 0 ? nextIdx : nextIdx + arr.length;
}

console.log(hasSingleCycle([2, 3, 1, -4, -4, 2]));