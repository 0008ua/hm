const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;
const config = require('../config');

const ProductSchema = new Schema({
  _id: {
    type: String,
    require: true,
  },
  parent: {
    type: String,
    require: true,
  },
  picture: {
    type: String,
    default: config.get('defaults.productPicture'),
  },
  name: {
    type: String,
  },
  views: {
    type: Number,
    default: 0,
    require: true,
  },
  description: {
    type: String,
    default: 'Product picture',
    require: true,
  },
  createdAt: {
    type: Number,
    default: Date.now,
    require: true,
  },
  display: {
    type: Boolean,
    default: true,
    require: true,
  },
});

let ProductModel = mongoose.model('products', ProductSchema);
module.exports = ProductModel;
