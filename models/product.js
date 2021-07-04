const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: false },
  price: { type: Number, required: true },
  qty: { type: Number, required: true }
});

 const Product = model('Product', productSchema);

 module.exports = Product;
