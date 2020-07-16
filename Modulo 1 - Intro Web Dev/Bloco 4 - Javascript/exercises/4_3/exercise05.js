// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar

let n = 5;
let string = "";

for (row = 0; row <= (n - 1) / 2; row += 1) { // A linha só vai até (n-1)/2
  string = "";
  for (column = 0; column < n; column += 1){
    // Lado esquerdo da pirâmide: Se a soma (coluna + linha) for igual a (n-1)/2 ou 
    // Lado direito da pirâmide: se a subtração (coluna - linha) for igual a (n-1)/2 ou 
    // Base da pirâmide: se a linha for igual a n
    // colocamos "*"
    if ((column + row == (n - 1) / 2) || (column - row == (n - 1) / 2) 
    || (row == (n - 1) / 2)) {
      string += "* ";
    // No resto, colocamos espaço " "
    } else {
      string += "  ";
    }
  }
console.log(string);
}