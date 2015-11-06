/*
*	Module dependencies
*/
import Slider from './slider';
import React from 'react';

// import Parse_Init from "./parse_start";
// import Parse from 'parse';
// import ParseReact from 'parse-react';

// Init slider plug-in
Slider();

/*
 * Module dependencies
 */
import ImageGrid from './components/listComponent';

// Cada 5 segundos: recargar!
// setInterval(function() {
//     ListActions.fetchList(); 
// }, 5000);

React.render(
  <ImageGrid />,
  document.getElementById('main')
)











