const React = require('react');
const DefaultLayout = require('./layouts/Default');


class About extends React.Component {
  render () {
    return (
      <DefaultLayout title={'Snacks About Page'}>
        <h1>About us</h1>
        <h3>
          We make nourishing snacks that will fuel your brain and body for hours.
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
