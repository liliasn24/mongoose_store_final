const React = require('react');
const DefaultLayout = require('./layouts/Default');


class Show extends React.Component {
  render () {
    const product = this.props.product;
    return (
      <DefaultLayout title={`${this.props.product.name.toUpperCase()}`} styles={[{key:0, href: '/css/app.css'}, {key:1, href:'/css/showpage.css'}]}>
        <div class="info">
        Brief Description: {product.description}<br/>
        Quantity: {product.qty}<br/>
        Price: {product.price}<br/>
        </div>

        <a class="show" href={`/product/${product._id}/edit`}> Edit This Product</a><br/><br/><br/>
        <a class="show" href={'/product/new'}>Add a new product</a><br/><br/><br/>
        <a class="show" href={`/product`}>Back to main page</a><br/><br/><br/>
        <form class="buy" action={`/product/${product._id}/buy`}><input type="submit" value="Buy"/></form>
        <form class="delete" method="POST" action={`/product/${product._id}?_method=Delete`}><input type="submit" value="Delete"/></form>
      </DefaultLayout>
    );
  }
}
module.exports = Show;
