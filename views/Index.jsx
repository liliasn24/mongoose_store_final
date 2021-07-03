const React = require('react');

class Index extends React.Component {
  render () {
    const product = this.props.product;
    return (
      <div>
        <h1>See all the Products</h1>
        <ul>
          {
            product.map((product, i) => {
              return (
                <li>
                  {product.name}<br/>
                  <a href={`/product/${i}`}><img src ={product.img}/></a><br/>
                  Price: {product.price}<br/>
                  <a href={'/product/new'}>Add a new product</a><br/>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
