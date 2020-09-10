const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

test('testing uppercase callback', done => {
  const callback = str => {
    expect(str).toBe('CARLOS');
    done();
  }

  uppercase('carlos', callback);
})