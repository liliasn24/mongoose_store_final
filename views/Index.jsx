const React = require('react');
const DefaultLayout = require('./layouts/Default');


class Index extends React.Component {
  render () {
    const product = this.props.product;
    return (
      <DefaultLayout class="title"
        title={'Energy Snacks'} styles={[{key:0, href: '/css/app.css'}, {key:1, href:'/css/indexpage.css'}]}>
        <h1>See all the Products</h1>
        <a id="index" href='/product/about'>About</a>
        <ul>
          {
            product.map((product, i) => {
              return (
                <li class="container" key={product._id}>
                  {product.name + '  ****'} Price: {'$' + product.price}<br/>
                  <a href={`/product/${product._id}`}><img className='container' src ={product.img}/></a><br/>

                </li>
              );
            })}
        </ul>

      </DefaultLayout>
    );
  }
}

module.exports = Index;
