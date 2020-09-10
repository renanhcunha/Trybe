const stringFuncs = require('./exercise04');

test('Mocking upperCase to receive a string and return its lower case', () => {
  const mockUpperCase = jest.spyOn(stringFuncs, "upperCase")
    .mockImplementation(string => string.toLowerCase());
  
  expect(mockUpperCase('COISA')).toBe('coisa');
})

test('Returning upperCase to its original implementation', () => {
  stringFuncs.upperCase.mockRestore();
  
  expect(stringFuncs.upperCase('coisa')).toBe('COISA');
})