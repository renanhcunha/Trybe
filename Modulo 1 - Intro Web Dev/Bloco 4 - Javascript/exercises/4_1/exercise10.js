// Escreva um programa que se inicie com dois valores em duas variáveis diferentes: 
// o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de 
// lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso 
// algum dos seus valores de entrada seja menor que zero.

let costValue = -2;
let saleValue = 3;
let tax = 0.2;

if (costValue > 0 && saleValue > 0) {
  let profit = (saleValue - costValue)*(1 - tax)*1000;
  console.log("profit: " + profit)
} else {
console.log("Error: wrong input values!");
}