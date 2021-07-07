const express = require('express');
const router = express.Router();
const viewController = require('./viewController');
const dataController = require('./dataController');

/*
Index
*/
router.get('/', dataController.index, viewController.index)

module.exports = router;
