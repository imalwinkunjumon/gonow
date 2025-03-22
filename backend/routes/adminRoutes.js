// backend/routes/adminRoutes.js
const express = require('express');
const { cancelTrain } = require('../controllers/adminController');
const router = express.Router();

// Example admin route
router.put('/train/cancel/:trainId', cancelTrain);

module.exports = router;
