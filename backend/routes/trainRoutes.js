// backend/routes/trainRoutes.js
const express = require('express');
const { createTrain, getTrains } = require('../controllers/trainController');
const router = express.Router();

router.post('/', createTrain);
router.get('/', getTrains);

module.exports = router;
