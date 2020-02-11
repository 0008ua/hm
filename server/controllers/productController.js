const ProductModel = require('../models/productModel');
const { DbError, ClientError } = require('../errors/');

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
  ProductModel.find({ parents: { $in: [_id] } }, { _id: 1 })
      .sort({ _id: 1 })
      .then((result) => res.status(200).json(result))
      .catch((err) => next(new DbError()));
};

module.exports = {
  loadProduct,
  loadProducts,
  addProduct,
  upsertProduct,
  getSkuList,
};
