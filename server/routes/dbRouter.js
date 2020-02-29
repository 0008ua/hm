const express = require('express');
const router = express.Router();
const dbController = require('../controllers/dbController');

router.get('/all-items/:collection', dbController.allItems());

router.get('/items-by-parents/:collection', dbController.itemsByParents());

module.exports = router;
