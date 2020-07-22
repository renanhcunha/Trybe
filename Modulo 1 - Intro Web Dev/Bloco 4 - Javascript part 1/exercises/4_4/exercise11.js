// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function summation(num) {
  let sum = 0;
  for (i = 1; i <= num; i += 1) {
    sum += i;
  }
  return sum;
}

console.log(summation(5));