const ProductModel = require('../models/productModel');
const { DbError, ClientError } = require('../errors/');

getProducts = (req, res, next) => {
  const filter = JSON.parse(req.query.filter);

  ProductModel.find(filter)
      .then(
          (products) => {
            console.log('products', products);
            res.status(200).json(products);
          },
      )
      .catch(
          (err) => {
            next(new ClientError(err));
          },
      );
};

loadProduct = (req, res, next) => {
  const _id = req.params._id;

  ProductModel.findById(_id)
      .then(
          (product) => {
            console.log('product', product);
            res.status(200).json(product);
          },
      )
      .catch(
          (err) => {
            console.log('err', new ClientError(err));
            next(new ClientError(err));
          },
      );
};

loadProducts = (req, res, next) => {

};

addProduct = (req, res, next) => {

};

upsertProduct = (req, res, next) => {
  const product = req.body;
  console.log('product', product);
  ProductModel.findOneAndUpdate(
      { _id: product._id },
      { $set: product },
      {
        upsert: true, // Create a document if one isn't found.
        setDefaultsOnInsert: true, // if this and upsert are true,
        // mongoose will apply the defaults specified in the model's schema if a new document is created.
        useFindAndModify: false,
      // new: true, // Return the document after updates are applied
      },
  )
      .then((result) => res.status(200).send())
      .catch((err) => next(new DbError(err)));
};

getSkuList = (req, res, next) => {
  const _id = req.params._id;
  ProductModel.find({ parent: _id }, { _id: 1 })
      .sort({ _id: 1 })
      .then((result) => res.status(200).json(result))
      .catch((err) => next(new DbError()));
};

getProductsByParent = (req, res, next) => {
  const parent = req.query.parent;
  const displayFilter = req.query.display;
  const collection = req.query.collection;
  const sort = +req.query.sort || -1;
  const skip = +req.query.skip || 0;
  const limit = +req.query.limit || 12;

  let query;
  displayFilter === 'true' ?
    query = { parent: parent, display: true } : query = { parent: parent };

  switch (collection) {
    case 'products':
      ProductModel.aggregate([
        {
          $facet: {
            totalLength: [
              { $match: query },
              { $count: 'totalProductsLength' },
            ],
            products: [
              { $match: query },
              { $sort: { updatedAt: sort } },
              { $skip: skip },
              { $limit: limit },
            ],
          },
        },
        {
          $project: {
            total: {
              $arrayElemAt: ['$totalLength', 0],
            },
            products: 1,
          },
        },
      ])
          .then((result) => res.status(200).json(result))
          .catch((err) => next(new DbError()));
      break;
    default:
      return next(new ClientError({message: 'Немає такої колекції ' + collection}));
  }
};

module.exports = {
  getProducts,
  loadProduct,
  loadProducts,
  addProduct,
  upsertProduct,
  getSkuList,
  getProductsByParent,
};
