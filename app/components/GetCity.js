var React = require('react');
var PropTypes = React.PropTypes;

function Button () {
  return (
    <button type='button'
      style={{margin: 10}}
      className='btn btn-success'
      onClick={props.onSubmitCity}>
        {props.children}
    </button>
  )
}
