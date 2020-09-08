function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado

describe('Função que recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array', () => {
  it('Testa se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna [1, 2, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Testa se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  // it('Testa se o array passado por parâmetro não sofreu alterações', () => {
  //   let array = [1, 2, 3, 4];
  //   myRemoveWithoutCopy(array, 3);

  //   expect(array).toEqual([1, 2, 3, 4]);
  // });
  it('Testa se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});