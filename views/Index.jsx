const React = require('react');
const DefaultLayout = require('./layouts/Default');


class Index extends React.Component {
  render () {
    const product = this.props.product;
    return (
      <DefaultLayout styles={[{key:0, href: '/css/app.css'}, {key:1, href:'/css/indexpage.css'}]}>
      <div class="container">
        <h1 class="display-2 text-center my-4">See all the Products</h1>
        <a class="btn btn-dark mb-5" id="index" href='/product/about'>About</a>
        <ul class="d-flex flex-wrap list-unstyled text-center">
          {
            product.map((product, i) => {
              return (
                <li class="m-3" key={product._id}>
                  <a href={`/product/${product._id}`}><img className='container' src ={product.img}/></a><br/>
                  {product.name + '  ****'} Price: {'$' + product.price}<br/>

                </li>
              );
            })}
        </ul>
        </div>

      </DefaultLayout>
    );
  }
}

module.exports = Index;
