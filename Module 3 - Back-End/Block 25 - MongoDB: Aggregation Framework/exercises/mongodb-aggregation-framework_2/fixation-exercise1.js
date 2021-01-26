// Calcule qual o custo total de cada produto, considerando o preço de compra e os impostos.

db.products.aggregate([
  {$project: {
    name: 1,
    totalPrice: {$add: ["$purchase_price", "$taxes"]}
  }}
])