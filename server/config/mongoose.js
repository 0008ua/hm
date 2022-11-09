const mongoose = require('mongoose');
const config = require('./');
const log = require('../config/winston')(module);

const options = {
  autoIndex: process.env.NODE_ENV !== 'production', // Mongoose-specific option. Set to false to disable automatic index creation for all models associated with this connection.
  wtimeoutMS: 2500,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const url = config.get('DB_URL');

mongoose
  .connect(url, options)
  .then(() => log.verbose('Connected to db'))
  .catch((err) => log.error('Mongoose Error ' + err));

// mongoose.connection.on('error', function(err) {
//   console.log('on error', err);
// });
// mongoose.connection.on('close', () => { console.log('-> lost connection'); });
// mongoose.connection.once('open', function() {
//   console.log("Connection to db established.");
// });

module.exports = mongoose;
