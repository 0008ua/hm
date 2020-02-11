const express = require('express');
const router = express.Router();
const passport = require('passport');
const catalogController = require('../controllers/catalogController');

router.get('/get-prefix/:_id', catalogController.getPrefix);

module.exports = router;


