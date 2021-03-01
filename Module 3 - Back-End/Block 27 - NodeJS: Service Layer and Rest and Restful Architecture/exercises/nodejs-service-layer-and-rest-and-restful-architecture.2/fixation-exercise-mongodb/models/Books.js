const connection = require('./connection');
const { ObjectId } = require('mongodb')

const getAll = async () => {
  return connection()
    .then(db => db.collection('books').find().toArray());
}

const getBooksByAuthor = async (id) => {
  const booksByAuthor = await connection()
    .then(db => db.collection('books').find({ author_id: id }).toArray());
  
  return booksByAuthor;
}

const getBooksById = async (id) => {
  const booksById = await connection()
    .then(db => db.collection('books').findOne(ObjectId(id)));
  
  return booksById;
}

const create = async (title, id) => {
  return connection().then(db => db.collection('books').insertOne({ title, author_id: id}))
}

module.exports = {
  getAll,
  getBooksByAuthor,
  getBooksById,
  create
}