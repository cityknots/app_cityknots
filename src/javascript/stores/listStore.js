// /*
//  * Module dependencies
//  */

// import Reflux from 'reflux';
// import $ from 'jquery';
// import ListActions from '../actions/ListActions';

// var ListStore = Reflux.createStore({
//     listenables: [ListActions],
//     lists: [],
//     sourceUrl: 'https://api.parse.com/1/classes/list',

//     init: function() {
//         this.fetchList();
//     },

//     fetchList: function() {
//       $.ajax({
//           beforeSend: function(request) {
//             request.setRequestHeader("X-Parse-Application-Id", 'Yl7PNaBFgL8ETlknO5zcr0Yk94BA0wlIPpmLBjVL');
//             request.setRequestHeader("X-Parse-REST-API-Key", 'UxDVcEUOQA9K7wfGXjjt4bLuWcNXYcfmG4B6oRW2');
//           },
//           url: this.sourceUrl,
//           type: 'GET',
//           context: this,
//           success: function(data) {
//               console.log('Se recibieron: ' + data.results.length + ' listas');
//               this.lists = data.results;
//               this.trigger(this.lists);
//           }
//       });
//     }
// });

// export default ListStore;

import Reflux from 'reflux';
import $ from 'jquery';
import ImageActions from '../actions/ListActions';

var ImageStore = Reflux.createStore({
    listenables: [ImageActions],
    imagelist: [],
    sourceUrl: 'https://api.parse.com/1/classes/list',

    init: function() {
        this.fetchList();
    },

    fetchList: function() {
      $.ajax({
        beforeSend: function(request) {
            request.setRequestHeader("X-Parse-Application-Id", 'Yl7PNaBFgL8ETlknO5zcr0Yk94BA0wlIPpmLBjVL');
            request.setRequestHeader("X-Parse-REST-API-Key", 'UxDVcEUOQA9K7wfGXjjt4bLuWcNXYcfmG4B6oRW2');
          },
          url: this.sourceUrl,
          type: 'GET',
          // url: this.sourceUrl + `&tag=${randomTag}`,
          // dataType: 'jsonp',
          // cache: false,
          context: this,
          success: function(data) {
              console.log('fetch complete');
              console.log(data.results)
              this.imagelist = data.results;
              this.trigger(this.imagelist);
          }
      });
    }
});

export default ImageStore;