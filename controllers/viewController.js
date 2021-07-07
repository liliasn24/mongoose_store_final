const RESOURCE_PATH = '/product'


const viewController = {
  index(req, res, next){
    res.render('Index', {product: res.locals.data.product})
  },
  show(req, res, next){

  },
  edit(req, res, next){

  },
  redirectHome(req, res, next){
    res.redirect(RESOURCE_PATH)
  },
  redirectShow(req, res, next){

  }
}

module.exports = viewController;
