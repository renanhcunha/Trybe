const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// Compare dois objetos (JSON) para verificar se são idênticos ou não

describe('Verificação de igualdade dos objetos obj1, obj2 e obj3', () => {
  it('Testando igualdade de obj1 e obj2', () => {
    expect(obj1).toEqual(obj2);
  });
  it('Testando igualdade de obj1 e obj3', () => {
    expect(obj1).not.toEqual(obj3);
  });
  it('Testando igualdade de obj2 e obj3', () => {
    expect(obj2).not.toEqual(obj3);
  });
})