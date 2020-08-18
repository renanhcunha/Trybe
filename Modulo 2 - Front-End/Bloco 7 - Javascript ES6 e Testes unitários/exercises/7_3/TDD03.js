const assert = require('assert');
// escreva a função addAllnumbers aqui

let addAllnumbers = (array) => {
  let sum = 0;
  for (let index in array) {
    sum += array[index];
  }
  return sum;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);