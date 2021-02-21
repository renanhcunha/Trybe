const connection = require('./connection');
const { ObjectId } = require('mongodb')

const serialize = (book) => {
  return {
    id: book._id,
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
  return connection()
    .then(db => db.collection('books').find().toArray())
    .then(books => books.map(serialize));
}

const getBooksByAuthor = async (id) => {
  const booksByAuthor = await connection()
    .then(db => db.collection('books').find({ author_id: id }).toArray());
  
  if (booksByAuthor.length === 0  ) return null;

  return booksByAuthor.map(serialize);
}

const getBooksById = async (id) => {
  const booksById = await connection()
    .then(db => db.collection('books').findOne(ObjectId(id)));
  
  if (!booksById) return null;

  return booksById;
}

const create = async (title, id) => {
  return connection().then(db => db.collection('books').insertOne({ title, author_id: id}))
}

module.exports = {
  getAll,
  getBooksByAuthor,
  getBooksById,
  isValid,
  create
}