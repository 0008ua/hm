const { setCSRFCookie, setFrontendAuthCookie } = require('./cookie');
const { authentication, authorization, sendFeedbackMessage } = require('./shared');

module.exports = {
  setCSRFCookie,
  setFrontendAuthCookie,
  authentication,
  authorization,
  sendFeedbackMessage,
};
