const { ClientError, ServerError } = require('../errors/');
const cloudinary = require('../config/cloudinary');
const formidable = require('formidable');

uploadPicture = (req, res, next) => {
  const form = new formidable.IncomingForm({ maxFileSize: 26215000 });
  form.parse(req, function(err, fields, files) {
    if (err) {
      return next(new ClientError({ message: 'Помилка завантаження зображення - form parse' }));
    }

    const { filePrefix } = fields;
    const eager = JSON.parse(fields.eager);

    cloudinary.v2.uploader.upload(
        files.file.path,
        { public_id: filePrefix + Date.now(), eager },
        function(err, result) {
          if (err) {
            return next(new ServerError({ message: 'Помилка завантаження зображення на хмару' }));
          }
          return res.status(200).json(result.public_id);
        });
  });
};

module.exports = {
  uploadPicture,
};
