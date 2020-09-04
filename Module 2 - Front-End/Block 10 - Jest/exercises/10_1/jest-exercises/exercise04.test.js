function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

describe('função myFizzBuzz(num)', () => {
  it('Testa se a chamada myFizzBuzz(15) retorna "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })
  it('Testa se a chamada myFizzBuzz(9) retorna "fizz"', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  })
  it('Testa se a chamada myFizzBuzz(10) retorna "buzz"', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  })
  it('Testa se a chamada myFizzBuzz(7) retorna 7', () => {
    expect(myFizzBuzz(7)).toBe(7);
  })
  it('Testa se a chamada myFizzBuzz("string qualquer") retorna false', () => {
    expect(myFizzBuzz("string qualquer")).toBe(false);
  })
})