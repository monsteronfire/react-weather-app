var React = require('react');
var ReactRouter = require('react-router');
var styles = require('../styles');

var Home = React.createClass({
  render: function() {
    return (
      <div style={styles.patternBackground}>
        <div className='col-sm-4 col-sm-offset-4 text-center'>
          <h1>Enter a City and State</h1>
          <input className='form-control' placeholder='Suva, Fiji' />
          <button type='button' className='btn btn-lg btn-success'>Get Weather!</button>
        </div>
      </div>
    )
  }
});

module.exports = Home;
