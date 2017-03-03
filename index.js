var React = require('react');
var ReactDOM = require('react-dom');

var Entry = React.createClass({
  render: function(){
    return (
      <div className="myDiv">
        Hello Electron! Pasta Hello
      </div>
    )
  }
});

ReactDOM.render(<Entry />, document.getElementById('content'));