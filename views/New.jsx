const React = require('react');
const DefaultLayout = require('./layouts/Default');


class New extends React.Component {
  render() {
    return (
      <DefaultLayout title={'Enter a New Product'} styles={[{key:0, href: '/css/app.css'}, {key:1, href:'/css/newpage.css'}]}>
        <h1>Enter a new product</h1>
        <form action='/product' method='POST'>
          Name: <input type='text' name='name' /><br/>
          Description: <input type='text' name='description' /><br/>
          Img: <input type='text' name='img' /><br/>
          Price: <input type='text' name='price' /><br/>
          Quantity: <input type='text' name='qty' /><br/>
          <input type="submit" name="" value="Create Product"/>
        </form>
      </DefaultLayout>
    )
  }
}

module.exports = New;
