function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// A função sum(a, b) retorna a soma do parâmetro a com o b
// Teste se o retorno de sum(4, 5) é 9
// Teste se o retorno de sum(0, 0) é 0
// Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5)
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

describe('Função que retorna a soma de a e b', () => {
  it('Testa se a soma de 4 e 5 é 9', () => {
    expect(sum(4,5)).toBe(9);
  });
  it('Testa se a soma de 0 e 0 é 0', () => {
    expect(sum(0,0)).toBe(0);
  });
  it('Testa se a função lança um erro quando os parâmetros são 4 e "5"', () => {
    expect(() => sum(4,'5')).toThrow();
  });
  it('Testa se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => sum(4,'5')).toThrow('parameters must be numbers');
  });
});