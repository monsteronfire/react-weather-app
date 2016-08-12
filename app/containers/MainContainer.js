var React = require('react');

function MainContainer(props) {
  return (
    <div>
      {props.children}
    </div>
  )
}

module.exports = MainContainer;
