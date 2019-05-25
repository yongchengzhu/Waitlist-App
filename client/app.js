const bodyParser = require('body-parser');
const express    = require('express');
const mysql      = require('mysql');
const keys       = require('./config/keys.js');
const app        = express();

// Express middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Express settings
app.set('view engine', 'ejs');

// Connect to local MySQL
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '123',
//   database: 'waitlist_db'
// });
const connection = mysql.createConnection({
  host: keys.host,
  user: keys.user,
  password: keys.password,
  database: keys.database,
  port: keys.port
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
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}...`);
});
