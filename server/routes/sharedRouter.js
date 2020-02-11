const express = require('express');
const router = express.Router();
const sharedController = require('../controllers/sharedController');

router.post('/upload-picture', sharedController.uploadPicture);

module.exports = router;
