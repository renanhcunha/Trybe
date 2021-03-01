const express = require('express')
const bodyParser = require('body-parser')
const { getAll, getBooksById, create } = require('./controllers/Books')
const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/books', getAll)

app.get('/books/:id', getBooksById)

app.post('/books', create)

app.listen(port, () => console.log(`Example app listening on port port!`))