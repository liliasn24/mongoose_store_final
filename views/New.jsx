const React = require('react');

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>Enter a new product</h1>
        <form action='/product' method='POST'>
          Name: <input type='text' name='name' /><br/>
          Description: <input type='text' name='description' /><br/>
          Img: <input type='text' name='img' /><br/>
          Price: <input type='text' name='price' /><br/>
          Quantity: <input type='text' name='quantity' /><br/>
        </form>
      </div>
    )
  }
}

module.exports = New;
