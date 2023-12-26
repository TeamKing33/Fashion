const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
  session({
    secret: 'your_secret_key',
    resave: true,
    saveUninitialized: true,
  })
);

const conn = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"projectking"
});

conn.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + conn.threadId);
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Content-Type', 'application/json');
  next();
});

app.post('/', (req, res) => {
  const { name, password } = req.body;

  const checkUserQuery = `SELECT * FROM employees WHERE name = '${name}'`;

  conn.query(checkUserQuery, (err, result) => {
    if (err) {
      res.json({ success: false, message: 'Database error' });
      return;
    }

    if (result.length > 0) {
      const user = result[0];

      if (password === user.password) {
        req.session.id = user.id;
        req.session.employees = true;

        res.json({ success: true, message: 'Data is Correct' });
      } else {
        res.json({ success: false, message: 'Wrong Password' });
      }
    } else {
      res.json({ success: false, message: 'User Not Registered' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
