const React = require('react');

class Show extends React.Component {
  render () {
    const product = this.props.product;
    return (
      <div>
        <h1>{product.name}</h1><br/>
        Brief Description: {product.description}<br/>
        Stock: {product.qty}<br/>
        <a href={`/product`}>Back to main page</a><br/>
        <a href={`/product/edit`}> Edit This Product</a><br/>
        <button>Delete</button><br/>
        <button>Buy</button>
      </div>
    );
  }
}
module.exports = Show;
