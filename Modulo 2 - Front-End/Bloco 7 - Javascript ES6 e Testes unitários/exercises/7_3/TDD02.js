const assert = require('assert');
// escreva a função wordLengths aqui

let wordLengths = (array) => {
  let newArray = [];
  for (let index in array) {
    newArray.push(array[index].length);
  }
  return newArray;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);