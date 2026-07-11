const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'nodjs_demo'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// crud operations
// Create a new user
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
  db.query(sql, [name, email], (err, result) => {
    if (err) {
        res.status(500).json({ error: 'Error creating user', error: err });
    }else {
        res.status(201).json({ message: 'User created successfully', userId: result.insertId });
    }
  });
});

// Get all users
app.get('/api/users', (req, res) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error fetching users', error: err });
    } else {
      res.json(results);
    }
  });
});

// Get a user by ID
app.get('/api/users/:id', (req, res) => {
const userId = req.params.id;
const sql = 'SELECT * FROM users WHERE id = ?';

db.query(sql, [userId], (err, results) => {
    if (err) {
        res.status(500).json({ error: 'Error fetching user', error: err });
    } else if (results.length === 0) {
        res.status(404).json({ error: 'User not found' });
    } else {
        res.json(results[0]);
    }
});
});

// Update a user by ID
app.put('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  const { name, email } = req.body;
  const sql = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
  db.query(sql, [name, email, userId], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Error updating user', error: err });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json({ message: 'User updated successfully' });
    }
  });
});

// Delete a user by ID
app.delete('/api/users/:id', (req, res) => {
const userId = req.params.id;
const sql = 'DELETE FROM users WHERE id = ?';
db.query(sql, [userId], (err, result) => {
    if (err) {
        res.status(500).json({ error: 'Error deleting user', error: err });
    } else if (result.affectedRows === 0) {
        res.status(404).json({ error: 'User not found' });
    } else {
        res.json({ message: 'User deleted successfully' });
    }
});
});

// Start the server

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
