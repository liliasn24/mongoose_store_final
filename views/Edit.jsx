const React = require('react');
const DefaultLayout = require('./layouts/Default.jsx');

class Edit extends React.Component {
  render(){
    return(
      <DefaultLayout title='Edit Page'>
        <form method='POST' action={`/product/${this.props.product._id}?_method=PUT`}>
          Name: <input type='text' name='name' defaultValue={this.props.product.name}/><br/>
          Description: <input type='text' name='description' defaultValue={this.props.product.description}/><br/>
          Img: <input type='text' name='img' defaultValue={this.props.product.img}/><br/>
          Price: <input type='text' name='price' defaultValue={this.props.product.price}/><br/>
          Quantity: <input type='text' name='qty' defaultValue={this.props.product.qty}/><br/>
          <input type='submit' value='Submit Changes'/>
        </form>
      </DefaultLayout>
    )
  }
}

module.exports = Edit;
