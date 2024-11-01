const express = require('express');
const { saveIPData } = require('../controllers/ipController');
const router = express.Router();

router.post('/save-ip-data', saveIPData);

module.exports = router;
