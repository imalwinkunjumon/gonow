// backend/controllers/adminController.js
const db = require('../config/db');

// Example: Cancel a train (soft delete or mark as cancelled)
const cancelTrain = (req, res) => {
  const { trainId } = req.params;
  const sql = 'UPDATE trains SET seat_capacity = 0 WHERE id = ?';
  db.query(sql, [trainId], (error, result) => {
    if (error) return res.status(500).json({ error: error.message });
    res.json({ message: 'Train cancelled successfully' });
  });
};

module.exports = { cancelTrain };
