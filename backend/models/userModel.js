// backend/models/userModel.js
const db = require('../config/db');

const createUser = (userData, callback) => {
  const { name, email, password } = userData;
  const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  db.query(sql, [name, email, password], callback);
};

module.exports = { createUser };
