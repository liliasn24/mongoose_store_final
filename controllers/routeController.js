const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const viewController = require('./viewController');
const dataController = require('./dataController');

/*
Index
*/
router.get('/', dataController.index, viewController.index)

//about
router.get('/about', dataController.about, viewController.about)

//Delete
router.delete('/:id', dataController.destroy, viewController.redirectHome)

//Update
router.put('/:id', dataController.update, viewController.redirectShow)

//Buy
router.get('/product/:id/buy', dataController.update, viewController.redirectShow)

//Create
router.post('/', dataController.create, viewController.redirectHome)

//Edit
router.get('/:id/edit', dataController.show, viewController.edit)

//show
router.get('/:id', dataController.show, viewController.show)

module.exports = router;
