const ProductModel = require('../models/productModel');
const { DbError, ClientError } = require('../errors');

allItems = () => (req, res, next) => {
  const displayFilter = req.query.display;
  const sort = JSON.parse(req.query.sort);
  const skip = +req.query.skip || 0;
  const limit = +req.query.limit || 12;
  const collection = req.params.collection;

  let query;
  displayFilter === 'true' ?
    query = {
      display: true,
    } :
    query = {
    };

  sortQuery = { $sort: sort };

  switch (collection) {
    case 'products':
      ProductModel.aggregate([
        {
          $facet: {
            totalLength: [
              { $match: query },
              { $count: 'totalProductsLength' },
            ],
            items: [
              { $match: query },
              sortQuery,
              { $skip: skip },
              { $limit: limit },
            ],
          },
        },
        {
          $project: {
            total: { $ifNull: [{ $arrayElemAt: ['$totalLength.totalProductsLength', 0] }, 0] },
            items: 1,
          },
        },
      ])
          .then((result) => {
            return res.status(200).json(result[0]);
          })
          .catch((err) => next(new DbError()));
      break;
    default:
      return next(new ClientError({ message: 'Немає такої колекції: ' + collection, status: 400 }));
  }
};

itemsByParents = () => (req, res, next) => {
  const displayFilter = req.query.display;
  const sort = JSON.parse(req.query.sort);
  const skip = +req.query.skip || 0;
  const limit = +req.query.limit || 12;
  const parents = JSON.parse(req.query.parents);

  const collection = req.params.collection;
  let query;
  displayFilter === 'true' ?
    query = {
      parent: { $in: parents },
      display: true,
    } :
    query = {
      parent: { $in: parents },
    };
  sortQuery = { $sort: sort };

  switch (collection) {
    case 'products':
      ProductModel.aggregate([
        {
          $facet: {
            totalLength: [
              { $match: query },
              { $count: 'totalProductsLength' },
            ],
            items: [
              { $match: query },
              sortQuery,
              { $skip: skip },
              { $limit: limit },
            ],
          },
        },
        {
          $project: {
            total: { $ifNull: [{ $arrayElemAt: ['$totalLength.totalProductsLength', 0] }, 0] },
            items: 1,
          },
        },
      ])
          .then((result) => {
            return res.status(200).json(result[0]);
          })
          .catch((err) => next(new DbError()));
      break;
    default:
      return next(new ClientError({ message: 'Немає такої колекції: ' + collection, status: 400 }));
  }
};

module.exports = {
  allItems,
  itemsByParents,
};
