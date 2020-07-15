// Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let iteration = 0;

for (let i = 1; i < numbers.length; i++) {
  for (let j = 0; j < i; j++) {
    if (numbers[i] < numbers[j]) {
      let position = numbers[i];
  
      numbers[i] = numbers[j];
      numbers[j] = position;
    }
  }
  console.log(numbers);
  iteration += 1;
}

// for (k = 1; k < numbers.length; k++) {
//   for (j = 0; j < numbers.length - k; j++) {
//     if (numbers[j] > numbers[j + 1]) {
//         aux          = numbers[j];
//         numbers[j]     = numbers[j + 1];
//         numbers[j + 1] = aux;
//     }
//   }
//   console.log(numbers);
//   iteration += 1;
// }

console.log("Número de iterações: " + iteration);