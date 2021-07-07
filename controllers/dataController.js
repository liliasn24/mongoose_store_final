const Product = require('../models/product')

const dataController = {
  index(req, res, next) {
    Product.find({}, (err, foundProduct) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      }else {
        res.locals.data.product = foundProduct
        next()
      }
    })
  },
  show(req, res, next) {

  },
  create(req, res, next) {

  },
  destroy(req, res, next) {
    Product.findByIdAndDelete(req.params.id, (err, deletedProduct) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      }else {
        res.locals.data.product = deletedProduct;
        next()
      }
    })
  },
  update(req, res, next) {

  }
}

module.exports = dataController;
