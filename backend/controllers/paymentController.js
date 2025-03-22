// backend/controllers/paymentController.js
const db = require('../config/db');

const processPayment = (req, res) => {
  const { booking_id, amount } = req.body;
  // Dummy payment processing logic
  const sql = 'INSERT INTO payments (booking_id, amount, payment_status) VALUES (?, ?, ?)';
  db.query(sql, [booking_id, amount, 'success'], (error, result) => {
    if (error) return res.status(500).json({ error: error.message });
    res.json({ message: 'Payment processed successfully', paymentId: result.insertId });
  });
};

module.exports = { processPayment };
