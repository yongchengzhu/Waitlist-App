const express = require('express');
const mysql   = require('mysql');
const app     = express();

// Connect to local MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123',
  database: 'waitlist_db'
});

connection.connect((error) => {
  if (error) throw error;
  console.log('Connected to waitlist_db...');
})

// Route Handlers
app.get('/', (req, res) => {
  const q = 'SELECT COUNT(*) AS total_users FROM users';

  connection.query(q, (error, results) => {
    if (error) res.send(error);

    res.send(`We have ${results[0].total_users} users in our database!`)
  });
});

// Listen to port
app.listen(8080, () => {
  console.log('Listening to port 8080...');
});
