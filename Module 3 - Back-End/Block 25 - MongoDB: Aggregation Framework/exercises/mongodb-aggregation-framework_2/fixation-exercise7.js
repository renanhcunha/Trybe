// Calcule qual será o lucro total de cada produto caso todo o estoque seja vendido.

db.products.aggregate([
  {$project: {
    name: 1,
    totalProfit: {
      $multiply: [
        { $subtract: [
          "$sale_price",
          {$add: ["$purchase_price", "$taxes"]}]
        },
        "$quantity"
      ]
    }
  }}
])