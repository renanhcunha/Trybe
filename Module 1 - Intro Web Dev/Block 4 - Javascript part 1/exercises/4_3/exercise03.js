// Agora inverta o lado do triângulo. 

let n = 5;
let string = "";

for (row = 0; row < n; row += 1) {
  string = "";
  for (column = 0; column < n; column += 1){
    if (column < n - 1 - row) {
      string += "  ";
    } else {
      string += "* ";
    }
  }
console.log(string);
}