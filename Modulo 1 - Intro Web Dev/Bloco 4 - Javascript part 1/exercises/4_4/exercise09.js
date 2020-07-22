// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let teste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function largerChar(array) {
  let larger = "";
  for (i = 0; i < array.length; i += 1) {
    if (array[i].length > larger.length) {
      larger = array[i];
    }
  }
  return larger;
}

console.log(largerChar(teste));