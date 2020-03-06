const { setCSRFCookie, setFrontendAuthCookie } = require('./cookie');
const { authentication, authorization } = require('./shared');

module.exports = {
  setCSRFCookie,
  setFrontendAuthCookie,
  authentication,
  authorization,
};
