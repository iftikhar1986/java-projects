const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Simple Route for Testing
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



const mysql = require('mysql2');

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',  // Replace with your MySQL host (default is localhost)
  user: 'root',       // Replace with your MySQL username (default is root)
  password: '123@root',  // Replace with your MySQL password
  database: 'client_management'
});

// Connect to the database
db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

// Get all clients
app.get('/clients', (req, res) => {
    db.query('SELECT * FROM clients', (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
  
  // Add a new client
  // Add a new client
app.post('/clients', (req, res) => {
  const { name, email, address, password } = req.body;
  db.query('INSERT INTO clients (name, email, address, password) VALUES (?, ?, ?, ?)', 
  [name, email, address, password], 
  (err, results) => {
    if (err) throw err;
    res.status(201).json({ message: 'Client added', clientId: results.insertId });
  });
});
  
  // Update a client
 // Update a client
app.put('/clients/:id', (req, res) => {
  const { id } = req.params;
  const { name, email, address } = req.body;
  db.query('UPDATE clients SET name = ?, email = ?, address = ? WHERE id = ?', 
  [name, email, address, id], 
  (err, results) => {
    if (err) throw err;
    res.json({ message: 'Client updated' });
  });
});
  
  // Delete a client
  app.delete('/clients/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM clients WHERE id = ?', [id], (err, results) => {
      if (err) throw err;
      res.json({ message: 'Client deleted' });
    });
  });

  // Get all meetings
  app.get('/meetings', (req, res) => {
    db.query('SELECT meetings.*, clients.name AS clientName FROM meetings JOIN clients ON meetings.client_id = clients.id', 
    (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
  
  // Schedule a new meeting
  app.post('/meetings', (req, res) => {
    const { client_id, topic, number_of_people, start_time } = req.body;
    db.query('INSERT INTO meetings (client_id, topic, number_of_people, start_time) VALUES (?, ?, ?, ?)', 
    [client_id, topic, number_of_people, start_time], 
    (err, results) => {
      if (err) throw err;
      res.status(201).json({ message: 'Meeting scheduled', meetingId: results.insertId });
    });
  });
  
  // Update a meeting
  app.put('/meetings/:id', (req, res) => {
    const { id } = req.params;
    const { topic, number_of_people, start_time } = req.body;
    db.query('UPDATE meetings SET topic = ?, number_of_people = ?, start_time = ? WHERE id = ?', 
    [topic, number_of_people, start_time, id], 
    (err, results) => {
      if (err) throw err;
      res.json({ message: 'Meeting updated' });
    });
  });
  
  // Delete a meeting
  app.delete('/meetings/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM meetings WHERE id = ?', [id], (err, results) => {
      if (err) throw err;
      res.json({ message: 'Meeting deleted' });
    });
  });
  