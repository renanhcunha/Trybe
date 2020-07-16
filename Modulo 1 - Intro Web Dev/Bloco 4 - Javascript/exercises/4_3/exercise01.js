// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. 

let n = 5;
let string = ""; // cria uma string vazia

for (j = 0; j < n; j += 1) { // adiciona "*" na string n vezes
  string += "* ";
}

for (i = 0; i < n; i += 1){ // imprime a string n vezes
  console.log(string);
}
