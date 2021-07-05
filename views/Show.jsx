const React = require('react');
const DefaultLayout = require('./layouts/Default');


class Show extends React.Component {
  render () {
    const product = this.props.product;
    return (
      <DefaultLayout  title={`${this.props.product.name.toUpperCase()} Show Page`}>
        <h1>{product.name}</h1><br/>
        Brief Description: {product.description}<br/>
        Stock: {product.qty}<br/>
        <a href={`/product`}>Back to main page</a><br/>
        <a href={`/product/edit`}> Edit This Product</a><br/>
        <form method="POST" action={`/product/${product._id}?_method=Delete`}><input type="submit" value="Delete"/></form>
        <button>Buy</button>
      </DefaultLayout>
    );
  }
}
module.exports = Show;
