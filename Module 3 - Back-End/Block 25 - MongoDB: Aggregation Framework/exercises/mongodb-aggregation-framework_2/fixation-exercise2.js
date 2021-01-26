// Calcule qual o lucro total de cada produto, considerando o preço de compra, os impostos e seu valor de venda.

db.products.aggregate([
  {$project: {
    name: 1,
    totalProfit: {
      $subtract: [
        "$sale_price",
        {$add: ["$purchase_price", "$taxes"]}
      ]
    }
  }}
])