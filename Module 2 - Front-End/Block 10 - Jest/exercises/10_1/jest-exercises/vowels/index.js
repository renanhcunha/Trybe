// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let counter = 0;
  const stringLower = str.toLowerCase();
  const vowelsChar = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < stringLower.length; i += 1) {
    if (vowelsChar.includes(stringLower[i])) counter += 1;
  }
  return counter;
}
// console.log(vowels('Trici'));

module.exports = vowels;
