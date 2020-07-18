// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

let teste = [2, 3, 2, 5, 8, 2, 3];

function repeatCheck(array) {
  let repeater = 0;
  let counterMax = 0;
  for (i = 0; i < array.length; i += 1) {
    let counter = 0;
    for (j = 0; j < array.length; j += 1) {
      if (array[i] == array[j]) {
        counter += 1;
      }
    }
    if (counter > counterMax) {
      counterMax = counter;
      repeater = array[i];
    }
  }
  return repeater;
}

console.log(repeatCheck(teste));