    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

function containsA() {
  const stringSplit = (acc, word) => acc + word.split('')
  .filter(letter => letter === 'a' || letter === 'A').length;
  return names.reduce(stringSplit, 0);
}

assert.deepEqual(containsA(), 20);