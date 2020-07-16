// Depois, faça uma pirâmide com n asteriscos de base:

let n = 5;
let string = "";

for (row = 0; row <= (n - 1) / 2; row += 1) {
  string = "";
  for (column = 0; column < n; column += 1){
    if ((column + row < (n - 1) / 2) || (column - row > (n - 1) / 2)) {
      string += "  ";
    } else {
      string += "* ";
    }
  }
console.log(string);
}