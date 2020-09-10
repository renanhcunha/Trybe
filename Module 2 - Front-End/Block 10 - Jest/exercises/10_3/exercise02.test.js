let randomNumber = () => Math.floor(Math.random() * 101);

test('Testing randomNumber implementation once', () => {
  randomNumber = jest.fn((a, b) => a + b)
    .mockImplementationOnce((a, b) => a / b);
  
  expect(randomNumber(4, 2)).toBe(2);
  expect(randomNumber(4, 2)).toBe(6);
})