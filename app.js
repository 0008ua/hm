const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compression = require('compression');
const passport = require('./server/config/passport');
const csrf = require('csurf');

const { router } = require('./server/routes');
const userRouter = require('./server/routes/userRouter');
const productRouter = require('./server/routes/productRouter');
const catalogRouter = require('./server/routes/catalogRouter');
const sharedRouter = require('./server/routes/sharedRouter');
const dbRouter = require('./server/routes/dbRouter');

const { errorHandler, ClientError } = require('./server/errors');
const { sessionCookie } = require('./server/config/session');
const { setCSRFCookie, setFrontendAuthCookie } = require('./server/middlewares');

const app = express();

app.use(compression());

// view engine setup
app.set('views', path.join(__dirname, 'server', 'views'));
app.set('view engine', 'pug');

// app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// check cookie, add req.csrfToken(),
app.use(csrf({ cookie: true }));
app.use(setCSRFCookie);

// add session cookie
app.use(sessionCookie);

//  passport deserialize user
app.use(passport.initialize());
app.use(passport.session());

// depending on passport identification return user or null to front
app.use(setFrontendAuthCookie);

// serve files with all cookies
// app.use(express.static(path.join(__dirname, 'public')));

// app.use( (req, res, next) =>
//   next(new ClientError({
//     message: 'Wrong api',
//     status: '404',
//   })),
// );

/**
 * all apis, api/404 will be handled here
 */
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/catalog', catalogRouter);
app.use('/api/shared', sharedRouter);
app.use('/api/db', dbRouter);
app.use('/api', (req, res, next) =>
  next(new ClientError({
    message: 'Wrong api',
    status: '404',
  })),
);
/**
 * all not-apis, 404 will be handled at frontend
 */
app.use('/', router);

app.use('*', function(req, res) {
  res.redirect('/');
});

// error handler
app.use(errorHandler);

module.exports = app;
