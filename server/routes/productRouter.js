const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { authentication, authorization } = require('../middlewares/');


router.get('/get-products', productController.getProducts);

router.get('/get-product/:_id', productController.getProduct);

router.post('/upsert-product',
    authentication,
    authorization('manager'),
    productController.upsertProduct,
);

router.get('/get-sku-list/:_id', productController.getSkuList);

router.get('/get-products-by-parent', productController.getProductsByParent);

router.put('/inc-views/:_id', productController.incViews);

router.delete('/delete/:_id',
    authentication,
    authorization('manager'),
    productController.deleteProduct,
);


module.exports = router;
