const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(bodyParser.json());

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
  const { name, email, password, number, country } = req.body;

  const checkUserQuery = `SELECT * FROM signup WHERE email = '${email}'`;

  conn.query(checkUserQuery, (err, results) => {
    if (err) {
      res.json({ success: false, message: 'Database error' });
      return;
    }

    if (results.length > 0) {
      res.json({ success: false, message: 'Email already exists' });
    } else if (!email.includes('.com')) {
      res.json({ success: false, message: 'Invalid email' });
    } else {
      const insertUserQuery = `INSERT INTO signup (name, email, password, number, country) VALUES ('${name}', '${email}', '${password}', '${number}', '${country}')`;

      conn.query(insertUserQuery, (err, result) => {
        if (err) {
          res.json({ success: false, message: 'Database error: ' + err });
          return;
        }

        res.json({ success: true, message: 'Data Inserted Successfully' });
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
