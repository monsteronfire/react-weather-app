var React = require('react');
var ReactRouter = require('react-router');
var styles = require('../styles');

var Home = React.createClass({
  render: function() {
    return (
      <div style={styles.patternBackground}>Home!</div>
    )
  }
});

module.exports = Home;
