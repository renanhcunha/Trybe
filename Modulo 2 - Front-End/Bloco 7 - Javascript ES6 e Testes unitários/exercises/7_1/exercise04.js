// Crie uma função que receba uma frase e retorne qual a maior palavra.

let longestWord = (string) => {
  const splitArray = string.split(' ');
  let longest = '';
  for (let index in splitArray) {
    if (splitArray[index].length > longest.length) {
      longest = splitArray[index];
    }
  }
  console.log(longest);
}

longestWord('Antônio foi no banheiro e não sabemos o que aconteceu');