
require('dotenv').config()
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const PORT = 3000;


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
  res.locals.data = {}
  next()
});

app.use(express.urlencoded({ extended: true
}))


app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use('/product', require('./controllers/routeController'));



// Port Listening
app.listen(PORT, () => {
  console.log('Listening on PORT: ', PORT)
})
