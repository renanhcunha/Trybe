// Calcule qual o valor total em estoque de cada produto, considerando o preço de venda e a quantidade;

db.products.aggregate([
  {$project: {
    name: 1,
    totalValueInStock: {$multiply: ["$sale_price", "$quantity"]}
  }}
])