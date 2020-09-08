// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const num = Math.abs(n).toString();
  let revert = '';
  for (let i = (num.length - 1); i >= 0; i -= 1) {
    revert += num[i];
  }
  if (n < 0) revert *= -1;
  return parseInt(revert);
}

module.exports = reverseInt;
