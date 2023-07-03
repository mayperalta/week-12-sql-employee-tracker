const express = require('express');
const mysql = require('mysql2');
const userOptions = require ('./lib/userOptions')

const PORT = process.env.PORT || 3306;
const app = express();

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database. Server running on port http://localhost:${PORT}`)
);

// handle db errors
db.connect(function(err) {
  if (err) throw err;
 
});


module.exports = db;