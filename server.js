const express = require('express');
const app = express();
const PORT = 3000;
const product = require('./models/product')

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
  res.render('Index', {
    product: product })
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
  res.send(req.body);
})
/*
Edit
*/
/*
Show
*/

app.get('/product/:id', (req, res) => {
  res.render('Show', {
    product: product[req.params.id]
  });
})



// Port Listening
app.listen(PORT, () => {
  console.log('Listening on PORT: ', PORT)
})
