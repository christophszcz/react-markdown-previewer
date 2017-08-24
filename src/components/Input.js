import React from 'react';

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
        <div className="row">
          <div className="col-md-6" id="left">
            <textarea value={this.state.userInput} onChange={this.handleUserInput} style={{height: '400px', width: '100%'}}>
            </textarea>
          </div>
          <div className="col-md-6" id="right">
            {marked(this.state.userInput)}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Input;
