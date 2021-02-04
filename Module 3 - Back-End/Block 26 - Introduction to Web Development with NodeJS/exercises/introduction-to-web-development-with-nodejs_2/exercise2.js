async function returnPromise(num1, num2, num3) {
  if(typeof(num1) != 'number' || typeof(num2) != 'number' || typeof(num3) != 'number') {
    Promise.reject('Digite apenas números')
  }
  const result = (num1 + num2) * num3;

  if (result < 50) Promise.reject('Valor muito baixo')

  return result;
}
