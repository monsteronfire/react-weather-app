var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
  render: function() {
    return (
      <div>Hello Poop!</div>
    )
  }
});

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);

module.exports = HelloWorld;
