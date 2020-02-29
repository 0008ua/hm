const jwt = require('jsonwebtoken');

const createJWT = (prefix, sub, expire, secret) => {
  const date = Math.floor(Date.now() / 1000); // in seconds
  return (
    prefix +
    jwt.sign(
        {
          sub,
          iat: date,
          exp: date + expire,
        },
        secret,
    )
  );
};

module.exports = {
  createJWT,
};
