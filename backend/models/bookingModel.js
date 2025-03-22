// backend/models/bookingModel.js
const db = require('../config/db');

const createBooking = (bookingData, callback) => {
  const { user_id, train_id, seat_number, seat_class } = bookingData;
  const sql = 'INSERT INTO bookings (user_id, train_id, seat_number, seat_class) VALUES (?, ?, ?, ?)';
  db.query(sql, [user_id, train_id, seat_number, seat_class], callback);
};

module.exports = { createBooking };
