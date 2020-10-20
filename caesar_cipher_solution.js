// Back in the good old days, you used to be able to write a darn near
// uncrackable code by simply taking each letter of a message and incrementing 
// it by a fixed number, so "abc" by 2 would look like "cde", wrapping around 
// back to "a" when you pass "z".
//
// Write a function, `caesarCipher(str, shift)` that will take a message and an
// increment amount and outputs the encoded message. Assume lowercase and no 
// punctuation. Preserve spaces.
//
// The English alphabet, in order, is 'abcdefghijklmnopqrstuvwxyz'
//
// Examples: 
// caesarCipher(“abc”, 2) => “cde”
// caesarCipher(“xyz”, 1) => “yza"
function caesarCipher(str, shift) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let encoded = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      encoded += ' ';
      continue;
    }

    const offset = (alphabet.indexOf(str[i]) + shift) % 26;
    encoded += alphabet[offset];
  }

  return encoded;
}




function rotationalCipher(input, rotationFactor) {
  // Write your code here
  let char_a = "a".charCodeAt(0);
  let char_z = char_a + 25;
  let char_A = "A".charCodeAt(0);
  let char_Z = char_A + 25;

  let cipher = "";

  cipher = input
      .split("")
      .map((ch) => {
        let charCode = ch.charCodeAt(0);
        let rotatedCode = charCode + rotationFactor;
        let cipheredCode;

        if (parseInt(ch) >= 0 && parseInt(ch) <= 9) {
            return ((parseInt(ch) + rotationFactor) % 10).toString();
        } else if (charCode >= char_a && charCode <= char_z) {
            cipheredCode = rotatedCode > char_z ? ((rotatedCode - char_a) % 26) + char_a : rotatedCode;
            return String.fromCharCode(cipheredCode);
        } else if (charCode >= char_A && charCode <= char_Z) {
            cipheredCode = rotatedCode > char_Z ? ((rotatedCode - char_A) % 26) + char_A : rotatedCode;
            return String.fromCharCode(cipheredCode);
        } else if (parseInt(ch) >= 0 && parseInt(ch) <= 9) {
            return ((parseInt(ch) + rotationFactor) % 10).toString();
        } else {
            return ch;
        }
      })
      .join("");
  
  return cipher;
}

console.log(rotationalCipher("abcdZXYzxy-999.@", 200)); //stuvRPQrpq-999.@
// abcdZXYzxy-999.@