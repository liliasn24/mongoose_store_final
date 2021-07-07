
require('dotenv').config()
const express = require('express');
const app = express();

const PORT = 3000;
const Product = require('./models/product')

/***************
Database Setup
***************/
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})

mongoose.connection.once('open', () => {
  console.log('connected to mongo')
})

app.use(express.static('public'));

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use((req, res, next) => {
  console.log('I run before all routes ************************')
  next()
})

app.use(express.urlencoded({ extended: true
}))

const methodOverride = require('method-override')
app.use(methodOverride('_method'));
/*******************
Seed Route
*******************/

app.get('/product/seed', (req, res) => {
  Product.create([
    {
    name: 'Alegria Bars',
    description: 'Amaranth based snack',
    img: 'https://i.pinimg.com/originals/0e/4d/7d/0e4d7d2c89687cc4a2d6a22d687b726f.jpg',
    price: 4,
    qty: 10
  },
  {
    name: 'Peanut Bars',
    description: 'Peanut based snack',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwM_g7WAAreV2u2uXREUfg0vJINU5tEE-71w&usqp=CAU',
    price: 3.5,
    qty: 20
  },
  {
    name: 'Cocada Bars',
    description: 'Coconot based snack',
    img: 'https://lh3.googleusercontent.com/proxy/AF0nctXb71qnK6hqflY88UFOvKXn-3a-6WT3gDTU0tedzOobCjfl5_wYfdZcaEUyt4bmS2Thokl00dHJgBgP5NmJab4C2Gll8mICltlyne6TFzRdojR6yR3TKrt7z3cnu5A',
    price: 3,
    qty: 15
  },
  {
    name: 'No bake Bars',
    description: 'Fruit based snack',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDNGwicwBB-znL2HvNWpeW8ovAN5UMLSlx6A&usqp=CAU',
    price: 2.5,
    qty: 15
  },
  {
    name: 'Raspberry Squares',
    description: 'Raspberry based snack',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6iNOYenc7oRauJ4dMHDB18Fgpx8szJwHREg&usqp=CAU',
    price: 2,
    qty: 12
  },
  {
    name: 'Dark Chocolate Mini',
    description: 'Dark Chocolate based snack',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCAo_h4xkS0UPPKhszr9DjBTkBydKNk1GIA&usqp=CAU',
    price: 2.5,
    qty: 20
  },

], (err, data) => {
  res.redirect('/product')
 })
});

/*****************
INDUCES Routes
******************/
/*
Index
*/
app.get('/product', (req, res) => {
 Product.find({}, (err, foundProduct) => {
   if(err){
     res.status(404).send({
       msg: err.message
     })
   } else {
     res.render('Index', {
       product: foundProduct
     })
   }
 })
});

app.get('/product/about', (req, res) =>{
  res.render('About');
})

/*
New
*/
app.get('/product/new', (req, res) => {
  res.render('New');
})

/*
Delete
*/

app.delete('/product/:id', (req, res) => {
  Product.findByIdAndDelete(req.params.id, (err, foundProduct) => {
    if(err){
      res.status(404).send({
        msg: err.message
      })
    } else {
      res.redirect('/product')
    }
  })
})


/*
Update
*/



app.put('/product/:id', (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedProduct) => {
    if(err){
      res.status(404).send({
        msg: err.message
      })
    } else {
      res.render('Show', {
        product: updatedProduct
      })
    }
  })
})

app.get('/product/:id/buy', (req, res) => {
  Product.findByIdAndUpdate(req.params.id, { $inc: {'qty': -1 } }, {new: true}, (err, updatedQuantity) =>{
    if(err){
      res.status(404).send({
        msg: err.message
      })
    } else {
      res.redirect(`/product/${req.params.id}`)
    }
  })
})

/*
Create
*/
app.post('/product', (req, res) => {
  Product.create(req.body, (err, createdProduct) => {
    if(err){
      res.status(404).send({
        msg:err.message
      })
    } else {
      console.log(createdProduct);
      res.redirect('/product')
    }
  })
})
/*
Edit
*/
app.get('/product/:id/edit', (req, res) =>{
  Product.findById(req.params.id, (err, foundProduct)=> {
    if(err){
      res.status(404).send({
        msg: err.message
      })
    }else {
      res.render('Edit', {
        product: foundProduct
      })
    }
  })
})

/*
Show
*/

app.get('/product/:id', (req, res) => {
  Product.findById(req.params.id, (err, foundProduct) => {
    if(err){
      res.status(404).send({
        msg: err.message
      })
    } else {
      res.render('Show', {
        product: foundProduct
      })
    }
  })
})




// Port Listening
app.listen(PORT, () => {
  console.log('Listening on PORT: ', PORT)
})
