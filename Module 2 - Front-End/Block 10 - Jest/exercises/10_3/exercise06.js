const fetch = require('node-fetch');

const dogFetch = () => {
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => response.ok ? resolve(json) : reject(new Error));
}

module.exports = { dogFetch };