function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Verifique se o array passado por parâmetro não sofreu alterações
// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

describe('Função que recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array', () => {
  it('Testa se a chamada myRemove([1, 2, 3, 4], 3) retorna [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Testa se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Testa se o array passado por parâmetro não sofreu alterações', () => {
    let array = [1, 2, 3, 4];
    myRemove(array, 3);

    expect(array).toEqual([1, 2, 3, 4]);
  });
  it('Testa se a chamada myRemove([1, 2, 3, 4], 5) retorna [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});