// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function palindrome(word) {
  let n = word.length;
  let inverse = "";

  for (i = n - 1; i >= 0; i -= 1) {
    inverse += word[i];
  }
  console.log(inverse);
  if (inverse == word) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("arara"));