const React = require('react');
const DefaultLayout = require('./layouts/Default');

const h1Style = {
  color: '#000000',
  backgroundColor: '#CC6666',
  fontStyle: 'italic',
}



class Index extends React.Component {
  render () {
    const product = this.props.product;
    return (
      <DefaultLayout title={'Product Index Page'}>
        <h1 style={h1Style}>See all the Products</h1>
        <ul>
          {
            product.map((product, i) => {
              return (
                <li key={product._id}>
                  {product.name}<br/>
                  <a href={`/product/${product._id}`}><img src ={product.img}/></a><br/>
                  Price: {product.price}<br/>
                  <a href={'/product/new'}>Add a new product</a><br/>
                </li>
              );
            })}
        </ul>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
