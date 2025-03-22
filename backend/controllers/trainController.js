// backend/controllers/trainController.js
const db = require('../config/db');

// Create a new train
const createTrain = (req, res) => {
  const { train_name, train_number, source, destination, departure_time, arrival_time, seat_capacity, tatkal_capacity } = req.body;
  const sql = 'INSERT INTO trains (train_name, train_number, source, destination, departure_time, arrival_time, seat_capacity, tatkal_capacity) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(sql, [train_name, train_number, source, destination, departure_time, arrival_time, seat_capacity, tatkal_capacity || 0], (error, result) => {
    if (error) return res.status(500).json({ error: error.message });
    res.status(201).json({ message: 'Train created successfully', trainId: result.insertId });
  });
};

// Fetch all trains
const getTrains = (req, res) => {
  const sql = 'SELECT * FROM trains';
  db.query(sql, (error, results) => {
    if (error) return res.status(500).json({ error: error.message });
    res.json(results);
  });
};

module.exports = { createTrain, getTrains };
