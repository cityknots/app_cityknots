var React = require('react');
var Nav = require('./nav/app-nav.js');

var Template = React.createClass({
  render:function(){
    return (
      <div className="container">
        <Nav />
        {this.props.children}
      </div>
    );
  }
});

module.exports = Template;
