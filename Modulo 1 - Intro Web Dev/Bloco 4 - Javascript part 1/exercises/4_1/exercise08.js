// Escreva um programa que defina três números em variáveis no seu começo
// e retorne true se uma das três for par. Caso contrário, ele retorna false.
// Bonus: use somente um if.

let num1 = 2;
let num2 = 3;
let num3 = 5;

isEven = false;

if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
  isEven = true;
}

console.log(isEven)