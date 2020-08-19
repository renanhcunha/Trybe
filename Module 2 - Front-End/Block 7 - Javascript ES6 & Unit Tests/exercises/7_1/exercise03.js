// Crie uma função que receba um número e retorne seu fatorial.

const factorial = (number) => {
  let fact = 1;
  for (let i = number; i >= 1; i -= 1) {
    fact *= i;
  }
  return fact;
}

console.log(factorial(3));