const Books = require('../models/Books')

const serialize = (book) => {
  return {
    id: book._id,
    title: book.title,
    authorId: book.author_id
  }
}

const isValid = (title, id) => {
  if (typeof(title) !== 'string' || typeof(id) !== 'number') return false;
  if (!title || title === '' || title.length < 3) return false;
  if (!id || id === '') return false;

  return true;
}

const getAll = async () => {
  const books = await Books.getAll();

  return books.map(serialize);
}

const getBooksByAuthor = async (id) => {
  const booksByAuthor = await Books.getBooksByAuthor(id);

  if (booksByAuthor.length === 0) return null;

  return booksByAuthor.map(serialize);
}

const getBooksById = async (id) => {
  const booksById = await Books.getBooksById(id);

  if (!booksById) return null;

  return serialize(booksById);
}

const create = async (title, id) => {
  const isIdValid = await getBooksByAuthor(id);

  if (isIdValid || !isValid(title, id)) return null;

  const newBook = await Books.create(title, id);

  return newBook;
}

module.exports = {
  getAll,
  getBooksByAuthor,
  getBooksById,
  create,
}
