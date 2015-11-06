// // /*
// //  * Module dependencies
// //  */
// // import React from 'react';
// // import Reflux from 'reflux';
// // import ListStore from '../stores/liststore';

// // var ListGrid = React.createClass({
// //   mixins: [Reflux.connect(ListStore, 'liststore')],

// //   render: function() {
// //       if (this.state.liststore) {
// //         return <div> 
// //           {
// //             this.state.liststore.map(function (item) {
// //               return <div className="image">
                
// //               </div>
// //           })
// //         }
// //         </div>
// //       }
// //       else {
// //           return (<p>No hay listas</p>);
// //       }
// //   }
// // });

// // module.exports = ListGrid;

//  * Module dependencies
 

// import React from 'react';
// import Reflux from 'reflux';
// import ImageStore from '../stores/imagestore';

// var ImageGrid = React.createClass({
//   mixins: [Reflux.connect(ImageStore, 'imagestore')],

//   render: function() {
//       if (this.state.imagestore) {
//         return <div> 
//           {
//             this.state.imagestore.map(function (image) {
//               return <div className="image">
//                 <a href={ image.link }>
//                     <img src={ image.media.m }></img>
//                 </a>
//               </div>
//           })
//         }
//         </div>
//       }
//       else {
//           return (<p>No hay imágenes</p>);
//       }
//   }
// });

// module.exports = ImageGrid;

/*
 * Module dependencies
 */
/*
 * Module dependencies
 */

import React from 'react';
import Reflux from 'reflux';
import ImageStore from '../stores/liststore';

var ImageGrid = React.createClass({
  mixins: [Reflux.connect(ImageStore, 'imagestore')],

  render: function() {
      if (this.state.imagestore) {
        return <div> 
          {
            this.state.imagestore.map(function (image) {
              return <div className="image">
                <p>hi</p>
              </div>
          })
        }
        </div>
      }
      else {
          return (<p>No hay imágenes</p>);
      }
  }
});

module.exports = ImageGrid;