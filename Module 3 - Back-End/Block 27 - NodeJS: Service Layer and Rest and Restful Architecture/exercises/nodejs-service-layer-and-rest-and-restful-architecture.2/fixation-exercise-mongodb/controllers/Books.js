const Books = require('../services/Books')

const getAll = async (req, res) => {
  const books = await Books.getAll();

  if (req.query.author_id) {
    const id = parseInt(req.query.author_id)
    const booksByAuthor = await Books.getBooksByAuthor(id)

    if (!booksByAuthor) return res.status(404).json({ message: 'not found!' })

    return res.status(200).json(booksByAuthor)
  }

  res.status(200).json(books)
}

const getBooksById = async (req, res) => {
  const id = req.params.id
  const booksById = await Books.getBooksById(id)

  if (!booksById) return res.status(404).json({ message: 'Not found!' })

  return res.status(200).json(booksById)
}

const create = async (req, res) => {
  const { title, author_id } = req.body;

  const isBookValid = await Books.create(title, author_id);

  if (!isBookValid) return res.status(400).json({ message: 'Dados inválidos!' })

  await Books.create(title, author_id);

  return res.status(201).json({ message: 'Livro criado com sucesso!'})
}

module.exports = {
  getAll,
  getBooksById,
  create
}