const React = require('react');
const DefaultLayout = require('./layouts/Default.jsx');

class Edit extends React.Component {
  render(){
    return(
      <DefaultLayout styles={[{key:0, href: '/css/app.css'}, {key:1, href:'/css/editpage.css'}]}>
      <div class="container">
      <h1 class="display-2 text-center my-4">Edit this item</h1>
        <form method='POST' action={`/product/${this.props.product._id}?_method=PUT`}>
          Name: <input class="form-control" type='text' name='name' defaultValue={this.props.product.name}/><br/>
          Description: <input class="form-control" type='text' name='description' defaultValue={this.props.product.description}/><br/>
          Img: <input class="form-control" type='text' name='img' defaultValue={this.props.product.img}/><br/>
          Price: <input class="form-control" type='text' name='price' defaultValue={this.props.product.price}/><br/>
          Quantity: <input class="form-control" type='text' name='qty' defaultValue={this.props.product.qty}/><br/>
          <input class="form-control btn-dark btn-lg" type='submit' value='Submit Changes'/>
        </form>
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = Edit;
