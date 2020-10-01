const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'route',
  password: 'password',
  database: 'fwitter_db',
});

module.exports = connection;
