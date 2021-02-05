const express = require('express');
const app = express();

const recipes = require('./data');

app.get('/', (req, res) => {
  res.send(recipes);
});

app.delete('/recipes/:id', (req, res) => {
  const id = req.params.id;
  const index = recipes.findIndex(recipe => recipe.id === parseInt(id));
  if (index === -1) {
    throw new Error('recipe not found');
  }
  const deleteRecipe = recipes.splice(index, 1);
  res.send(deleteRecipe);
});

app.use(function (err, _req, res, _next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000);