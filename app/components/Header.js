var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <nav className='nav navbar-default navbar-fixed-top'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <a className='navbar-brand'>Hello, Weather</a>
          </div>

          <div className=''>
            <form className='navbar-form navbar-right'>
              <div className='form-group'>
                <input type='text' className='form-control' placeholder='Suva, Fiji' />
              </div>
              <button type='submit' className='btn btn-success'>Get Weather</button>
            </form>
          </div>
        </div>
      </nav>
    )
  }
});

module.exports = Header;
