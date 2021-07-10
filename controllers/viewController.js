const RESOURCE_PATH = '/product'


const viewController = {
  index(req, res, next){
    res.render('Index', {product: res.locals.data.product})
  },
  about(req, res, next){
    res.render('About', {product: res.locals.data.product})
  },
  show(req, res, next){
    res.render('Show', {product: res.locals.data.product})
  },
  edit(req, res, next){
    res.render('Edit', { product: res.locals.data.product})
  },
  redirectHome(req, res, next){
    res.redirect(RESOURCE_PATH)
  },
  redirectShow(req, res, next){
    res.redirect(RESOURCE_PATH + `/${req.params.id}`)
  }
}

module.exports = viewController;
