const mysql = require('mysql');

const connection = mysql.createConnection({
  host:     'localhost',
  user:     'root',
  database: 'waitlist_db',
  password: '123'
});

connection.connect((error) => {
  if (error) throw error;

  console.log('Connected');
});

connection.query('SELECT NOW() AS current_datetime', (error, results, fields) => {
  if (error) throw error;

  console.log(results[0].current_datetime);
});

connection.end();