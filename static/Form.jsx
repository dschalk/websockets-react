'use strict'

var React = require('react');

var App = React.createClass({
  getInitialState: function () {
    return {
      username: '',
      password: ''
    }
  },
  handleChange: function (key) {
    return function (e) {
      var state = {};
      state[key] = e.target.value;
      this.setState(state);
    }.bind(this);
  },
  render: function(){
    console.log(JSON.stringify(this.getFormData(), null, 4));
    return (
      <div>
        <form>
          Username: <input
                value={this.state.username}
                onChange={this.handleChange('username')} />
          <br />
          Password: <input type="password"
                value={this.state.password}
                onChange={this.handleChange('password')} />
        </form>

        <pre>{JSON.stringify(this.getFormData(), null, 4)}</pre>
      </div>
    );
  }
});

React.renderComponent(<App />, document.body);
