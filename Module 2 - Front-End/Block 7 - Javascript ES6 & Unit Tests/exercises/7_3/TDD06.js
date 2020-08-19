const assert = require('assert');

const removeVowels = (word) => {
  const characters = word.split('');
  let results = '';
  let counter = 0;

  for (let i = 0; i < characters.length; i += 1) {
    if (
      characters[i] === 'a' ||
      characters[i] === 'o' ||
      characters[i] === 'i' ||
      characters[i] === 'e' ||
      characters[i] === 'u'
    ) {
      counter++;
      results += counter;
    } else {
      results += characters[i];
    }
  }
  return results;
};

const parameter = 'Dayane';
const result = 'D1y2n3';

assert.deepStrictEqual(removeVowels(parameter), result);