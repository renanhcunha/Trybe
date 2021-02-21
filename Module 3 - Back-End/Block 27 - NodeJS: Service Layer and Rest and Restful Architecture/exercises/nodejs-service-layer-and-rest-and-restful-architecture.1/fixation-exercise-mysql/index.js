const express = require('express')
const bodyParser = require('body-parser')
const { getAll, getBooksByAuthor, getBooksById, isValid, create } = require('./models/Books')
const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/books', async (req, res) => {
  const books = await getAll();

  if (req.query.author_id) {
    const id = parseInt(req.query.author_id)
    const booksByAuthor = await getBooksByAuthor(id)

    if (!booksByAuthor) return res.status(404).json({ message: 'not found!' })

    return res.status(200).json(booksByAuthor)
  }

  res.status(200).json(books)
})

app.get('/books/:id', async (req, res) => {
  const id = req.params.id
  const booksById = await getBooksById(id)

  if (!booksById) return res.status(404).json({ message: 'not found!' })

  return res.status(200).json(booksById)
})

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  const isIdValid = await getBooksByAuthor(author_id);

  if (isIdValid || !isValid(title, author_id)) return res.status(400).json({ message: 'Dados inválidos!' })

  await create(title, author_id);

  return res.status(201).json({ message: 'Livro criado com sucesso!'})
})

app.listen(port, () => console.log(`Example app listening on port port!`))