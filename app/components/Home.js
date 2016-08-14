var React = require('react');
var ReactRouter = require('react-router');
var styles = require('../styles');

var Home = React.createClass({
  render: function() {
    return (
      <div className='weather-form-wrapper' style={styles.patternBackground}>
        <form className='col-sm-4 text-center'>
          <h1>Enter a City and State</h1>
          <input className='form-control' placeholder='Suva, Fiji' style={styles.space} />
          <button type='button' className='btn btn-lg btn-success' style={styles.space}>
            Get Weather!
          </button>
        </form>
      </div>
    )
  }
});

module.exports = Home;
