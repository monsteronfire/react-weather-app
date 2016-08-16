var React = require('react');
var ReactRouter = require('react-router');
var styles = require('../styles');
var getForecast = require('../utils/openWeatherMapHealpers.js');

var Home = React.createClass({
  getDefaultProps: function () {
    return {
      direction: 'column'
    }
  },

  propTypes: {
    direction: PropTypes.string
  },

  getInitialState: function () {
    return {
      city: ''
    }
  },

  handleSubmitCity: function () {
    console.log(this.state.city)
    getForecast(this.state.city)
  },

  handleUpdateCity: function (e) {
    this.setState({
      city: e.target.value
    })
  },

  render: function() {
    return (
      <div className='weather-form-wrapper' style={styles.patternBackground}>
        <form className='col-sm-3 text-center'>
          <h1>Enter a City and State</h1>
          <input className='form-control' placeholder='Suva, Fiji' style={styles.space} />
          <button type='button' className='btn btn-lg btn-success' style={styles.space} onClick={props.onGetWeather}>
            Get Weather!
          </button>
        </form>
      </div>
    )
  }
});

module.exports = Home;
