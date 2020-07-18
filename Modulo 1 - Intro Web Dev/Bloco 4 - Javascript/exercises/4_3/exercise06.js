// 6- Faça um programa que diz se um número definido numa variável é primo ou não.

// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.

// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

let n = 17;
let counter = 0; // contador de divisores
let prime = []; // array pra guardar os números

for (i = 1; i <= n; i += 1) { // um for pra testar os numeros até n
  counter = 0;
  for (j = 1; j <= i; j += 1) { // outro for pra analisar o resto dos divisores
    if (i % j == 0) { // se o resto for zero, ou seja, se for divisor ele adiciona +1 no contador
      counter += 1;
    }
  }
  if (counter == 2) { // quando termina o laço do primeiro for, se o numero que testamos possui apenas 2 divisores (ele mesmo e 1), demos um push dele no array
    prime.push(i);
  }
}
if (prime.length == 0) {
  console.log("Não há números primos no intervalo");
} else {
  console.log("Os números primos são: " + prime); // imprime o array com os numeros primos
}
