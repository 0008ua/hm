const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;
const config = require('../config');

const ProductSchema = new Schema({
  parents: {
    type: [String],
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
  },
  createdAt: {
    type: Number,
    default: Date.now,
  },
  display: {
    type: Boolean,
    default: true,
  },
});

let ProductModel = mongoose.model('products', ProductSchema);
module.exports = ProductModel;
