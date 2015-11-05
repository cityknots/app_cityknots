/*
*	Module dependencies
*/
import Slider from './slider';
import React from 'react';

import Parse_Init from "./parse_start";
import Parse from 'parse';
import ParseReact from 'parse-react';

// Init slider plug-in
Slider();


class CommentBlock extends React.Component{
  observe() {
  	console.log("hi")
    // Subscribe to all Comment objects, ordered by creation date
    // The results will be available at this.data.comments
    return {
      comments: (new Parse.Query('list')).ascending('createdAt')
    };
  }

  render() {
  	console.log(this.data)
    // Render the text of each comment as a list item
    return (
      <ul>
        {this.data.comments.map(function(c) {
          return <li>{c.text}</li>;
        })}
      </ul>
    );
  }
};

React.render(
  <CommentBlock />,
  document.getElementById('main')
);










