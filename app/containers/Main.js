var React = require('react');

var Main = React.createClass({
  render: function() {
    return (
      <div>Hello Pooper!
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
