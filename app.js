const mysql = require('mysql');
const faker = require('faker');

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

const person = { email: faker.internet.email() }

connection.query('INSERT INTO users SET ?', person, (error, results, fields) => {
  if (error) throw error;

  console.log(results);
});

connection.end();