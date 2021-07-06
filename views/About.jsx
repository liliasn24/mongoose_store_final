const React = require('react');
const DefaultLayout = require('./layouts/Default');


class About extends React.Component {
  render () {
    return (
      <DefaultLayout title={'Product About Page'}>
        <h1>About us</h1>
        <h3>
          We make energy bars inspired by the traditional candies in Mexico.
        </h3>
        <ul>
          <li>Healthy snacks</li>
          <li>Plant based</li>
          <li>Fairtrade certified</li>
        </ul>
      </DefaultLayout>
    )
  }
}

module.exports = About;
