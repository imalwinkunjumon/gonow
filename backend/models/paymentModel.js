// backend/models/paymentModel.js
const db = require('../config/db');

const createPayment = (paymentData, callback) => {
  const { booking_id, amount, payment_status } = paymentData;
  const sql = 'INSERT INTO payments (booking_id, amount, payment_status) VALUES (?, ?, ?)';
  db.query(sql, [booking_id, amount, payment_status], callback);
};

module.exports = { createPayment };
