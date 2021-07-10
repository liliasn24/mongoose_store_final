
require('dotenv').config()
const express = require('express');
const methodOverride = require('method-override');
const db = require('./models/db')
const app = express();
const PORT = process.env.PORT || 3000;

//Set up data
db.once('connected', () => {
  console.log('connected to mongo')
})

// Set up view engine
app.use(express.static('public'))
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use((req, res, next) => {
  res.locals.data = {}
  next()
});

//Set up middleware and controllers
app.use(express.urlencoded({ extended: true
}))
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use('/product', require('./controllers/routeController'));


// Port Listening
app.listen(PORT, () => {
  console.log('Listening on PORT: ', PORT)
})
