const express = require('express')
const { User } = require('./models')

const app = express()

const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  User.findAll()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(e => {
      console.log(e.message)
      res.status(500).json({ message: "Algo deu errado!" })
    })
})

app.listen(port, () => console.log(`Aplicação rodando na porta ${port}!`))