// Selecione quatro clientes com as suas respectivas transações recebidas;

db.clients.aggregate([
  {$lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "to",
      as: "transactions"
  }},
  {$limit: 4}
])