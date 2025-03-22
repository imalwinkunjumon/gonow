// backend/controllers/bookingController.js
const db = require('../config/db');

const bookTicket = (req, res) => {
  const { user_id, train_id, seat_number, seat_class } = req.body;
  const sql = 'INSERT INTO bookings (user_id, train_id, seat_number, seat_class) VALUES (?, ?, ?, ?)';
  db.query(sql, [user_id, train_id, seat_number, seat_class], (error, result) => {
    if (error) return res.status(500).json({ error: error.message });
    res.status(201).json({ message: 'Ticket booked successfully', bookingId: result.insertId });
  });
};

// Additional endpoints like cancelBooking, getBookingHistory can be added here

module.exports = { bookTicket };
