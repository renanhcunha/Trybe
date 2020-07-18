// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

function wordEnding(word, ending) {
  let lastLetterWord = word.length - 1;
  let lastLetterEnding = ending.length - 1;
  for (i = 0; i <= ending.length; i += 1) {
    if (lastLetterEnding < 0) {
      return true
    }
    else if (word[lastLetterWord] === ending[lastLetterEnding]) {
      lastLetterWord -= 1;
      lastLetterEnding -= 1;
    } else {
      return false;
    }
  }
}
console.log(wordEnding("trybe","be"));