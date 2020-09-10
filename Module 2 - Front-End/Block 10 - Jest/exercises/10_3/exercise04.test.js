const stringFuncs = require('./exercise04');
jest.mock('./exercise04');

test('Mocking upperCase to receive a string and return its lower case', () => {
  stringFuncs.upperCase.mockImplementation(string => string.toLowerCase());
  
  expect(stringFuncs.upperCase('COISA')).toBe('coisa');
})

test('Mocking firstLetter to receive a string and return its last letter', () => {
  stringFuncs.firstLetter.mockImplementation(string => string[string.length - 1]);
  
  expect(stringFuncs.firstLetter('coisa')).toBe('a');
})

test('Mocking concat to receive 3 strings and return its concatenation', () => {
  stringFuncs.concat.mockImplementation((string1, string2, string3) => string1 + string2 + string3);
  
  expect(stringFuncs.concat('coisa1', 'coisa2', 'coisa3')).toBe('coisa1coisa2coisa3');
})