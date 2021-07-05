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
    description: 'Amaranth based candy',
    img: 'https://i.pinimg.com/originals/0e/4d/7d/0e4d7d2c89687cc4a2d6a22d687b726f.jpg',
    price: 4,
    qty: 10
  },
  {
    name: 'Palanqueta Bars',
    description: 'Peanut based candy',
    img: 'https://i0.wp.com/i.imgur.com/wEkLO.jpg',
    price: 5,
    qty: 20
  },
  {
    name: 'Cocada Bars',
    description: 'Coconot based candy',
    img: 'https://media.istockphoto.com/photos/mexican-coconut-candy-cocada-picture-id1146535650',
    price: 7,
    qty: 15
  }
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
