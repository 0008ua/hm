const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;
const config = require('../config');

const CatalogSchema = new Schema({
  _id: {
    type: String,
    require: true,
  },
  name_uk: {
    type: String,
    required: true,
  },
  name_en: {
    type: String,
    required: true,
  },
  ancestors: {
    type: [String],
    required: true,
  },
  parent: {
    type: String,
    require: true,
  },
  picture: {
    type: String,
    default: config.get('defaults.userPicture'),
  },
  auth: {
    type: String,
  },
  order: {
    type: Number,
  },
  prefix: {
    type: String,
  },
  seoTitle: {
    type: String,
  },
  seoMeta: {
    type: String,
  },
});

const CatalogModel = mongoose.model('catalogs', CatalogSchema);
module.exports = CatalogModel;
