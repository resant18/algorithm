function diffBetweenTwoStrings(source, target) {
    // memo[i][j] will be our cached answer to dp(i, j)
    // let memo = new Array(source.length, target.length)
    let memo = new Array(source.length).fill(new Array(target.length));

    // dp(i, j) is the minimum edits to transform
    // string source[i:] into string target[j:].
    function dp(i, j) {
        // If one of the strings is empty, we know the answer already.
        if (i === source.length || j == target.length) {
          return target.length - j;
        }

        // Otherwise, if we don't have a cached answer, then find one.
        else if (memo[i][j] === null) {
          if (source[i] === target[j]) {
            memo[i][j] = dp(i+1, j+1);
          }
          else {
            memo[i][j] = 1 + min(dp(i+1, j), dp(i, j+1), dp(i+1, j+1));
          }
        }

        return memo[i][j];
    }
      
    let ans = [];
    let i = 0;
    let j = 0;
    // We are always considering strings source[i:] and target[j:]
    while (i < source.length && j < target.length) {
      if (source[i] === target[j]) {
        // Write the string with no edits
        ans.push(source[i]);
        i += 1;
        j += 1;
      }
      else {
        // We have to decide whether to subtract source[i],
        // or add target[j].
        if (dp(i+1, j) <= dp(i, j+1)) {
            ans.push('-' + source[i]);
            i += 1;
        }
        else {
            ans.push('+' + target[j]);
            j += 1;
        }
      }
    }

    // If target's length > source's length, add remaining substring in target            
    while (j < target.length) {
        ans.push('+' + target[j]);
        j += 1;
    }

    return ans.join(' ');

}

let source = "ABCDEFG";
let target = "ABDFFGH";
console.log(diffBetweenTwoStrings(source, target));
