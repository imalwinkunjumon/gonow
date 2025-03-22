// backend/routes/bookingRoutes.js
const express = require('express');
const { bookTicket } = require('../controllers/bookingController');
const router = express.Router();

router.post('/', bookTicket);

module.exports = router;
