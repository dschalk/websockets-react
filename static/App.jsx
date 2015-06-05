'use strict'

var React = require('react');

var app = app || {}
app.components = app.components || {};

(function() {
  'use strict'

var Score = app.components.Score = React.createClass({
  render: function() {
    return (
    <div>
      The Game of Score
    </div>
    )
  }

  React.render(<Score />, document.getElementById('mainDiv'));

  })
})();
