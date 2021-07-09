const React = require('react');
const DefaultLayout = require('./layouts/Default');


class Show extends React.Component {
  render () {
    const product = this.props.product;
    return (
      <DefaultLayout  title={`${this.props.product.name.toUpperCase()} Show Page`} styles={[{key:0, href: '/css/app.css'}, {key:1, href:'/css/showpage.css'}]}>
        <h1>{product.name}</h1><br/>
        Brief Description: {product.description}<br/>
        Quantity: {product.qty}<br/>
        Price: {product.price}<br/>
        <a href={`/product/${product._id}/edit`}> Edit This Product</a><br/>
        <a href={'/product/new'}>Add a new product</a><br/>
        <a href={`/product`}>Back to main page</a><br/>
        <form action={`/product/${product._id}/buy`}><input type="submit" value="Buy"/></form>
        <form method="POST" action={`/product/${product._id}?_method=Delete`}><input type="submit" value="Delete"/></form>
      </DefaultLayout>
    );
  }
}
module.exports = Show;
