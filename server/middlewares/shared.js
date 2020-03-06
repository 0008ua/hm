const { ClientError } = require('../errors');
const config = require('../config/');


/*
 * Pass next() if client is authenticated otherwise next(err)
 *
 */
const authentication = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return next(new ClientError({ message: 'notAuthenticated', status: 401 }));
  }
};


/*
 * Pass next() if client is authorized
 * (his role allowed according to permissions)
 * otherwise next(err)
 *
 */
const authorization = (restrictedRole) => {
  return (req, res, next) => {
    const usersRole = req.user._doc.role;
    const permissions = config.get('permissions');
    if (usersRole in permissions) {
      if (permissions[usersRole].indexOf(restrictedRole) >= 0) {
        return next();
      } else {
        return next(new ClientError({ message: 'notAuthorized', status: 401 }));
      }
    } else {
      return next(new ClientError({ message: 'notAuthorized', status: 401 }));
    }
  };
};

module.exports = {
  authentication,
  authorization,
};
