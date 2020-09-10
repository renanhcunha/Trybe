const random = require('./exercise03')

test('Mocking randomNumber to receive 3 parameters and return they multiplyed', () => {
  random.randomNumber = jest.fn()
    .mockImplementation((a, b, c) => a * b * c);
  
  expect(random.randomNumber(4, 2, 2)).toBe(16);
})

test('Mocking randomNumber to receive 1 parameter and return its double', () => {
  random.randomNumber.mockRestore();
  random.randomNumber.mockImplementation((a) => 2 * a);

  expect(random.randomNumber(4)).toBe(8);
})