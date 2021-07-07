const React = require('react');
const DefaultLayout = require('./layouts/Default');


class Index extends React.Component {
  render () {
    const product = this.props.product;
    return (
      <DefaultLayout
        title={'Product Index Page'}>
        <h1>See all the Products</h1>
        <a href='/product/about'>About</a>
        <ul>
          {
            product.map((product, i) => {
              return (
                <li key={product._id}>
                  {product.name + '  ****'} Price: {'$' + product.price}<br/>
                  <a href={`/product/${product._id}`}><img src ={product.img}/></a><br/>

                </li>
              );
            })}
        </ul>

      </DefaultLayout>
    );
  }
}

module.exports = Index;
