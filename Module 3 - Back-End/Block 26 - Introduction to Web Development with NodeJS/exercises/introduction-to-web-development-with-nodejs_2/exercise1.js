function returnPromise(num1, num2, num3) {
  return new Promise((resolve, reject) => {
    if(typeof(num1) != 'number' || typeof(num2) != 'number' || typeof(num3) != 'number') {
      reject('Digite apenas números')
    }
    const result = (num1 + num2) * num3;

    if (result < 50) reject('Valor muito baixo')

    resolve(result)
  })
  .then(resp => console.log(`O valor resultante é ${resp}`))
  .catch(err => console.log(err));
}

returnPromise(1, 2, 37)
  