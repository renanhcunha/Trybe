// Retorne o maior número inteiro relativo ao lucro total sobre cada produto.

db.products.aggregate([
  {$project: {
    name: 1,
    totalProfit: {
      $ceil: {
        $subtract: [
          "$sale_price",
          {$add: ["$purchase_price", "$taxes"]}
        ]
      }
    }
  }}
])