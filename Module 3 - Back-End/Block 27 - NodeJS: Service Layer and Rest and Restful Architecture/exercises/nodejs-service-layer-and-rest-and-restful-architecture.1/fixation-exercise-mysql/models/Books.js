const connection = require('./connection');

const serialize = (book) => {
  return {
    id: book.id,
    title: book.title,
    authorId: book.author_id
  }
}

const isValid = (title, id) => {
  if (!title || title === '' || title.length < 3) return false;
  if (!id || id === '') return false;

  return true;
}

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books;'
  );

  return books.map(serialize);
}

const getBooksByAuthor = async (id) => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books WHERE author_id=?',
    [id]
  )
  
  if (books.length === 0) return null;

  return books.map(serialize);
}

const getBooksById = async (id) => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books WHERE id=?',
    [id]
  )
  
  if (books.length === 0) return null;

  return books.map(serialize);
}

const create = async (title, id) => {
  connection.execute(
    'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
    [title, id]
  )
}

module.exports = {
  getAll,
  getBooksByAuthor,
  getBooksById,
  isValid,
  create
}