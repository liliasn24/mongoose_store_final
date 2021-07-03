const express = require('express');
const app = express();
const PORT = 3000;
const product = require('./models/product')

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());



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
/*
Delete
*/
/*
Update
*/
/*
Create
*/
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
