const { ClientError, ServerError } = require('../errors');
const config = require('../config/');
const { sendMail } = require('../helpers');

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

const sendFeedbackMessage = (req, res, next) => {
  const mailOptions = config.get('mailOptions:questionFromSite');
  const feedback = Object.assign({}, req.body);

  mailOptions.subject = req.isAuthenticated() ?
        mailOptions.subject + ' від користувача [login:] ' + req.user._doc.displayName :
        mailOptions.subject;
  mailOptions.text = `Питання ${feedback.message}. Контакти ${feedback.contacts}. Ім\'я ${feedback.name}`;
  mailOptions.html = `<p><span style="font-weight: bold;">Питання: </span>
          ${feedback.message} </p>
          <p><span style="font-weight: bold">Контакти: </span>
          ${feedback.contacts} </p>
          <p><span style="font-weight: bold">Ім\'я: </span>
          ${feedback.name} </p>`;

  return sendMail(mailOptions)
      .then(() => res.status(200).json('Повідомлення надіслано.'))
      .catch((err) => next(new ServerError({ message: 'Повідомлення не надіслано' })));
};

module.exports = {
  authentication,
  authorization,
  sendFeedbackMessage,
};
