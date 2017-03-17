var React = require('react');

var Input = React.createClass({
	getInitialState : function(){
    return {
      userInput : "" 
     };
  },
	handleUserInput : function(e){
    this.setState({
    	userInput : e.target.value
    });
  },
  render: function () {
    return (
      <div>
        <input value={this.state.userInput} onChange={this.handleUserInput} type="text"/>
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
});

module.exports = Input;
