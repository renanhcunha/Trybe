// Retorne os filmes em que o ratings possua tamanho 4 e que seja da category "adventure" ou "family" , mas que não tenha o imdbRating menor que 7.

db.movies.find(
  {$and: [
    {ratings: {$size: 4}},
    {$or: [
      {category: {$all: ["adventure"]}},
      {category: {$all: ["family"]}}
    ]},
    {imdbRating: {$gt: 7}}
  ]
  }
)