var React = require('react');
var Header = require('../components/Header');
require('../main.css');

var Main = React.createClass({
  handleGetWeather: function() {
    console.log('Hello');
  },

  render: function() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
