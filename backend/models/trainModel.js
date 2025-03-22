// backend/models/trainModel.js
const db = require('../config/db');

const getAllTrains = (callback) => {
  const sql = 'SELECT * FROM trains';
  db.query(sql, callback);
};

module.exports = { getAllTrains };
