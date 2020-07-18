// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let teste = [2, 10, 6, 7, 3, 1];
let index = 0;

function bigger(array) {
  let big = 0;
  for (i = 0; i < array.length; i += 1) {
    if (array[i] > big) {
      big = array[i];
      index = i;
    }
  }
  return index;
}

console.log(bigger(teste));