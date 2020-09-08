const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}


getRepos('https://api.github.com/users/tryber/repos').then(coisa => console.log(coisa));

describe('Testing if repository "sd-01-week4-5-project-todo-list" exists', () => {
  it('When user is found', async () => {
    const url = 'https://api.github.com/users/tryber/repos';
    const reposList = await getRepos(url);
    const repos1 = 'sd-01-week4-5-project-todo-list';
    expect(reposList.some(repos => repos === repos1)).toBe(true);
 
  });
  // it('When user is not found', async () => {
  //   try {
  //     await getUserName(1);
  //   } catch(error) {
  //     expect(error).toEqual({ error: 'User with ' + 1 + ' not found.' });
  //   };
  // });
});