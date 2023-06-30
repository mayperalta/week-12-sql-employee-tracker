const express = require('express');
const mysql = require('mysql2');
const selectOptions = require ('./lib/selectOptions');

const PORT = process.env.PORT || 3001;
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

// start application then proceed to user inputs on terminal
// function init() {
//   selectOptions();
// }


// Default response for any other request (Not Found)
// app.use((req, res) => {
//   res.status(404).end();
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port http://localhost:${PORT}`);
// });

module.exports = db;