var React = require('react');
var marked = require('marked');
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});

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
        <textarea value={this.state.userInput} onChange={this.handleUserInput} rows="4" cols="50">
        </textarea>
        {marked(this.state.userInput)}
      </div>
    );
  }
});

module.exports = Input;
