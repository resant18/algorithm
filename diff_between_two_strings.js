// Pramp
// Solution is still wrong for some cases
function diffBetweenTwoStrings(source, target) {
    let dp = [];
    for (let i = 0; i < source.length + 1; i++) {
      let row = [];
      for (let j = 0; j < target.length + 1; j++) {        
        row.push(j);        
      }
      row[0] = i;
      dp.push(row);
    }
    
    for (let i = 1; i < source.length + 1; i++) {
      for (let j = 1; j < target.length + 1; j++) {        
        if (source[i - 1] === target[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        }
        else {
          dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }

    console.log(dp);
      
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
        if (j > target.length || dp[i+1][j] <= dp[i][j+1]) {
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
