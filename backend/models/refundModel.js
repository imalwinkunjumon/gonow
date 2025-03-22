// backend/models/refundModel.js
const db = require('../config/db');

const createRefund = (refundData, callback) => {
  const { booking_id, refund_amount, refund_status } = refundData;
  const sql = 'INSERT INTO refunds (booking_id, refund_amount, refund_status) VALUES (?, ?, ?)';
  db.query(sql, [booking_id, refund_amount, refund_status], callback);
};

module.exports = { createRefund };