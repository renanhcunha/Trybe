let randomNumber = () => {
  const randomNum = Math.ceil(Math.random() * 100);
  return randomNum;
}

const isDivisible = (number) => (randomNumber() % number) === 0

test('Testing if randomNumber is called', () => {
  randomNumber = jest.fn();
  isDivisible(2);

  expect(randomNumber).toHaveBeenCalled();
})

test('Testing if isDivisible(2) of even randomNumber returns true', () => {
  randomNumber = jest.fn()
    .mockReturnValue(4)

  expect(isDivisible(2)).toBe(true);
})

test('Testing isDivisible() for diferent returns of randomNumber', () => {
  randomNumber = jest.fn()
    .mockReturnValue(4)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(3);

  expect(isDivisible(2)).toBe(true);
  expect(isDivisible(2)).toBe(false);
  expect(isDivisible(2)).toBe(true);
  expect(isDivisible(3)).toBe(false);
})