const express = require('express');
const router = express.Router();
const sharedController = require('../controllers/sharedController');
const { authentication, authorization } = require('../middlewares/');

router.post(
    '/upload-picture',
    authentication,
    authorization('manager'),
    sharedController.uploadPicture,
);

module.exports = router;
