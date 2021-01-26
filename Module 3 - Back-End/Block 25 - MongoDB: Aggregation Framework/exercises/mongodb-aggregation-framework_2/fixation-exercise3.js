// Retorne o menor número inteiro relativo ao preço de venda de cada produto;

db.products.aggregate([
  {$project: {
    name: 1,
    salePriceFloor: {$floor: "$sale_price"}
  }}
])