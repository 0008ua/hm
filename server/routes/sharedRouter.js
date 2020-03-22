const express = require('express');
const router = express.Router();
const sharedController = require('../controllers/sharedController');
const { authentication, authorization, recaptcha, sendFeedbackMessage } = require('../middlewares/');

router.post(
    '/upload-picture',
    authentication,
    authorization('manager'),
    sharedController.uploadPicture,
);

router.post('/send-feedback-message',
    recaptcha,
    sendFeedbackMessage,
);

module.exports = router;
