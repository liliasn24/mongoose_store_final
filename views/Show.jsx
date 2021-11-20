const React = require('react');
const DefaultLayout = require('./layouts/Default');


class Show extends React.Component {
  render () {
    const product = this.props.product;
    return (
      <DefaultLayout styles={[{key:0, href: '/css/app.css'}, {key:1, href:'/css/showpage.css'}]}>
        <div class="container">
        <div class="display-6 text-center my-4">
        Product: {product.name}<br/>
        Brief Description: {product.description}<br/>
        Quantity: {product.qty}<br/>
        Price: {product.price}<br/>
        </div>
        <div class="text-center">
        <a class="btn btn-dark" href={`/product/${product._id}/edit`}> Edit This Product</a><br/><br/>
        <a class="btn btn-dark" href={'/product/new'}>Add a new product</a><br/><br/>
        <a class="btn btn-dark" href={`/product`}>Back to main page</a><br/><br/>
        </div>
        <form action={`/product/${product._id}/buy`}>
        <input class="form-control btn-dark btn-lg mb-5" type="submit" value="Add to cart"/></form>
        <form method="POST" action={`/product/${product._id}?_method=Delete`}>
        <input class="btn btn-danger" type="submit" value="Delete"/></form>
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Show;
