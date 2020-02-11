const CatalogModel = require('../models/catalogModel');
const { DbError } = require('../errors');

getPrefix = (req, res, next) => {
  const _id = req.params._id;
  CatalogModel.findOne({ _id }, { prefix: 1, _id: 0 })
      .then((result) => res.status(200).json(result))
      .catch((err) => next(new DbError()));
};

module.exports = {
  getPrefix,
};
