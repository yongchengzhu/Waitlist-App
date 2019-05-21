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

// Generate 500 users using faker library.
let data = [];

for (let i = 0; i < 500; ++i) {
  data.push([faker.internet.email(), faker.date.past()]);
}

// Query to insert 500 users into the database.
const q = 'INSERT INTO users(email, created_at) VALUES ?';

connection.query(q, [data], (error, results, fields) => {
  if (error) throw error;
});

connection.end();