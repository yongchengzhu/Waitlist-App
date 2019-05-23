const bodyParser = require('body-parser');
const express    = require('express');
const mysql      = require('mysql');
const app        = express();

// Express middlewares
app.use(bodyParser.urlencoded({ extended: true }));

// Express settings
app.set('view engine', 'ejs');

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

    res.render('homepage', {total_users: results[0].total_users});
  });
});

app.post('/register', (req, res) => {
  const q    = 'INSERT INTO users SET ?';
  const user = {
    email: req.body.email
  };

  connection.query(q, user, (error, results) => {
    if (error) res.send(error);

    res.redirect('/');
  })
});

// Listen to port
app.listen(8080, () => {
  console.log('Listening to port 8080...');
});
