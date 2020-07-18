// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let teste = [2, -4, 6, 7, 10, 0, -3];

function small(array) {
  let smaller = teste[0];
  let index = 0;
  for (i = 0; i < array.length; i += 1) {
    if (array[i] < smaller) {
      smaller = array[i];
      index = i;
    }
  }
  return index
}

console.log(small(teste));