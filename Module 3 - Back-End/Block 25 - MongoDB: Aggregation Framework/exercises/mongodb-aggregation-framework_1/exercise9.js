// Exercício 9 : Descubra quais são os 10 clientes que gastaram o maior valor no ano de 2019 .

db.vendas.aggregate([
  {$match: {
    status: {$in: ["ENTREGUE", "EM SEPARACAO"]}
  }},
  {$group: {
    _id: {clienteId: "$clienteId", anoVenda: {$year: "$dataVenda"}},
    valorTotal: {$sum: "$valorTotal"}
  }},
  {$match: {
    "_id.anoVenda": 2019
  }},
  {$sort: {valorTotal: -1}},
  {$limit: 10}
])