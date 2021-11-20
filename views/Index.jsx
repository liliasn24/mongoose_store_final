const React = require('react');
const DefaultLayout = require('./layouts/Default');
import { FaShoppingCart } from 'react-icons/fa';

class Index extends React.Component {
  render () {
    const product = this.props.product;
    return (
      <DefaultLayout styles={[{key:0, href: '/css/app.css'}, {key:1, href:'/css/indexpage.css'}]}>

      <nav class="navbar navbar-expand-sm navbar-light mb-3">
      <div class="container">
          <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div>
          <i className="buy">
          						<FaShoppingCart />
          					</i>
                    </div>
          <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                      <a class="nav-link" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">About</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">Services</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">Contact</a>
                  </li>
              </ul>
          </div>
      </div>
  </nav>
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
                  <button class="btn btn-dark mb-5">Add to Cart</button>

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
