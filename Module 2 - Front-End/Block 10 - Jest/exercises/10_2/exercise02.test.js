const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      }

      return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

describe('Testing getUserName function', () => {
  it('When user is found', () => {
    return getUserName(4).then(userName => {
      expect(userName).toBe('Mark');
    });
  });
  it('When user is not found', () => {
    return getUserName(1).catch(error => {
      expect(error).toEqual({ error: 'User with ' + 1 + ' not found.' });
    });
  });
});

