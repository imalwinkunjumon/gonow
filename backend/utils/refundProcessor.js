// backend/utils/refundProcessor.js
const db = require('../config/db');

const processRefund = (bookingId, refundAmount) => {
  const sql = 'INSERT INTO refunds (booking_id, refund_amount, refund_status) VALUES (?, ?, ?)';
  db.query(sql, [bookingId, refundAmount, 'processed'], (error, result) => {
    if (error) console.error('Refund processing error:', error);
    else console.log('Refund processed for booking:', bookingId);
  });
};

module.exports = processRefund;
