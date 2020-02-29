const express = require('express');
const router = express.Router();
const passport = require('passport');
const productController = require('../controllers/productController');

router.get('/get-products', productController.getProducts);

router.get('/load-product/:_id', productController.loadProduct);

router.get('/load-products', productController.loadProducts);

router.get('/add-product', productController.addProduct);

router.post('/upsert-product', productController.upsertProduct);

router.get('/get-sku-list/:_id', productController.getSkuList);

router.get('/get-products-by-parent', productController.getProductsByParent);


module.exports = router;
