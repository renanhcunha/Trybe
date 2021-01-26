// Selecione o valor total das transações em cada banco e quantas são;

db.transactions.aggregate([
  {$group: {
    _id: "$bank",
    totalTransactions: {$sum: "$value"},
    count: {$sum: 1}
  }}
])