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
      <div className="container">
        <div className="row"></div>
        <div className="col-6-md" id="left">
          <textarea value={this.state.userInput} onChange={this.handleUserInput} rows="4" cols="50">
          </textarea>
        </div>
        <div className="col-6-md" id="right">
          {marked(this.state.userInput)}
        </div>
      </div>
    );
  }
});

module.exports = Input;
