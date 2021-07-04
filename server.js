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
/*
Update
*/
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
