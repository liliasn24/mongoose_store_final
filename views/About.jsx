const React = require('react');
const DefaultLayout = require('./layouts/Default');


class About extends React.Component {
  render () {
    return (
      <DefaultLayout  styles={[{key:0, href: '/css/app.css'}, {key:1, href:'/css/aboutpage.css'}]}>
      <div class="jumbotron text-center">
        <h1 class="display-2 my-5">About us</h1>
        <p class="container">
          We make nourishing snacks that will fuel your brain and body for hours.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti repellat
          blanditiis voluptatum! Dolorum quidem eligendi similique reiciendis
          voluptatibus nobis doloremque praesentium porro. Architecto optio eum modi,
          facere officia harum aliquid.
        </p>
        <ul class="container text-center list-unstyled text-center">
          <li>Healthy snacks</li>
          <li>Plant based</li>
          <li>Fairtrade certified</li>
        </ul>
        <a class="btn btn-dark mt-5" href={`/product`}>Back to main page</a><br/>
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = About;
