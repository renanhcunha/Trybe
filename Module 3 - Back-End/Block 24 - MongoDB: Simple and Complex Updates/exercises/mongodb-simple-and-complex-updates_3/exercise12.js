// Busque os filmes em que o módulo 5 do campo budget seja 0 e que o array category tenha tamanho 2 .

db.movies.find(
  {
    category: {$size: 2},
    budget: {$mod: [5, 0]}
  }
)