const express = require('express');
const router = express.Router();
const passport = require('passport');
const productController = require('../controllers/productController');

router.get('/load-products', productController.loadProducts);

router.get('/add-product', productController.addProduct);

router.get('/upsert-product', productController.upsertProduct);

module.exports.productRouter = router;
