var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity');
var getForecast = require('../helpers/openWeatherMapHealpers.js');

var GetCityContainer = React.createClass({
  getDefaultProps: function () {
    return (
      direction: 'column'
    )
  },

  propTypes: {
    direction: PropTypes.string
  },

  getInitialState: function () {
    return (
      city: ''
    )
  },

  handleSubmitCity: function () {
    console.log(this.state.city);
    getForecast(this.state.city)
  },

  handleUpdateCity: function () {
    this.setState({
      city: e.target.value
    })
  },

  render: function () {
    return (
      <GetCity
        direction={this.props.direction}
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity}
        city={this.state.city} />
    )
  }
});
