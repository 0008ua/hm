const express = require('express');
const router = express.Router();
const catalogController = require('../controllers/catalogController');

router.get('/get-prefix/:_id', catalogController.getPrefix);

router.get('/check-category-exists/:_id', catalogController.checkCategoryExists);

router.get('/get-children/:_id', catalogController.getChildren);

router.get('/get-all-parents-incl-current-category', catalogController.getAllParentsInclCurrentCategory);

router.get('/get-all-siblings-of-current-category', catalogController.getAllSiblingsOfCurrentCategory);

module.exports = router;


