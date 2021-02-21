const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'model_example'
})

module.exports = connection;